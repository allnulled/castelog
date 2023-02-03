"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const debugInFile = (...args) => {
    const params = [];
    for(let index = 0; index < args.length; index++) {
        let arg = args[index];
        params.push(arg);
    }
    require("fs").writeFileSync(__dirname + "/.debugando-castelog.json", JSON.stringify(params, null, 2), "utf8");
}
const getTextFromLineAndChar = function(subtext, line0, ch0, lineN, chN) {
    let currentLine = 1;
    let currentChar = 0;
    let output = "";
    IteratingText:
    for(let index = 0; index < subtext.length; index++) {
        currentChar++;
        let subch = subtext[index];
        const isMinimumLine = currentLine === line0;
        const isMaximumLine = currentLine === lineN;
        const acceptsMinimumLine = currentLine > line0;
        const acceptsMaximumLine = currentLine < lineN;
        let acceptsMinimum = acceptsMinimumLine;
        let acceptsMaximum = acceptsMaximumLine;
        if(acceptsMinimumLine && acceptsMaximumLine) {
            output += subch;
        } else {
            if(isMinimumLine) {
                acceptsMinimum = currentChar >= ch0;
            }
            if(isMaximumLine) {
                acceptsMaximum = currentChar < chN;
            }
            if(acceptsMinimum && acceptsMaximum) {
                output += subch;
            }
        }
        if(subch === "\n") {
            currentLine++;
            currentChar = 0;
        }
    }
    return output;
}
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
const getRandomString = (len, alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") => {
    let out = "";
    for(let index = 0; index < len; index++) {
        let ch = alphabet[Math.floor(Math.random() * alphabet.length)];
        out += ch;
    }
    return out;
};
let allDiagnostics = [];
connection.onInitialize((params) => {
    const capabilities = params.capabilities;
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation);
    const result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
            // Tell the client that this server supports code completion.
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: [],
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});
connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        connection.client.register(node_1.DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log('Workspace folder change event received.');
        });
    }
});
const defaultSettings = { maxNumberOfProblems: 1000 };
let globalSettings = defaultSettings;
const documentSettings = new Map();
connection.onDidChangeConfiguration(change => {
    if (hasConfigurationCapability) {
        documentSettings.clear();
    }
    else {
        globalSettings = ((change.settings.CastelogLanguageServer || defaultSettings));
    }
    documents.all().forEach(validateTextDocument);
});
function getDocumentSettings(resource) {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'CastelogLanguageServer'
        });
        documentSettings.set(resource, result);
    }
    return result;
}
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});
async function validateTextDocument(textDocument) {
    const settings = await getDocumentSettings(textDocument.uri);
    const text = textDocument.getText();
    // debugInFile({ inValidation: true, text, textDocument });
    const pattern = /\b[A-Z]{2,}\b/g;
    let m;
    let problems = 0;
    const diagnostics = [];
    while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
        problems++;
        const diagnostic = {
            severity: node_1.DiagnosticSeverity.Warning,
            range: {
                start: textDocument.positionAt(m.index),
                end: textDocument.positionAt(m.index + m[0].length)
            },
            message: `${m[0]} is all uppercase.`,
            source: 'ex'
        };
        if (hasDiagnosticRelatedInformationCapability) {
            diagnostic.relatedInformation = [
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Spelling matters'
                },
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Particularly for names'
                }
            ];
        }
        diagnostics.push(diagnostic);
    }
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics: [] });
}
connection.onDidChangeWatchedFiles(_change => {
    connection.console.log('We received an file change event');
});
connection.onCompletion(async _textDocumentPosition => {
    const { line, character } = _textDocumentPosition.position;
    const text = documents.get(_textDocumentPosition.textDocument.uri);
    const subtext = getTextFromLineAndChar(text._content, 1, 1, line + 1, character + 1);
    const CastelogParser = require(__dirname + "/castelog.js");
    debugInFile("onCompletion:", subtext);
    const syntaxSuggestions = [];
    try {
        const jscode = CastelogParser.parse(subtext);
        const jscode2 = CastelogParser.parse(subtext + "¨");
    } catch (error) {
        debugInFile({ error: { location: error.location, expected: error.expected, found: error.found }});
        if(error.location) {
            IteratingExpectations:
            for(let index = 0; index < error.expected.length; index++) {
                let expectation = error.expected[index];
                if(expectation.type === 'literal') {
                    if(syntaxSuggestions.filter(s => s.label.toLowerCase() === expectation.text.toLowerCase()).length)
                        continue IteratingExpectations;
                    syntaxSuggestions.push({
                        label: expectation.text,
                        kind: node_1.CompletionItemKind.Text,
                        data: 70 + index,
                        detail: "",
                        documentation: "",
                    })
                } else if(expectation.type === 'other') {
                    if(syntaxSuggestions.filter(s => s.label.toLowerCase() === ("{ " + expectation.description + " }").toLowerCase()).length)
                        continue IteratingExpectations;
                    syntaxSuggestions.push({
                        label: "{ " + expectation.description + " }",
                        kind: node_1.CompletionItemKind.Text,
                        insertText: expectation.description === "salto" ? " " : "\n",
                        data: 70 + index,
                        detail: "",
                        documentation: "",
                    })
                } else if(expectation.type === 'class') {
                    if(syntaxSuggestions.filter(s => s.label.toLowerCase() === ("{ " + JSON.stringify(expectation.parts) + " }").toLowerCase()).length)
                        continue IteratingExpectations;
                    syntaxSuggestions.push({
                        label: "{ " + JSON.stringify(expectation.parts) + " }",
                        kind: node_1.CompletionItemKind.Text,
                        insertText: "*",
                        data: 70 + index,
                        detail: "",
                        documentation: "",
                    })
                }
            }
        }
    }
    debugInFile("onCompletion", text, line, character, subtext, syntaxSuggestions);
    return syntaxSuggestions;
    //{ label: JSON.stringify(), kind: node_1.CompletionItemKind.Text, data: 1002, detail: "", documentation: "" }
    ;
});
connection.onCompletionResolve(item => item);
/*
connection.onDidChangeTextDocument(event => {
    const filecontents = textDocument.getText();
    const CastelogParser = require(__dirname + "/castelog.js");
    debugInFile(event);
    try {
        const jscontents = CastelogParser.parse(filecontents);
    } catch (error) {
        if(error.location) {
            const syntaxSuggestions = [];
            IteratingExpectations:
            for(let index = 0; index < error.expected.length; index++) {
                let expectation = error.expected[index];
                if(expectation.type === "literal") {
                    const repetitions = syntaxSuggestions.filter(s => {
                        return s.label.toLowerCase() === expectation.text.toLowerCase();
                    });
                    if(repetitions.length !== 0) {
                        continue IteratingExpectations;
                    }
                    syntaxSuggestions.push({
                        label: expectation.text,
                        kind: node_1.CompletionItemKind.Text,
                        data: index + 10,
                        detail: expectation.text,
                        documentation: "",
                    });
                } else if(expectation.type === "other") {
                    const repetitions = syntaxSuggestions.filter(s => {
                        return s.label.toLowerCase() === ("{ "+expectation.description+" }").toLowerCase();
                    });
                    if(repetitions.length !== 0) {
                        continue IteratingExpectations;
                    }
                    syntaxSuggestions.push({
                        label: "{ "+expectation.description+" }",
                        insertText: expectation.description === "salto" ? "\n" : expectation.description === "espacio" ? " " : "?",
                        kind: node_1.CompletionItemKind.Text,
                        data: index + 10,
                        detail: expectation.description,
                        documentation: "",
                    });
                } else if(expectation.type === "class") {
                    const repetitions = syntaxSuggestions.filter(s => {
                        return s.label.toLowerCase() === ("{ "+expectation.parts+" }").toLowerCase();
                    });
                    if(repetitions.length !== 0) {
                        continue IteratingExpectations;
                    }
                    syntaxSuggestions.push({
                        label: "{ "+JSON.stringify(expectation.parts)+" }",
                        kind: node_1.CompletionItemKind.Text,
                        insertText: "",
                        data: index + 10,
                        detail: "",
                        documentation: "",
                    });
                } else {
                    syntaxSuggestions.push({
                        label: "{ "+JSON.stringify(expectation)+" }",
                        kind: node_1.CompletionItemKind.Text,
                        data: index + 10,
                        detail: "",
                        documentation: "",
                    });
                }
            }
            return syntaxSuggestions;
        }
    }
});
//*/
documents.listen(connection);
connection.listen();
// # sourceMappingURL=server.js.map