//RestUtils.require("fs").writeFileSync(__dirname + "/../process.json", "" + process.pid, "utf8");

(function (scope, factory) {
    const jsmodule = factory();
    if (typeof window !== "undefined") {
        window.Automatic_http_rest_api_interface = jsmodule;
    }
    if (typeof global !== "undefined") {
        global.Automatic_http_rest_api_interface = jsmodule;
    }
    if (typeof define === "function") {
        define("Automatic_http_rest_api_interface", jsmodule);
    }
    if (typeof module !== "undefined") {
        module.exports = jsmodule;
    }
    return jsmodule;
})(this, () => function (factoryParameters) {

    const defaultConfigurations = {
        platform: "node", // "browser"
        environment: "production", // "development", "testing"
        debug: true,
        debugSQL: true,
        debugErrors: true,
        responseWrapper: {
            app: {
                title: "Automatic HTTP REST API development",
                author: {
                    name: "allnulled",
                    telephone: "+34 619 98 26 22",
                    url: "https://www.github.com/allnulled",
                }
            }
        },
        traceCallback: function (id) {
            if (configurations.debug) {
                if (configurations.platform === "node") {
                    console.log("\u001b[32m[TRACE]\u001b[0m " + id);
                } else {
                    console.log("[TRACE] " + id);
                }
            }
        },
        traceSQLCallback: function (id) {
            if (configurations.debugSQL) {
                if (configurations.platform === "node") {
                    console.log("\u001b[33m[·SQL·]\u001b[0m " + id.split("\n").join("\n  "));
                } else {
                    console.log("[·SQL·] " + id);
                }
            }
        },
        traceErrorCallback: function (error) {
            try {
                if (configurations.debugErrors) {
                    let id = undefined;
                    if (typeof error === "string") {
                        id = error;
                    } else if (error instanceof Error) {
                        id = error.name + ": " + error.message + "\n      " + error.stack + "";
                    }
                    if (configurations.platform === "node") {
                        console.log("\u001b[31m[ERROR]\u001b[0m " + id.split("\n").join("\n  "));
                    } else {
                        console.log("[ERROR] " + id);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
    };

    const configurations = Object.assign(defaultConfigurations, factoryParameters);
    const trace = configurations.traceCallback;
    const traceSQL = configurations.traceSQLCallback;
    const traceError = configurations.traceErrorCallback;

    const RestClient = function (baseUrl, client = {}) {
        Object.assign(client, {
            defaults: {
                headers: {
                    common: {
                        // @CONFIGURABLE
                    }
                }
            },
            request: (method, url, requestArgs = {}, requestConfigArgs = {}, responseArgs = {}, ...args) => {
                trace("DataServer.prototype.createClient:request");
                const parsedUrl = RestUtils.require("url").parse(url);
                trace("RestClient is requesting: " + url);
                const requestParameters = Object.assign({}, requestArgs);
                const responseParameters = Object.assign({}, responseArgs);
                if (configurations.platform === "browser") {
                    const queryParameters = Object.assign({}, requestParameters);
                    requestParameters.headers = Object.assign({}, client.defaults.headers.common, requestConfigArgs.headers || {});
                    requestParameters.query = queryParameters;
                    if (parsedUrl.pathname.startsWith(client.server.basePathForData)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForAuth)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForProcess)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForQuery)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else {
                        throw new Error("Required parameter «url» to start as a valid basepath on browser in order to «createClient:request»");
                    }
                } else if (configurations.platform === "node") {
                    const requestConfigParameters = Object.assign({}, { headers: {} }, requestConfigArgs);
                    Object.assign(requestConfigParameters.headers, client.defaults.headers.common,)
                    if (parsedUrl.pathname.startsWith(client.server.basePathForData)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForAuth)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForProcess)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForQuery)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else {
                        throw new Error("Required parameter «url» to start as a valid basepath on browser in order to «createClient:request»");
                    }
                } else {
                    throw new Error("Required configuration «platform» to be a valid platform on node in order to «createClient:request»");
                }
            },
            auth: {
                login: (user, password) => {
                    trace("DataServer.prototype.createClient:auth:login");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/login");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                        password,
                    }).toString());
                },
                logout: (session_token) => {
                    trace("DataServer.prototype.createClient:auth:logout");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/logout");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        session_token: session_token,
                    }).toString());
                },
                register: (user, password, email) => {
                    trace("DataServer.prototype.createClient:auth:register");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/register");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                        password,
                        email,
                    }).toString());
                },
                confirm: (token) => {
                    trace("DataServer.prototype.createClient:auth:confirm");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/confirm");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        token,
                    }).toString());
                },
                forgot: (user) => {
                    trace("DataServer.prototype.createClient:auth:forgot");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/forgot");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                    }).toString());
                },
                recover: (token) => {
                    trace("DataServer.prototype.createClient:auth:recover");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/recover");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        token,
                    }).toString());
                },
                unregister: (user, password) => {
                    trace("DataServer.prototype.createClient:auth:unregister");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/unregister");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                        password,
                    }).toString());
                },
            },
            rest: {
                selectOne: (model, where) => {
                    trace("DataServer.prototype.createClient:rest:selectOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/select/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where)
                    }).toString());
                },
                selectMany: (model, where = [], order = [], group = [], pagination = []) => {
                    trace("DataServer.prototype.createClient:rest:selectMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/select/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                        group: JSON.stringify(group),
                        order: JSON.stringify(order),
                        pagination: JSON.stringify(pagination)
                    }).toString());
                },
                insertOne: (model, item) => {
                    trace("DataServer.prototype.createClient:rest:insertOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/insert/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        item: JSON.stringify(item),
                    }).toString());
                },
                insertMany: (model, items) => {
                    trace("DataServer.prototype.createClient:rest:insertMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/insert/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        items: JSON.stringify(items),
                    }).toString());
                },
                updateOne: (model, where, values) => {
                    trace("DataServer.prototype.createClient:rest:updateOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/update/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                        values: JSON.stringify(values),
                    }).toString());
                },
                updateMany: (model, where, values) => {
                    trace("DataServer.prototype.createClient:rest:updateMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/update/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                        values: JSON.stringify(values),
                    }).toString());
                },
                deleteOne: (model, where) => {
                    trace("DataServer.prototype.createClient:rest:deleteOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/delete/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                    }).toString());
                },
                deleteMany: (model, where) => {
                    trace("DataServer.prototype.createClient:rest:deleteMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/delete/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                    }).toString());
                },
            },
            queries: client.server.queries.reduce((output, item) => {
                output[item.id] = (parameters, ...args) => {
                    trace("DataServer.prototype.createClient:queries:" + item.id);
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForQuery, item.path);
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams(parameters), ...args);
                };
                return output;
            }, {}),
            processes: client.server.processes.reduce((output, item) => {
                output[item.id] = (parameters, ...args) => {
                    trace("DataServer.prototype.createClient:processes:" + item.id);
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForProcess, item.path);
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams(parameters), ...args);
                };
                return output;
            }, {})
        });
        return Object.assign(this, client);
    };

    ////////////////////////////////////////////////////////////////////////
    // -1. Hooks class:
    const Hooks = function () {
        this.hooks = {};
    };
    Hooks.create = function (...args) {
        trace("Hooks.create");
        return new Hooks(...args);
    };
    Hooks.prototype.addHook = function (selectorString, hookId, event) {
        trace("Hooks.prototype.addHook");
        if (typeof selectorString !== "string") {
            throw new Error("Required argument «selectorString» to be an array in order to «addHook»");
        } else if (selectorString.length === 0) {
            throw new Error("Required argument «selectorString» to have one or more items in order to «addHook»");
        }
        if (typeof hookId !== "string") {
            throw new Error("Required argument «hookId» to be a string in order to «addHook»");
        }
        if (typeof event !== "function") {
            throw new Error("Required argument «event» to be a function in order to «addHook»");
        }
        if (!(selectorString in this.hooks)) {
            this.hooks[selectorString] = [];
        }
        this.hooks[selectorString].push({
            id: hookId,
            event
        });
        return this;
    };
    Hooks.prototype.addHooks = function (selectorList, hookId, event) {
        trace("Hooks.prototype.addHooks");
        if (!Array.isArray(selectorList)) {
            throw new Error("Required argument «selectorList» to be an array in order to «addHooks»");
        } else if (selectorList.length === 0) {
            throw new Error("Required argument «selectorList» to have one or more items in order to «addHooks»");
        }
        if (typeof hookId !== "string") {
            throw new Error("Required argument «hookId» to be a string in order to «addHooks»");
        }
        if (typeof event !== "function") {
            throw new Error("Required argument «event» to be a function in order to «addHooks»");
        }
        const selectors = Array.isArray(selectorList) ? selectorList : [selectorList];
        for (let indexSelectors = 0; indexSelectors < selectors.length; indexSelectors++) {
            const selector = selectors[indexSelectors];
            this.addHook(selector, hookId, event);
        }
        return this;
    };
    Hooks.prototype.useHook = async function (selectorString, parameters = {}) {
        trace("Hooks.prototype.useHook");
        try {
            trace("Throwing hook: " + selectorString);
            if (typeof selectorString !== "string") {
                throw new Error("Required argument «selectorString» to be a string in order to «useHook»");
            }
            if (typeof parameters !== "object") {
                throw new Error("Required argument «parameters» to be an object or omitted in order to «useHook»");
            }
            if (!(selectorString in this.hooks)) {
                return parameters;
            }
            const hookEvents = this.hooks[selectorString];
            IteratingSelection:
            for (let indexList = 0; indexList < hookEvents.length; indexList++) {
                const hookEvent = hookEvents[indexList];
                let hookFunction = undefined;
                if (typeof hookEvent === "object") {
                    if (typeof hookEvent.event === "function") {
                        hookFunction = hookEvent.event;
                    } else throw new Error("Required hook «" + selectorString + "» on index «" + indexList + "» on property «event» to be a function in order to «useHook»");
                } else throw new Error("Required hook «" + selectorString + "» on index «" + indexList + "» to be an object in order to «useHook»");
                const result = await hookFunction(parameters);
                if (typeof result !== "undefined") {
                    parameters = result;
                }
            }
            return parameters;
        } catch (error) {
            this.onError(error);
        }
    };
    Hooks.prototype.replaceHook = function (selectorString, hookId, eventSource) {
        trace("Hooks.prototype.replaceHook");
        try {
            if (typeof selectorString !== "string") {
                throw new Error("Required argument «selectorString» to be a string in order to «replaceHook»");
            }
            if (!(selectorString in this.hooks)) {
                throw new Error("Required argument «selectorString» to be a valid hook id in order to «replaceHook»");
            }
            if (typeof hookId !== "string") {
                throw new Error("Required argument «hookId» to be a string in order to «replaceHook»");
            }
            if (typeof eventSource !== "object") {
                throw new Error("Required argument «eventSource» to be an object in order to «replaceHook»");
            }
            if (typeof eventSource.id !== "string") {
                throw new Error("Required argument «eventSource.id» to be a string in order to «replaceHook»");
            }
            if (typeof eventSource.event !== "function") {
                throw new Error("Required argument «eventSource.event» to be a function in order to «replaceHook»");
            }
            let count = 0;
            const hookEvents = this.hooks[selectorString];
            IteratingSelection:
            for (let indexList = 0; indexList < hookEvents.length; indexList++) {
                const hookEvent = hookEvents[indexList];
                if (hookEvent.id === hookId) {
                    this.hooks[selectorString].splice(indexList, 1, eventSource);
                    count++;
                }
            }
            return count;
        } catch (error) {
            this.onError(error);
        }
    };
    Hooks.prototype.removeHook = function (selectorString, hookId) {
        trace("Hooks.prototype.removeHook");
        try {
            if (typeof selectorString !== "string") {
                throw new Error("Required argument «selectorString» to be a string in order to «removeHook»");
            }
            if (!(selectorString in this.hooks)) {
                throw new Error("Required argument «selectorString» to be a valid hook id in order to «removeHook»");
            }
            if (typeof hookId !== "string") {
                throw new Error("Required argument «hookId» to be an string in order to «removeHook»");
            }
            let count = 0;
            const hookEvents = this.hooks[selectorString];
            IteratingSelection:
            for (let indexList = 0; indexList < hookEvents.length; indexList++) {
                const hookEvent = hookEvents[indexList];
                if (typeof hookEvent === "object") {
                    if (hookEvent.id === hookId) {
                        this.hooks[selectorString].splice(indexList, 1);
                        count++;
                    }
                }
            }
            return count;
        } catch (error) {
            this.onError(error);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 0. RestUtils object:
    const RestUtils = {
        prototype: {},
        modules: {},
        modulePolyfills: {
            "mysql2/promise": {
                createConnection: function () {
                    trace("polyfill://require:mysql2/promise:createConnection");
                    return {
                        ping() {
                            trace("polyfill://require:mysql2/promise:createConnection:ping");
                            // throw new Error("Method ping must be overriden");
                        },
                        query(query, ...args) {
                            trace("polyfill://require:mysql2/promise:createConnection:query");
                            console.log("Function «RestUtils.modulePolyfills.mysql2/promises.createConnection.query» to be overwritten");
                            console.log(query);
                            return [[], []];
                        },
                        proxifiedQuery(query, ...args) {
                            trace("polyfill://require:mysql2/promise:createConnection:proxifiedQuery");
                            traceSQL(query);
                            return this.query(query, ...args);
                        }
                    }
                }
            },
            "url": {
                parse: function (parameter) {
                    trace("polyfill://require:url:parse x " + parameter);
                    return new URL(parameter);
                },
            },
            "sqlstring": {
                sanitize: function (arg) {
                    trace("polyfill://require:sqlstring:sanitize");
                    return arg;
                },
                sanitizeId: function (arg) {
                    trace("polyfill://require:sqlstring:sanitizeId");
                    return arg;
                },
            },
            "path": {
                resolve: function (...args) {
                    trace("polyfill://require:path:resolve");
                    return ["", ...args].map(i => i.replace(/^\//g, "").replace(/\/$/g, "")).join("/");
                },
                join: function (...args) {
                    trace("polyfill://require:path:join");
                    return ["", ...args].filter(i => typeof i !== "undefined").map(i => i.replace(/^\//g, "").replace(/\/$/g, "")).join("/");
                },
            },
            "http": {
                createServer: function (controller) {
                    trace("polyfill://require:http:createServer");
                    return {
                        listen: function (options, callback) {
                            trace("polyfill://require:http:createServer:listen");
                            setTimeout(callback, 0);
                        }
                    }
                }
            },
        },
        require: function (modulepath) {
            trace("RestUtils.require");
            if (modulepath in RestUtils.modules) {
                return RestUtils.modules[modulepath];
            }
            if (configurations.platform === "browser") {
                if (modulepath in RestUtils.modulePolyfills) {
                    return RestUtils.modulePolyfills[modulepath];
                } else {
                    throw new Error("Not identified package: " + modulepath);
                }
            }
            RestUtils.modules[modulepath] = require(modulepath);
            return RestUtils.modules[modulepath];
        },
        define: function (name, value) {
            trace("RestUtils.define");
            RestUtils.modules[name] = value;
        },
        definePolyfill: function (name, value) {
            trace("RestUtils.definePolyfill");
            RestUtils.modulePolyfills[name] = value;
        },
        wrapResponse: function (data) {
            trace("RestUtils.wrapResponse");
            return {
                ...configurations.responseWrapper,
                ...data,
                time: new Date().toString()
            };
        },
        respondContext: function (context) {
            trace("RestUtils.respondContext");
            const response = context.output;
            const responseWrapped = RestUtils.wrapResponse(response);
            const responseJson = JSON.stringify(responseWrapped, null, 2);
            context.response.writeHead(200, { "Content-type": "application/json" });
            context.response.write(responseJson);
            return context.response.end();
        },
        generateRandomToken: function (len, alphabet = "abcdefghijklmnopqrstuvwxyz0123456789") {
            trace("RestUtils.generateRandomToken");
            let output = "";
            for (let index = 0; index < len; index++) {
                output += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            return output;
        },
        generateOnErrorFunction: function (id) {
            trace("RestUtils.generateOnErrorFunction");
            return function (error, propagate = true) {
                trace(id);
                traceError(error);
                if (propagate) {
                    throw error;
                }
            };
        },
        generateContextByRequestResponseFactory: function (id) {
            trace("RestUtils.generateContextByRequestResponseFactory");
            return function (request, response) {
                trace(id);
                const parsedURL = RestUtils.require("url").parse(request.url, true);
                return {
                    output: {},
                    parameters: {},
                    state: {},
                    input: {
                        url: parsedURL.pathname,
                        query: RestUtils.fromURLToQuerystringObject(request.url),
                        body: request.body,
                        params: request.params,
                        request,
                        response
                    },
                    request,
                    response,
                };
            };
        },
        generateOnDispatchErrorFunction: function (traceId) {
            trace("RestUtils.generateOnDispatchErrorFunction");
            return function (error, request, response) {
                trace(traceId);
                traceError(error);
                response.writeHead(500, { "Content-Type": "application/json" });
                const data = {
                    name: error.name,
                    message: error.message,
                    stack: Object.assign({}, error.stack.split(/\n    /g))
                };
                const wrappedData = RestUtils.wrapResponse({
                    status: "error",
                    error: data
                });
                const wrappedJson = JSON.stringify(wrappedData, null, 2);
                response.write(wrappedJson);
                return response.end();
            };
        },
        noop: function () { },
        basicServiceFactory: function () {
            trace("RestUtils.basicServiceFactory");
            return function (modifications) {
                trace("RestUtils.basicServiceFactory:Service");
                Object.assign(this, modifications);
                return this;
            }
        },
        basicQueryFactory: function () {
            trace("RestUtils.basicQueryFactory");
            return function () {
                trace("RestUtils.basicQueryFactory:Query");
                return this;
            }
        },
        basicProcessFactory: function () {
            trace("RestUtils.basicProcessFactory");
            return function () {
                trace("RestUtils.basicProcessFactory:Process");
                return this;
            }
        },
        basicControllerFallback: function (request, response) {
            trace("RestUtils.basicControllerFallback");
            response.writeHead(404);
            response.write("Error 404: Page was not found.");
            return response.end();
        },
        sanitize: function (value) {
            trace("RestUtils.sanitize");
            return RestUtils.require("sqlstring").escape(value);
        },
        sanitizeId: function (id) {
            trace("RestUtils.sanitizeId");
            return RestUtils.require("sqlstring").escapeId(id);
        },
        availableOperators: {
            "<": "<",
            "<=": "<=",
            ">": ">",
            ">=": ">=",
            "=": "=",
            "!=": "!=",
            "in": "IN",
            "!in": "NOT IN",
            // "contains": "contains",
            // "!contains": "!contains",
        },
        validateStaticServiceInterface: function (staticInterface) {
            trace("RestUtils.validateStaticServiceInterface");
            if (typeof staticInterface !== "function") {
                throw new Error("Required parameter «staticInterface» to be an function in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.table !== "string") {
                throw new Error("Required parameter «staticInterface.table» to be a string in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.path !== "string") {
                throw new Error("Required parameter «staticInterface.path» to be a string in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.creationScript !== "string") {
                throw new Error("Required parameter «staticInterface.creationScript» to be a string in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.schema !== "object") {
                throw new Error("Required parameter «staticInterface.schema» to be an object in order to «validateStaticServiceInterface»")
            }
            return true;
        },
        validateDynamicServiceInterface: function (dynamicInterface) {
            trace("RestUtils.validateDynamicServiceInterface");
            return true;
        },
        validateStaticQueryInterface: function (staticInterface) {
            trace("RestUtils.validateStaticQueryInterface");
            if (typeof staticInterface.path !== "string") {
                throw new Error("Required parameter «staticInterface.path» to be a string in order to «validateStaticQueryInterface»")
            }
            if (typeof staticInterface.query !== "function") {
                throw new Error("Required parameter «staticInterface.query» to be a function in order to «validateStaticQueryInterface»")
            }
            return true;
        },
        validateDynamicQueryInterface: function (dynamicInterface) {
            trace("RestUtils.validateDynamicQueryInterface");
            return true;
        },
        validateStaticProcessInterface: function (staticInterface) {
            trace("RestUtils.validateStaticProcessInterface");
            if (typeof staticInterface.path !== "string") {
                throw new Error("Required parameter «staticInterface.path» to be a string in order to «validateStaticProcessInterface»")
            }
            if (typeof staticInterface.process !== "function") {
                throw new Error("Required parameter «staticInterface.process» to be a function in order to «validateStaticProcessInterface»")
            }
            return true;
        },
        validateDynamicProcessInterface: function (dynamicInterface) {
            trace("RestUtils.validateDynamicProcessInterface");
            return true;
        },
        expandConnection: function (connection) {
            trace("RestUtils.expandConnection");
            connection.proxifiedQuery = function (query) {
                trace("RestUtils.expandConnection:connection.proxifiedQuery");
                traceSQL(query);
                return this.query(query);
            }
            return connection;
        },
        formatTableFromRequest: function (context, { start, end }) {
            trace("RestUtils.formatTableFromRequest");
            return RestUtils.require("url").parse(context.request.url).pathname
                .replace(start, "")
                .split("")
                .reverse()
                .join("")
                .replace(end.split("").reverse().join(""), "")
                .split("")
                .reverse()
                .join("");
        },
        formatWhereFromRequest: function (context) {
            trace("RestUtils.formatWhereFromRequest");
            const where = context.input.query.where || "[]";
            if (typeof where === "object") {
                return where;
            }
            let whereData = undefined;
            try {
                whereData = JSON.parse(where);
            } catch (error) {
                throw new Error("Required parameter «where» to be a well-formed JSON object in order to «formatWhereFromRequest»");
            }
            if (!Array.isArray(whereData)) {
                throw new Error("Required parameter «where» to be a JSON array in order to «formatWhereFromRequest»");
            }
            if (whereData.length === 0) {
                return whereData;
            }
            for (let index = 0; index < whereData.length; index++) {
                const whereRule = whereData[index];
                if (!Array.isArray(whereRule)) {
                    throw new Error("Required parameter «where[" + index + "]» to be an array in order to «formatWhereFromRequest»");
                }
                if (whereRule.length < 3) {
                    throw new Error("Required parameter «where[" + index + "]» to be an array of 3 or more items in order to «formatWhereFromRequest»");
                }
                if (typeof whereRule[0] !== "string") {
                    throw new Error("Required parameter «where[" + index + "][0]» to be a string in order to «formatWhereFromRequest»");
                }
                if (typeof whereRule[1] !== "string") {
                    throw new Error("Required parameter «where[" + index + "][1]» to be a string in order to «formatWhereFromRequest»");
                }
                if (!(whereRule[1] in RestUtils.availableOperators)) {
                    throw new Error("Required parameter «where[" + index + "][1]» to be a valid query operator in order to «formatWhereFromRequest»");
                }
            }
            return whereData;
        },
        formatOrderFromRequest: function (context) {
            trace("RestUtils.formatOrderFromRequest");
            const order = context.input.query.order || "[]";
            let orderData = undefined;
            if (typeof order === "object") {
                orderData = order;
            } else if (typeof order !== "string") {
                throw new Error("Required parameter «context.input.query.order» to be an (optionally JSON) array in order to «formatOrderFromRequest»");
            } else {
                try {
                    orderData = JSON.parse(order);
                } catch (error) {
                    throw new Error("Required parameter «order» to be a well-formed JSON object in order to «formatOrderFromRequest»");
                }
            }
            if (!Array.isArray(orderData)) {
                throw new Error("Required parameter «order» to be a JSON array in order to «formatOrderFromRequest»");
            }
            if (orderData.length === 0) {
                orderData.push("id");
            }
            for (let index = 0; index < orderData.length; index++) {
                const orderRule = orderData[index];
                if (typeof orderRule !== "string") {
                    throw new Error("Required parameter «order[" + index + "]» to be a string in order to «formatOrderFromRequest»");
                }
            }
            return orderData;
        },
        formatGroupFromRequest: function (context) {
            trace("RestUtils.formatGroupFromRequest");
            const group = context.input.query.group || "[]";
            let groupData = undefined;
            if (typeof group === "object") {
                groupData = group;
            } else if (typeof group !== "string") {
                throw new Error("Required parameter «context.input.query.group» to be an (optionally JSON) array in order to «formatGroupFromRequest»");
            } else {
                try {
                    groupData = JSON.parse(group);
                } catch (error) {
                    throw new Error("Required parameter «group» to be a well-formed JSON object in group to «formatGroupFromRequest»");
                }
            }
            if (!Array.isArray(groupData)) {
                throw new Error("Required parameter «group» to be a JSON array in group to «formatGroupFromRequest»");
            }
            if (groupData.length === 0) {
                return groupData;
            }
            for (let index = 0; index < groupData.length; index++) {
                const groupRule = groupData[index];
                if (typeof groupRule !== "string") {
                    throw new Error("Required parameter «group[" + index + "]» to be a string in group to «formatGroupFromRequest»");
                }
            }
            return groupData;
        },
        formatPaginationFromRequest: function (context) {
            trace("RestUtils.formatPaginationFromRequest");
            const pagination = context.input.query.pagination || "[1,20]";
            let paginationData = undefined;
            if (typeof pagination === "object") {
                paginationData = pagination;
            } else if (typeof pagination !== "string") {
                throw new Error("Required parameter «context.input.query.pagination» to be an (optionally JSON) array in order to «formatPaginationFromRequest»");
            } else {
                try {
                    paginationData = JSON.parse(pagination);
                } catch (error) {
                    throw new Error("Required parameter «pagination» to be a well-formed JSON object in pagination to «formatPaginationFromRequest»");
                }
            }
            if (!Array.isArray(paginationData)) {
                throw new Error("Required parameter «pagination» to be a JSON array in pagination to «formatPaginationFromRequest»");
            }
            if (paginationData.length === 0) {
                return paginationData;
            }
            const [page = 1, items = 20] = paginationData;
            if (typeof page !== "number") {
                throw new Error("Required parameter «page» to be a number in order to «formatPaginationFromRequest»");
            }
            if (typeof items !== "number") {
                throw new Error("Required parameter «items» to be a number in order to «formatPaginationFromRequest»");
            }
            if (page < 0) {
                throw new Error("Required parameter «pagination[0]» to be a number higher or equal to 0 in order to «formatPaginationFromRequest»");
            }
            if (items < 1) {
                throw new Error("Required parameter «pagination[1]» to be a number higher or equal to 1 in order to «formatPaginationFromRequest»");
            }
            return paginationData;
        },
        formatItemFromRequest: function (context) {
            trace("RestUtils.formatItemFromRequest");
            const item = context.input.query.item || "{}";
            let itemData = undefined;
            if (typeof item === "object") {
                itemData = item;
            } else if (typeof item !== "string") {
                throw new Error("Required parameter «context.input.query.item» to be an (optionally JSON) object in order to «formatItemFromRequest»");
            } else {
                try {
                    itemData = JSON.parse(item);
                } catch (error) {
                    throw new Error("Required parameter «item» to be a well-formed JSON object to «formatItemFromRequest»");
                }
            }
            if (typeof itemData !== "object") {
                throw new Error("Required parameter «item» to be a JSON object to «formatItemFromRequest»");
            }
            return itemData;
        },
        formatItemsFromRequest: function (context) {
            trace("RestUtils.formatItemsFromRequest");
            const items = context.input.query.items || "{}";
            let itemsData = undefined;
            if (typeof items === "object") {
                itemsData = items;
            } else if (typeof items !== "string") {
                throw new Error("Required parameter «context.input.query.items» to be an (optionally JSON) object in order to «formatItemsFromRequest»");
            } else {
                try {
                    itemsData = JSON.parse(items);
                } catch (error) {
                    throw new Error("Required parameter «item» to be a well-formed JSON object to «formatItemsFromRequest»");
                }
            }
            if (!Array.isArray(itemsData)) {
                throw new Error("Required parameter «items» to be an (optionally JSON) array in order to «formatItemsFromRequest»");
            }
            for (let index = 0; index < itemsData.length; index++) {
                const itemData = itemsData[index];
                if (typeof itemData !== "object") {
                    throw new Error("Required parameter «items[" + index + "]» to be a JSON object to «formatItemsFromRequest»");
                }
            }
            return itemsData;
        },
        formatValuesFromRequest: function (context) {
            trace("RestUtils.formatValuesFromRequest");
            const values = context.input.query.values || "{}";
            let valuesData = undefined;
            if (typeof values === "object") {
                valuesData = values;
            } else if (typeof values !== "string") {
                throw new Error("Required parameter «context.input.query.values» to be an (optionally JSON) object in order to «formatValuesFromRequest»");
            } else {
                try {
                    valuesData = JSON.parse(values);
                } catch (error) {
                    throw new Error("Required parameter «values» to be a well-formed JSON object to «formatValuesFromRequest»");
                }
            }
            if (Array.isArray(valuesData)) {
                throw new Error("Required parameter «values» to be an object and not an array in order to «formatValuesFromRequest»");
            } else if (typeof valuesData !== "object") {
                throw new Error("Required parameter «values» to be an object in order to «formatValuesFromRequest»");
            }
            return valuesData;
        },
        fromWhereToSQL: function (where, wholeClause = false) {
            trace("RestUtils.fromWhereToSQL");
            if (!Array.isArray(where)) {
                throw new Error("Required parameter «where» to be an array in order to «fromWhereToSQL»");
            }
            if (where.length === 0) {
                return "# No filtering rules";
            }
            let query = where.map((whereRule, index) => {
                const sanitizedSubject = RestUtils.sanitizeId(whereRule[0]);
                const sanitizedOperation = RestUtils.availableOperators[whereRule[1]];
                const unsanitizedObject = whereRule[2];
                const thirdArgumentMode = whereRule[3] || "default";
                let sanitizedObject = whereRule[2];
                if (thirdArgumentMode === "default") {
                    if ((typeof unsanitizedObject !== "string") && (typeof unsanitizedObject !== "number")) {
                        throw new Error("Required argument «where[" + index + "][2]» to be a string or a number (on «default» mode) in order to «RestUtils.fromWhereToSQL»");
                    }
                    sanitizedObject = RestUtils.sanitize(unsanitizedObject);
                } else if (thirdArgumentMode === "column") {
                    throw new Error("Required argument «where[" + index + "][3]» to be a valid mode and 'column' mode is not allowed in order to «RestUtils.fromWhereToSQL»");
                    sanitizedObject = RestUtils.sanitizeId(unsanitizedObject);
                } else if (thirdArgumentMode === "null") {
                    sanitizedObject = "NULL";
                } else if (thirdArgumentMode === "array") {
                    let parsedObject = undefined;
                    if (typeof unsanitizedObject === "string") {
                        try {
                            parsedObject = JSON.parse(unsanitizedObject);
                        } catch (error) {
                            throw new Error("Required argument «where[" + index + "][3]» to be a well-formed JSON in order to «RestUtils.fromWhereToSQL»");
                        }
                    } else if (Array.isArray(unsanitizedObject)) {
                        parsedObject = unsanitizedObject;
                    } else {
                        throw new Error("Required argument «where[" + index + "][2]» to be an (optionally JSON) array in order to «RestUtils.fromWhereToSQL»");
                    }
                    if (!Array.isArray(parsedObject)) {
                        throw new Error("Required argument «where[" + index + "][2]» to be a JSON array in order to «RestUtils.fromWhereToSQL»");
                    } else if (parsedObject.length === 0) {
                        throw new Error("Required argument «where[" + index + "][2]» to be a JSON array with 1 or more items in order to «RestUtils.fromWhereToSQL»");
                    }
                    sanitizedObject = "(" + parsedObject.map(item => RestUtils.sanitize(item)) + ")";
                } else {
                    throw new Error("Required argument «where[" + index + "][3]» to be a a known mode in order to «RestUtils.fromWhereToSQL»");
                }
                return `    AND ${sanitizedSubject} ${sanitizedOperation} ${sanitizedObject}`;
            }).join("\n");
            if (wholeClause) {
                query = query.replace('    AND ', '  WHERE ');
            }
            return query;
        },
        fromOrderToSQL: function (order, wholeClause = true) {
            trace("RestUtils.fromOrderToSQL");
            if (!Array.isArray(order)) {
                throw new Error("Required parameter «order» to be an array in order to «fromOrderToSQL»");
            }
            if (order.length === 0) {
                return "# No ordering rules";
            }
            let query = order.map((orderRule, index) => {
                if (typeof orderRule !== "string") {
                    throw new Error("Required parameter «order[" + index + "]» to be a string in order «fromOrderToSQL»");
                }
                const isDescending = orderRule.startsWith("!");
                const orderColumn = isDescending ? orderRule.substr(1) : orderRule;
                return ", " + RestUtils.sanitizeId(orderColumn) + (isDescending ? ' DESC' : ' ASC');
            }).join(", ");
            if (wholeClause) {
                query = query.replace(', ', '  ORDER BY ');
            }
            return query;
        },
        fromGroupToSQL: function (groups, wholeClause = true) {
            trace("RestUtils.fromGroupToSQL");
            if (!Array.isArray(groups)) {
                throw new Error("Required parameter «groups» to be an array in order to «fromGroupToSQL»");
            }
            if (groups.length === 0) {
                return "# No grouping rules";
            }
            let query = groups.map((groupsRule, index) => {
                if (typeof groupsRule !== "string") {
                    throw new Error("Required parameter «groups[" + index + "]» to be a string in order «fromGroupToSQL»");
                }
                const isDescending = groupsRule.startsWith("!");
                const groupsColumn = isDescending ? groupsRule.substr(1) : groupsRule;
                return ", " + RestUtils.sanitizeId(groupsColumn) + (isDescending ? ' DESC' : ' ASC');
            }).join(", ");
            if (wholeClause) {
                query = query.replace(', ', '  GROUP BY ');
            }
            return query;
        },
        fromPaginationToSQL: function (pagination = []) {
            trace("RestUtils.fromPaginationToSQL");
            if (!Array.isArray(pagination)) {
                throw new Error("Required parameter «pagination» to be an array in order to «fromPaginationToSQL»");
            }
            const [page = 1, items = 20] = pagination;
            if (typeof page !== "number") {
                throw new Error("Required parameter «pagination[0]» to be an array in order to «fromPaginationToSQL»");
            }
            if (typeof items !== "number") {
                throw new Error("Required parameter «pagination[1]» to be an array in order to «fromPaginationToSQL»");
            }
            if (page < 0) {
                throw new Error("Required parameter «pagination[0]» to be a number higher or equal to 0 in order to «fromPaginationToSQL»");
            }
            if (items < 1) {
                throw new Error("Required parameter «pagination[1]» to be a number higher or equal to 1 in order to «fromPaginationToSQL»");
            }
            if (page === 0) {
                return "# No pagination rules";
            }
            const limit = items;
            const offset = (page - 1) * items;
            const query = [
                `  LIMIT ${limit}`,
                `  OFFSET ${offset}`,
            ].join("\n");
            return query;
        },
        fromItemToKeysSQL: function (item, wholeToken = true) {
            trace("RestUtils.fromItemToKeysSQL");
            if (typeof item !== "object") {
                throw new Error("Required argument «item» to be an object in order to «fromItemToKeysSQL»");
            }
            const keys = Object.keys(item);
            const query = keys.map(key => RestUtils.sanitizeId(key)).join(", ");
            if (wholeToken) {
                return "(" + query + ")";
            }
            return query;
        },
        fromItemsToKeysSQL: function (items, wholeExpression = true) {
            trace("RestUtils.fromItemsToKeysSQL");
            if (typeof items !== "object") {
                throw new Error("Required argument «items» to be an object in order to «fromItemsToKeysSQL»");
            }
            if (!Array.isArray(items)) {
                throw new Error("Required argument «items» to be an array in order to «fromItemsToKeysSQL»");
            }
            if (items.length === 0) {
                throw new Error("Required argument «items» to have one or more items in order to «fromItemsToKeysSQL»");
            }
            return this.fromItemToKeysSQL(items[0], wholeExpression);
        },
        fromItemToValuesSQL: function (item, wholeToken = true) {
            trace("RestUtils.fromItemToValuesSQL");
            if (typeof item !== "object") {
                throw new Error("Required argument «item» to be an object in order to «fromItemToValuesSQL»");
            }
            const keys = Object.keys(item);
            const query = keys.map(key => RestUtils.sanitize(item[key])).join(", ");
            if (wholeToken) {
                return "(" + query + ")";
            }
            return query;
        },
        fromItemToSettablesSQL: function (item, wholeToken = false) {
            trace("RestUtils.fromItemToSettablesSQL");
            if (typeof item !== "object") {
                throw new Error("Required argument «item» to be an object in order to «fromItemToSettablesSQL»");
            }
            const keys = Object.keys(item);
            const query = keys.map(key => "\n    " + RestUtils.sanitizeId(key) + " = " + RestUtils.sanitize(item[key])).join(",");
            if (wholeToken) {
                return "(" + query + ")";
            }
            return query;
        },
        fromItemsToValuesSQL: function (items, wholeExpression = true) {
            trace("RestUtils.fromItemsToValuesSQL");
            const query = items.map((item, index) => {
                if (typeof item !== "object") {
                    throw new Error("Required argument «items[" + index + "]» to be an object in order to «fromItemsToValuesSQL»");
                }
                const itemQuery = "(" + Object.keys(item).map((key, index) => {
                    return "\n    " + RestUtils.sanitize(item[key]);
                }).join(", ") + "\n  )";
                return itemQuery;
            }).join(", ");
            return query;
        },
        fromWhereToFilterFunction(whereRules) {
            const allFilters = [];
            for (let indexRules = 0; indexRules < whereRules.length; indexRules++) {
                const whereRule = whereRules[indexRules];
                const [subject, operator, target, targetType = "value"] = whereRule;
                const t1 = subject;
                const t2 = RestUtils.availableOperators[operator];
                const t3 = targetType === "value" ? target : targetType === "array" ? JSON.parse(target) : target;
                const partialFilter = item => {
                    // trace("RestUtils.fromWhereToFilterFunction:partialFilter");
                    if (!(t1 in item)) return false;
                    const s1 = item[t1];
                    const s2 = t2;
                    const s3 = t3;
                    switch (s2) {
                        case "<":
                            return s1 < s3;
                        case "<=":
                            return s1 <= s3;
                        case ">":
                            return s1 > s3;
                        case ">=":
                            return s1 >= s3;
                        case "!=":
                            return s1 !== s3;
                        case "=":
                            return s1 === s3;
                        case "!in":
                            return s3.indexOf(s1) === -1;
                        case "in":
                            return s3.indexOf(s1) !== -1;
                    }
                    return false;
                };
                allFilters.push((() => partialFilter)());
            };
            const finalFilter = function (item) {
                // trace("RestUtils.fromWhereToFilterFunction:finalFilter");
                for (let indexFilters = 0; indexFilters < allFilters.length; indexFilters++) {
                    const oneFilter = allFilters[indexFilters];
                    const result = oneFilter(item);
                    if (!result) {
                        return false;
                    }
                }
                return true;
            };
            return finalFilter;
        },
        fromURLToQuerystringObject(url) {
            const output = {};
            const searchParams = new URLSearchParams(this.require("url").parse(url).search);
            searchParams.forEach((value, key) => {
                output[key] = value;
            });
            return output;
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 1. RestInterface class:
    const RestInterface = function () { };
    RestInterface.prototype.initialize = function () { throw new Error("Required method «initialize» to be overriden") };
    RestInterface.prototype.selectMany = function (dataType, { where, order, groups, page, items }, authentication) { throw new Error("Required method «selectMany» to be overriden") };
    RestInterface.prototype.selectOne = function (dataType, { where, order }, authentication) { throw new Error("Required method «selectOne» to be overriden") };
    RestInterface.prototype.insertMany = function (dataType, { values }, authentication) { throw new Error("Required method «insertMany» to be overriden") };
    RestInterface.prototype.insertOne = function (dataType, { value }, authentication) { throw new Error("Required method «insertOne» to be overriden") };
    RestInterface.prototype.updateMany = function (dataType, { where, value }, authentication) { throw new Error("Required method «updateMany» to be overriden") };
    RestInterface.prototype.updateOne = function (dataType, { where, value }, authentication) { throw new Error("Required method «updateOne» to be overriden") };
    RestInterface.prototype.deleteMany = function (dataType, { where }, authentication) { throw new Error("Required method «deleteMany» to be overriden") };
    RestInterface.prototype.deleteOne = function (dataType, { where }, authentication) { throw new Error("Required method «deleteOne» to be overriden") };
    RestInterface.prototype.getFile = function (dataType, { id, column }, authentication) { throw new Error("Required method «getFile» to be overriden") };
    RestInterface.prototype.setFile = function (dataType, { id, column, file }, authentication) { throw new Error("Required method «setFile» to be overriden") };
    RestInterface.prototype.resetDatabase = function (authentication) { throw new Error("Required method «resetDatabase» to be overriden") };

    ////////////////////////////////////////////////////////////////////////
    // 2. AuthInterface class:
    const AuthInterface = function () { };
    AuthInterface.prototype.initialize = function () { throw new Error("Required method «initialize» to be overriden") };
    AuthInterface.prototype.authenticate = function (token) { throw new Error("Required method «authenticate» to be overriden") };
    AuthInterface.prototype.login = function ({ user, password }) { throw new Error("Required method «login» to be overriden") };
    AuthInterface.prototype.logout = function (token) { throw new Error("Required method «logout» to be overriden") };
    AuthInterface.prototype.refresh = function (token) { throw new Error("Required method «refresh» to be overriden") };
    AuthInterface.prototype.register = function ({ user, password, email }) { throw new Error("Required method «register» to be overriden") };
    AuthInterface.prototype.confirm = function (confirmationToken) { throw new Error("Required method «confirm» to be overriden") };
    AuthInterface.prototype.forgot = function () { throw new Error("Required method «forgot» to be overriden") };
    AuthInterface.prototype.recover = function (recoverToken) { throw new Error("Required method «recover» to be overriden") };
    AuthInterface.prototype.unregister = function () { throw new Error("Required method «unregister» to be overriden") };
    AuthInterface.prototype.hasAuthorizationFor = function () { throw new Error("Required method «isAuthorizedFor» to be overriden") };
    AuthInterface.prototype.resetAuth = function () { throw new Error("Required method «resetAuth» to be overriden") };

    ////////////////////////////////////////////////////////////////////////
    // 4. DataServer class:
    const DataServer = function (dynamicInterface = {}) {
        trace("DataServer.constructor");
        Object.assign(this, dynamicInterface);
        this.client = configurations.platform === "node" ? require("axios").create() : {};
        this.rest = undefined;
        this.auth = undefined;
        this.services = [];
        this.queries = [];
        this.processes = [];
        this.hooks = Hooks.create();
        this.basePathForData = "/rest/api/v1";
        this.basePathForAuth = "/auth/api/v1";
        this.basePathForQuery = "/query/api/v1";
        this.basePathForProcess = "/process/api/v1";

        return this;
    };
    DataServer.create = function (...args) {
        trace("DataServer.create");
        return new this(...args);
    };
    DataServer.initialize = function (...args) {
        trace("DataServer.initialize");
        return (new this(...args)).initialize();
    };
    DataServer.prototype.addService = function (...args) {
        trace("DataServer.prototype.addService");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicServiceFactory()
        const service = constructorFunction;
        Object.assign(service, { ...DataService }, { ...staticInterface });
        Object.assign(service.prototype, { ...DataService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticServiceInterface(service);
        RestUtils.validateDynamicServiceInterface(service.prototype);
        this.services.push(service);
        return this;
    };
    DataServer.prototype.addQuery = function (...args) {
        trace("DataServer.prototype.addQuery");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicQueryFactory()
        const queryClass = constructorFunction;
        Object.assign(queryClass, { ...QueryService }, { ...staticInterface });
        Object.assign(queryClass.prototype, { ...QueryService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticQueryInterface(queryClass);
        RestUtils.validateDynamicQueryInterface(queryClass.prototype);
        this.queries.push(queryClass);
        return this;
    };
    DataServer.prototype.addProcess = function (...args) {
        trace("DataServer.prototype.addProcess");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicProcessFactory()
        const processClass = constructorFunction;
        Object.assign(processClass, { ...ProcessService }, { ...staticInterface });
        Object.assign(processClass.prototype, { ...ProcessService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticProcessInterface(processClass);
        RestUtils.validateDynamicProcessInterface(processClass.prototype);
        this.processes.push(processClass);
        return this;
    };
    const RequestPolyfill = function (method, url, others = {}) {
        trace("RequestPolyfill.constructor");
        this.method = method;
        this.url = url;
        Object.assign(this, others);
        return this;
    }
    const ResponsePolyfill = function () {
        trace("ResponsePolyfill.constructor");
        this.output = { status: 200, headers: {}, data: "", json: true };
        this.response_promise = new Promise((ok, fail) => {
            this.solve_response = ok;
            this.fail_response = fail;
        }).then(finalResponse => {
            if (finalResponse.status < 300 && finalResponse.status >= 200) {
                return finalResponse;
            }
            throw finalResponse;
        });
        this.writeHead = (statusCode, headers = {}) => {
            trace("ResponsePolyfill.prototype.writeHead");
            this.output.status = statusCode;
            Object.assign(this.output.headers, headers);
            return this;
        };
        this.write = (contents) => {
            trace("ResponsePolyfill.prototype.write");
            this.output.data += contents;
            return this;
        };
        this.end = (contents = "") => {
            trace("ResponsePolyfill.prototype.end");
            this.output.data += contents;
            if (this.output.json === true) {
                try {
                    this.output.data = JSON.parse(this.output.data);
                } catch (error) {

                }
            }
            if (this.output.status < 300 && this.output.status >= 200) {
                this.output.statusText = "OK";
            } else {
                this.output.statusText = "Erroneous";
                this.output.name = this.output.data.error.name;
                this.output.message = this.output.data.error.message;
                this.output.stack = this.output.data.error.stack;
            }
            this.output.response = Object.assign({}, this.output);
            return this.solve_response(this.output);
        };
        return this;
    }
    DataServer.prototype.dispatch = function (request, response, fallback = RestUtils.basicControllerFallback) {
        trace("DataServer.prototype.dispatch");
        try {
            const path = RestUtils.require("path");
            const url = RestUtils.require("url");
            const parsedUrl = url.parse(request.url);
            if (parsedUrl.pathname.startsWith(this.basePathForData)) {
                for (let index = 0; index < this.services.length; index++) {
                    const service = this.services[index];
                    const serviceUrl = path.join(this.basePathForData, service.path) + "/";
                    if (parsedUrl.pathname.startsWith(serviceUrl)) {
                        trace("Dispatching by data service on: " + parsedUrl.pathname);
                        const serviceInstance = service.create({
                            server: this
                        });
                        return serviceInstance.dispatch(request, response);
                    }
                }
            } else if (parsedUrl.pathname.startsWith(this.basePathForAuth)) {
                trace("Dispatching by auth service on: " + parsedUrl.pathname);
                return this.auth.dispatch(request, response, fallback);
            } else if (parsedUrl.pathname.startsWith(this.basePathForQuery)) {
                trace("Dispatching by query service on: " + parsedUrl.pathname);
                const queryId = "/" + parsedUrl.pathname.replace(this.basePathForQuery, "").split("/").filter(it => it !== "").join("/");
                const matchedServices = this.queries.filter(x => x.path === queryId);
                if (matchedServices.length === 0) {
                    throw new Error("Required parameter «queryId» to be a known query in order to «DataServer.prototype.dispatch» (passed: «" + queryId + "») (available: «" + this.queries.map(x => x.path).join("» «") + "»)");
                }
                const [queryServiceClass] = matchedServices;
                const queryService = queryServiceClass.create({ server: this });
                return queryService.dispatch(request, response, fallback);
            } else if (parsedUrl.pathname.startsWith(this.basePathForProcess)) {
                trace("Dispatching by process service on: " + parsedUrl.pathname);
                const processId = "/" + parsedUrl.pathname.replace(this.basePathForProcess, "").split("/").filter(it => it !== "").join("/");
                const matchedServices = this.processes.filter(x => x.path === processId);
                if (matchedServices.length === 0) {
                    throw new Error("Required parameter «processId» to be a known process in order to «DataServer.prototype.dispatch» (passed: «" + processId + "») (available: «" + this.processes.map(x => x.path).join("» «") + "»)");
                }
                const [processServiceClass] = matchedServices;
                const processService = processServiceClass.create({ server: this });
                return processService.dispatch(request, response, fallback);
            }
            trace("Dispatching by fallback on: " + serviceUrl);
            return fallback(request, response);
        } catch (error) {
            return this.onDispatchError(error, request, response);
        }
    };
    DataServer.prototype.createDispatcher = function (fallback = RestUtils.basicControllerFallback) {
        trace("DataServer.prototype.createDispatcher");
        return (request, response) => this.dispatch(request, response, fallback);
    };
    DataServer.prototype.createHttpServerController = function () {
        trace("DataServer.prototype.createHttpServerController");
        const dispatcher = this.createDispatcher();
        return (request, response) => dispatcher(request, response);
    };
    DataServer.prototype.createHttpServer = function (fallback = RestUtils.basicControllerFallback) {
        trace("DataServer.prototype.createHttpServer");
        this.httpServer = RestUtils.require("http").createServer(this.createHttpServerController());
        return this.httpServer;
    };
    DataServer.prototype.listen = function (options) {
        trace("DataServer.prototype.listen");
        return new Promise((ok, fail) => {
            const httpServer = this.httpServer || this.createHttpServer();
            try {
                httpServer.listen(options, () => {
                    return ok(httpServer);
                });
            } catch (error) {
                return fail(error);
            }
        });
    };
    DataServer.prototype.stopDatabaseConnection = function () {
        trace("DataServer.prototype.stopDatabaseConnection");
        return this.rest.connection.end();
    };
    DataServer.prototype.stopHttpServer = function () {
        trace("DataServer.prototype.stopHttpServer");
        return this.httpServer.close();
    };
    DataServer.prototype.resetDatabase = function () {
        trace("DataServer.prototype.resetDatabase");
        return this.rest.resetDatabase();
    };
    DataServer.prototype.resetAuth = function () {
        trace("DataServer.prototype.resetAuth");
        return this.auth.resetAuth();
    };
    DataServer.prototype.dispatchSelf = function (method = "get", url = "/", requestArgs = {}, responseArgs = {}) {
        throw new Error("Required method «dispatchSelf» to be overriden");
    };
    DataServer.prototype.createClient = function (baseUrl = undefined) {
        trace("DataServer.prototype.createClient");
        if (typeof baseUrl !== "string") {
            throw new Error("Required argument «baseUrl» to be a string in order to «createClient»");
        }
        return new RestClient(baseUrl, { server: this });
    };
    DataServer.prototype.initialize = async function () {
        try {
            trace("DataServer.prototype.initialize");
            await this.initializeRest();
            await this.initializeAuth();
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    DataServer.prototype.initializeRest = async function () {
        try {
            trace("DataServer.prototype.initializeRest");
            let restAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "mysql";
            }
            // @TOCONTINUE: continue adding other REST adapters on the following conditional:
            if (this.adapter === "mysql") {
                if (typeof this.credentials !== "object") {
                    throw new Error("Required parameter «this.credentials» to be an object in order to «initalizeRest» (on 'mysql' REST adapter)");
                }
                restAdapter = new RestByMySQL({
                    credentials: this.credentials,
                }, {
                    ...this.restExtension,
                    server: this,
                });
            } else {
                throw new Error("Required configuration «this.adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.rest = await restAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    DataServer.prototype.initializeAuth = async function () {
        try {
            trace("DataServer.prototype.initializeAuth");
            let authAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "mysql";
            }
            // @TOCONTINUE: continue adding other AUTH adapters on the following conditional:
            if (this.adapter === "mysql") {
                if (typeof this.credentials !== "object") {
                    throw new Error("Required parameter «this.credentials» to be an object in order to «initializeAuth» (on 'mysql' REST adapter)");
                }
                authAdapter = new AuthByMySQL({
                    credentials: this.credentials,
                }, {
                    ...this.authExtension,
                    server: this,
                });
            } else {
                throw new Error("Required parameter «adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.auth = await authAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 5. DataService class:
    const DataService = function (dynamicInterface = {}) {
        trace("DataService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    DataService.create = function (...args) {
        trace("DataService.create");
        return new this(...args);
    };
    DataService.initialize = function (...args) {
        trace("DataService.initialize");
        return (new this(...args)).initialize();
    };
    DataService.path = "/customize/path/here";
    DataService.prototype.initialize = async function () {
        try {
            trace("DataService.prototype.initialize");
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    DataService.prototype.generateContext = RestUtils.generateContextByRequestResponseFactory("DataService.prototype.generateContext");
    DataService.prototype.dispatch = function (request, response) {
        trace("DataService.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        if (parsedUrl.pathname.startsWith(this.server.basePathForData)) {
            const actionPath = parsedUrl.pathname.replace(this.server.basePathForData, "").replace(this.constructor.path, "");
            if (false) {
                return false;
            } else if (actionPath === "/define") {
                return this.dispatchDefine(request, response);
            } else if (actionPath === "/select/one") {
                return this.dispatchSelectOne(request, response);
            } else if (actionPath === "/select/many") {
                return this.dispatchSelectMany(request, response);
            } else if (actionPath === "/insert/one") {
                return this.dispatchInsertOne(request, response);
            } else if (actionPath === "/insert/many") {
                return this.dispatchInsertMany(request, response);
            } else if (actionPath === "/update/one") {
                return this.dispatchUpdateOne(request, response);
            } else if (actionPath === "/update/many") {
                return this.dispatchUpdateMany(request, response);
            } else if (actionPath === "/delete/one") {
                return this.dispatchDeleteOne(request, response);
            } else if (actionPath === "/delete/many") {
                return this.dispatchDeleteMany(request, response);
            } else if (actionPath === "/get/file") {
                return this.dispatchGetFile(request, response);
            } else if (actionPath === "/set/file") {
                return this.dispatchSetFile(request, response);
            } else {
                return this.onDispatchError(new Error("Required action path to be valid in order to «dispatch» (passed: «" + actionPath + "»)"), request, response);
            }
        } else {
            return this.onDispatchError(new Error("Required url path to be valid in order to «dispatch» (passed: «" + parsedUrl.pathname + "»)"), request, response);
        }
    };
    DataService.prototype.dispatchDefine = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchDefine");
            const context = this.generateContext(request, response);
            await this.onDefine(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchSelectOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchSelectOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForSelectOne(context);
            await this.onQueryForSelectOne(context);
            await this.onFormatOutputForSelectOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchSelectMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchSelectMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForSelectMany(context);
            await this.onQueryForSelectMany(context);
            await this.onFormatOutputForSelectMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchInsertOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchInsertOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForInsertOne(context);
            await this.onQueryForInsertOne(context);
            await this.onFormatOutputForInsertOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchInsertMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchInsertMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForInsertMany(context);
            await this.onQueryForInsertMany(context);
            await this.onFormatOutputForInsertMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchUpdateOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchUpdateOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForUpdateOne(context);
            await this.onQueryForUpdateOne(context);
            await this.onFormatOutputForUpdateOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchUpdateMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchUpdateMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForUpdateMany(context);
            await this.onQueryForUpdateMany(context);
            await this.onFormatOutputForUpdateMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchDeleteOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchDeleteOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForDeleteOne(context);
            await this.onQueryForDeleteOne(context);
            await this.onFormatOutputForDeleteOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchDeleteMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchDeleteMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForDeleteMany(context);
            await this.onQueryForDeleteMany(context);
            await this.onFormatOutputForDeleteMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchGetFile = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchGetFile");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForGetFile(context);
            await this.onQueryForGetFile(context);
            await this.onServeFile(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchSetFile = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchSetFile");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForSetFile(context);
            await this.onQueryForSetFile(context);
            await this.onPersistFile(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };

    //////////////////////////////////////////////////////
    // (01) Service for SELECT ONE:
    DataService.prototype.onFormatParametersForSelectOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForSelectOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
        return true;
    };
    DataService.prototype.onQueryForSelectOne = function (context) {
        trace("DataService.prototype.onQueryForSelectOne");
        return this.server.rest.selectOne(context.parameters.table, {
            where: context.parameters.where
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForSelectOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForSelectOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/select/one",
                model: this.constructor.table,
                action: "/select/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (02) Service for SELECT MANY:
    DataService.prototype.onFormatParametersForSelectMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForSelectMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        context.parameters.order = RestUtils.formatOrderFromRequest(context);
        context.parameters.group = RestUtils.formatGroupFromRequest(context);
        context.parameters.pagination = RestUtils.formatPaginationFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForSelectMany = function (context) {
        trace("DataService.prototype.onQueryForSelectMany");
        return this.server.rest.selectMany(context.parameters.table, {
            where: context.parameters.where,
            order: context.parameters.order,
            group: context.parameters.group,
            pagination: context.parameters.pagination,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForSelectMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForSelectMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/select/many",
                model: this.constructor.table,
                action: "/select/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (03) Service for INSERT ONE:
    DataService.prototype.onFormatParametersForInsertOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForInsertOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.item = RestUtils.formatItemFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForInsertOne = function (context) {
        trace("DataService.prototype.onQueryForInsertOne");
        return this.server.rest.insertOne(context.parameters.table, {
            item: context.parameters.item,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForInsertOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForInsertOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/insert/one",
                model: this.constructor.table,
                action: "/insert/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (04) Service for INSERT MANY:
    DataService.prototype.onFormatParametersForInsertMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForInsertMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        console.log(context);
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.items = RestUtils.formatItemsFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForInsertMany = function (context) {
        trace("DataService.prototype.onQueryForInsertMany");
        return this.server.rest.insertMany(context.parameters.table, {
            items: context.parameters.items,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForInsertMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForInsertMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/insert/many",
                model: this.constructor.table,
                action: "/insert/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (05) Service for UPDATE ONE:
    DataService.prototype.onFormatParametersForUpdateOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForUpdateOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        context.parameters.values = RestUtils.formatValuesFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForUpdateOne = function (context) {
        trace("DataService.prototype.onQueryForUpdateOne");
        return this.server.rest.updateOne(context.parameters.table, {
            where: context.parameters.where,
            values: context.parameters.values,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForUpdateOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForUpdateOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/update/one",
                model: this.constructor.table,
                action: "/update/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (06) Service for UPDATE MANY:
    DataService.prototype.onFormatParametersForUpdateMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForUpdateMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        context.parameters.values = RestUtils.formatValuesFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForUpdateMany = function (context) {
        trace("DataService.prototype.onQueryForUpdateMany");
        return this.server.rest.updateMany(context.parameters.table, {
            where: context.parameters.where,
            values: context.parameters.values,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForUpdateMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForUpdateMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/update/many",
                model: this.constructor.table,
                action: "/update/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (07) Service for DELETE ONE:
    DataService.prototype.onFormatParametersForDeleteOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForDeleteOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForDeleteOne = function (context) {
        trace("DataService.prototype.onQueryForDeleteOne");
        return this.server.rest.deleteOne(context.parameters.table, {
            where: context.parameters.where,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForDeleteOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForDeleteOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/delete/one",
                model: this.constructor.table,
                action: "/delete/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (08) Service for DELETE MANY:
    DataService.prototype.onFormatParametersForDeleteMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForDeleteMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForDeleteMany = function (context) {
        trace("DataService.prototype.onQueryForDeleteMany");
        return this.server.rest.deleteMany(context.parameters.table, {
            where: context.parameters.where,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForDeleteMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForDeleteMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/delete/many",
                model: this.constructor.table,
                action: "/delete/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g, "") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (09) Service for GET FILE:
    DataService.prototype.onFormatParametersForGetFile = function (context) {
        trace("DataService.prototype.onFormatParametersForGetFile");
    };
    DataService.prototype.onQueryForGetFile = function (context) {
        trace("DataService.prototype.onQueryForGetFile");
    };
    DataService.prototype.onServeFile = function (context) {
        trace("DataService.prototype.onServeFile");
        throw new Error("Required «DataService.prototype.onServeFile» to be overriden");
    };

    //////////////////////////////////////////////////////
    // (10) Service for SET FILE:
    DataService.prototype.onFormatParametersForSetFile = function (context) {
        trace("DataService.prototype.onFormatParametersForSetFile");
    };
    DataService.prototype.onQueryForSetFile = function (context) {
        trace("DataService.prototype.onQueryForSetFile");
    };
    DataService.prototype.onPersistFile = function (context) {
        trace("DataService.prototype.onPersistFile");
        throw new Error("Required «DataService.prototype.onPersistFile» to be overriden");
    };
    DataService.prototype.onRespond = function (context) {
        trace("DataService.prototype.onRespond");
        return RestUtils.respondContext(context);
    };
    DataService.prototype.onDefine = function (context) {
        trace("DataService.prototype.onDefine");
        const publicFieldIds = this.constructor.publicFields || ["id", "path", "table", "class", "schema"];
        const data = {};
        for (let index = 0; index < publicFieldIds.length; index++) {
            const publicFieldId = publicFieldIds[index];
            data[publicFieldId] = this.constructor[publicFieldId];
        }
        context.output = {
            data,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/define",
                model: this.constructor.table,
                action: "/define",
            }
        };
    };
    DataService.prototype.setServer = function (server) {
        trace("DataService.prototype.setServer");
        this.server = server;
        return this;
    };


    const QueryService = function (dynamicInterface = {}) {
        trace("QueryService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    QueryService.create = function (...args) {
        return new this(...args);
    };
    QueryService.prototype = { ...DataService.prototype };
    QueryService.prototype.getParametersByURL = function (url) {
        trace("QueryService.prototype.getParametersByURL");
        const parsedUrl = RestUtils.require("url").parse(url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForQuery, this.constructor.path);
        const extraPath = parsedUrl.pathname.replace(urlStarter, "");
        return extraPath;
    };
    QueryService.prototype.serve = function (status, headers, body, response) {
        trace("QueryService.prototype.serve");
        const responseHeaders = Object.assign({ "Content-type": "application/json" }, headers);
        response.writeHead(status, responseHeaders);
        response.write(typeof body === "string" ? body : JSON.stringify(body));
        return response.end();
    };
    QueryService.prototype.onDispatchQuery = function (request, response, fallback) {
        trace("QueryService.prototype.onDispatchQuery");
        return this.constructor.query.call(this, request, response, fallback);
    };
    QueryService.prototype.dispatch = function (request, response, fallback = RestUtils.noop) {
        trace("QueryService.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForQuery, this.constructor.path);
        if (parsedUrl.pathname.startsWith(urlStarter)) {
            return this.onDispatchQuery(request, response, fallback);
        } else {
            return this.onDispatchError(new Error("Required url path to be valid in order to «QueryService.prototype.dispatch» (passed: «" + parsedUrl.pathname + "») (valid: «" + urlStarter + "»)"), request, response);
        }
    };
    const ProcessService = function (dynamicInterface = {}) {
        trace("ProcessService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    ProcessService.create = function (...args) {
        return new this(...args);
    };
    ProcessService.prototype = { ...DataService.prototype };
    ProcessService.prototype.getParametersByURL = function (url) {
        trace("ProcessService.prototype.getParametersByURL");
        const parsedUrl = RestUtils.require("url").parse(url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForQuery, this.constructor.path);
        const extraPath = parsedUrl.pathname.replace(urlStarter, "");
        return extraPath;
    };
    ProcessService.prototype.serve = function (status, headers, body, response) {
        trace("ProcessService.prototype.serve");
        const responseHeaders = Object.assign({ "Content-type": "application/json" }, headers);
        response.writeHead(status, responseHeaders);
        response.write(typeof body === "string" ? body : JSON.stringify(body));
        return response.end();
    };
    ProcessService.prototype.onDispatchProcess = function (request, response, fallback) {
        trace("ProcessService.prototype.onDispatchProcess");
        return this.constructor.process.call(this, request, response, fallback);
        const parsedUrl = RestUtils.require("url").parse(request.url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForProcess, this.constructor.path);
        const extraPath = parsedUrl.pathname.replace(urlStarter, "");
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({
            process: urlStarter,
            subroute: extraPath
        }));
        return response.end();
    };
    ProcessService.prototype.dispatch = function (request, response, fallback = RestUtils.noop) {
        trace("ProcessService.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForProcess, this.constructor.path);
        if (parsedUrl.pathname.startsWith(urlStarter)) {
            return this.onDispatchProcess(request, response, fallback);
        } else {
            return this.onDispatchError(new Error("Required url path to be valid in order to «ProcessService.prototype.dispatch» (passed: «" + parsedUrl.pathname + "») (valid: «" + urlStarter + "»)"), request, response);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 7. RestByMySQL class:
    const RestByMySQL = function (options, extensions = {}) {
        trace("RestByMySQL.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «RestByMySQL.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «RestByMySQL.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «RestByMySQL.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    Object.assign(RestByMySQL.prototype, { ...RestInterface.prototype });
    RestByMySQL.prototype.initialize = async function () {
        try {
            trace("RestByMySQL.prototype.initialize");
            this.connection = await RestUtils.require("mysql2/promise").createConnection(this.credentials);
            this.connection = RestUtils.expandConnection(this.connection);
            await this.connection.ping();
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.selectMany = async function (dataType, { where = [], order = [], groups = [], pagination = [1, 20] }, authentication) {
        try {
            trace("RestByMySQL.prototype.selectMany");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const sanitizedGroup = RestUtils.fromGroupToSQL(groups);
            const sanitizedOrder = RestUtils.fromOrderToSQL(order);
            const sanitizedPagination = RestUtils.fromPaginationToSQL(pagination);
            const query = [
                `# Select many query:`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
                sanitizedGroup,
                sanitizedOrder,
                sanitizedPagination,
            ].join("\n");
            const resultsReport = await this.connection.proxifiedQuery(query);
            const [results] = resultsReport;
            const context = { dataType, where, order, groups, pagination, authentication, query, results };
            await this.server.hooks.useHook("api://rest.selectMany::after", { context });
            await this.server.hooks.useHook("api://rest.selectMany:" + dataType + "::after", { context });
            return results;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.selectOne = async function (dataType, { where = [] }, authentication) {
        try {
            trace("RestByMySQL.prototype.selectOne");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const query = [
                `# Select one query:`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const resultsReport = await this.connection.proxifiedQuery(query);
            const [results] = resultsReport;
            if (results.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.selectOne»");
            } else if (results.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.selectOne»");
            }
            const context = { dataType, where, authentication, query, results };
            await this.server.hooks.useHook("api://rest.selectOne::after", { context });
            await this.server.hooks.useHook("api://rest.selectOne:" + dataType + "::after", { context });
            return results[0];
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.insertMany = async function (dataType, { items }, authentication) {
        try {
            trace("RestByMySQL.prototype.insertMany");
            const sanitizedTable = dataType;
            const sanitizedKeys = RestUtils.fromItemsToKeysSQL(items);
            const sanitizedValues = RestUtils.fromItemsToValuesSQL(items);
            const query = [
                `# Insert many query:`,
                `INSERT `,
                `  INTO ${sanitizedTable} ${sanitizedKeys}`,
                `  VALUES ${sanitizedValues}`,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                firstId: unsanitizedReport.insertId,
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, items, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.insertMany::after", { context });
            await this.server.hooks.useHook("api://rest.insertMany:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.insertOne = async function (dataType, { item }, authentication) {
        try {
            trace("RestByMySQL.prototype.insertOne");
            const sanitizedTable = dataType;
            const sanitizedKeys = RestUtils.fromItemToKeysSQL(item);
            const sanitizedValues = RestUtils.fromItemToValuesSQL(item);
            const query = [
                `# Insert one query:`,
                `INSERT `,
                `  INTO ${sanitizedTable} ${sanitizedKeys}`,
                `  VALUES ${sanitizedValues}`,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                id: unsanitizedReport.insertId,
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, item, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.insertOne::after", { context });
            await this.server.hooks.useHook("api://rest.insertOne:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.updateMany = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByMySQL.prototype.updateMany");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const sanitizedSettables = RestUtils.fromItemToSettablesSQL(values);
            const query = [
                `# Update many query:`,
                `UPDATE ${sanitizedTable}`,
                `  SET ${sanitizedSettables}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, values, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.updateMany::after", { context });
            await this.server.hooks.useHook("api://rest.updateMany:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.updateOne = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByMySQL.prototype.updateOne");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const sanitizedSettables = RestUtils.fromItemToSettablesSQL(values);
            const querySelectOne = [
                `# Select one query (in order to update one):`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const [selectionReport] = await this.connection.proxifiedQuery(querySelectOne);
            if (selectionReport.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.updateOne»");
            } else if (selectionReport.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.updateOne»");
            }
            const query = [
                `# Update one query:`,
                `UPDATE ${sanitizedTable}`,
                `  SET ${sanitizedSettables}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, values, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.updateOne::after", { context });
            await this.server.hooks.useHook("api://rest.updateOne:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.deleteMany = async function (dataType, { where }, authentication) {
        try {
            trace("RestByMySQL.prototype.deleteMany");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const query = [
                `# Delete many query:`,
                `DELETE`,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.deleteMany::after", { context });
            await this.server.hooks.useHook("api://rest.deleteMany:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.deleteOne = async function (dataType, { where }, authentication) {
        try {
            trace("RestByMySQL.prototype.deleteOne");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const querySelectOne = [
                `# Select one query (in order to delete one):`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const [selectionReport] = await this.connection.proxifiedQuery(querySelectOne);
            if (selectionReport.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.deleteOne»");
            } else if (selectionReport.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.deleteOne»");
            }
            const query = [
                `# Delete one query:`,
                `DELETE`,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.deleteOne::after", { context });
            await this.server.hooks.useHook("api://rest.deleteOne:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.getFile = async function (dataType, { id, column }, authentication) {
        try {
            trace("RestByMySQL.prototype.getFile");
            // @TODO...
            // @TODO...
            // @TODO...
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.setFile = async function (dataType, { id, column, file }, authentication) {
        try {
            trace("RestByMySQL.prototype.setFile");
            // @TODO...
            // @TODO...
            // @TODO...
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.resetDatabase = async function (authentication) {
        try {
            trace("RestByMySQL.prototype.resetDatabase");
            await this.connection.proxifiedQuery([
                `DROP DATABASE IF EXISTS ${this.credentials.database};`
            ].join("\n"));
            await this.connection.proxifiedQuery([
                `CREATE DATABASE ${this.credentials.database};`
            ].join("\n"));
            await this.connection.proxifiedQuery([
                `USE ${this.credentials.database};`
            ].join("\n"));
            if (this.server.auth && this.server.auth.resetAuth) {
                await this.server.auth.resetAuth();
            }
            const allServices = this.server.services;
            for (let indexService = 0; indexService < allServices.length; indexService++) {
                const serviceClass = allServices[indexService];
                await (async (serviceClass) => {
                    if (typeof serviceClass.creationScript === "string") {
                        await this.connection.proxifiedQuery(serviceClass.creationScript);
                    }
                })(serviceClass);
            }
            if (typeof this.seeder === "function") {
                await this.seeder(authentication);
            }
        } catch (error) {
            this.onError(error);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 10. AuthByMySQL class:
    const AuthByMySQL = function (options, extensions = {}) {
        trace("AuthByMySQL.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «AuthByMySQL.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «AuthByMySQL.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «AuthByMySQL.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    Object.assign(AuthByMySQL.prototype, { ...AuthInterface });
    AuthByMySQL.prototype.initialize = async function () {
        try {
            trace("AuthByMySQL.prototype.initialize");
            // @TODO...
            // @TODO...
            // @TODO...
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onRespond = function (context) {
        trace("AuthByMySQL.prototype.onRespond");
        return RestUtils.respondContext(context);
    };
    AuthByMySQL.prototype.dispatch = async function (request, response, fallback = RestUtils.basicControllerFallback) {
        trace("AuthByMySQL.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        if (parsedUrl.pathname.startsWith(this.server.basePathForAuth)) {
            const actionPath = parsedUrl.pathname.replace(this.server.basePathForAuth, "").replace(this.constructor.path, "");
            if (false) {
                return false;
            } else if (actionPath === "/register") {
                return this.dispatchRegister(request, response);
            } else if (actionPath === "/confirm") {
                return this.dispatchConfirm(request, response);
            } else if (actionPath === "/login") {
                return this.dispatchLogin(request, response);
            } else if (actionPath === "/logout") {
                return this.dispatchLogout(request, response);
            } else if (actionPath === "/forgot") {
                return this.dispatchForgot(request, response);
            } else if (actionPath === "/recover") {
                return this.dispatchRecover(request, response);
            } else if (actionPath === "/unregister") {
                return this.dispatchUnregister(request, response);
            } else if (actionPath === "/modify") {
                return this.dispatchModify(request, response);
            } else {
                return this.onDispatchError(new Error("Required action path to be valid (and «" + actionPath + "» is not valid as auth service) in order to «dispatch»"), request, response);
            }
        }
        return fallback(request, response);
    };
    AuthByMySQL.prototype.generateContext = RestUtils.generateContextByRequestResponseFactory("AuthByMySQL.prototype.generateContext");
    AuthByMySQL.prototype.authenticate = async function (token) {
        try {
            trace("AuthByMySQL.prototype.authenticate");
            const sanitizedToken = RestUtils.sanitize(token);
            const [matchedSessions] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE token = ${sanitizedToken};`
            ].join("\n"));
            if (matchedSessions.length === 0) {
                throw new Error("Required parameter «session_token» to be session a session token in order to «authenticate»");
            } else if (matchedSessions.length !== 1) {
                throw new Error("Data corrupted by duplication of session token");
            }
            const [matchedSession] = matchedSessions;
            const sanitizedUserId = RestUtils.sanitize(matchedSession.id_user);
            const [matchedUsers] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE id = ${sanitizedUserId};`
            ].join("\n"));
            if (matchedUsers.length === 0) {
                throw new Error("Required parameter «session_token» to be session a session token in order to «authenticate»");
            } else if (matchedUsers.length !== 1) {
                throw new Error("Data corrupted by duplication of session token");
            }
            const [matchedUser] = matchedUsers;
            let matchedGroups = undefined;
            let matchedPrivileges = undefined;
            const [matchedGroups1] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_groups WHERE auth_groups.id IN (SELECT DISTINCT id_group FROM auth_groups_of_users WHERE auth_groups_of_users.id_user IN (${sanitizedUserId}));`
            ].join("\n"));
            matchedGroups = matchedGroups1;
            if (matchedGroups.length) {
                const sanitizedGroupIds = matchedGroups.map(item => RestUtils.sanitize(item.id)).join(", ");
                const [matchedPrivileges1] = await this.server.rest.connection.proxifiedQuery([
                    `SELECT * FROM auth_privileges WHERE auth_privileges.id IN (SELECT DISTINCT id_privilege FROM auth_privileges_of_groups WHERE auth_privileges_of_groups.id_group IN (${sanitizedGroupIds}));`
                ].join("\n"));
                matchedPrivileges = matchedPrivileges1;
            }
            return {
                session: matchedSession,
                user: matchedUser,
                groups: matchedGroups,
                privileges: matchedPrivileges,
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.dispatchRegister = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchRegister");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForRegister(context);
            context.state.operationResults = await this.onRegister(context);
            await this.onFormatOutputForRegister(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchConfirm = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchConfirm");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForConfirm(context);
            context.state.operationResults = await this.onConfirm(context);
            await this.onFormatOutputForConfirm(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchLogin = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchLogin");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForLogin(context);
            context.state.operationResults = await this.onLogin(context);
            await this.onFormatOutputForLogin(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchLogout = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchLogout");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForLogout(context);
            context.state.operationResults = await this.onLogout(context);
            await this.onFormatOutputForLogout(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchForgot = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchForgot");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForForgot(context);
            context.state.operationResults = await this.onForgot(context);
            await this.onFormatOutputForForgot(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchRecover = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchRecover");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForRecover(context);
            context.state.operationResults = await this.onRecover(context);
            await this.onFormatOutputForRecover(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchUnregister = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchUnregister");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForUnregister(context);
            context.state.operationResults = await this.onUnregister(context);
            await this.onFormatOutputForUnregister(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchModify = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchModify");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForModify(context);
            context.state.operationResults = await this.onModify(context);
            await this.onFormatOutputForModify(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.onRegister = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onRegister");
            return await this.register(context.parameters.user, context.parameters.password, context.parameters.email);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onConfirm = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onConfirm");
            return await this.confirm(context.parameters.confirmationToken);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onLogin = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onLogin");
            return await this.login(context.parameters.user, context.parameters.password);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onLogout = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onLogout");
            return await this.logout(context.parameters.session_token);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onForgot = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onForgot");
            return await this.forgot(context.parameters.user);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onRecover = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onRecover");
            return await this.recover(context.parameters.recovery_token);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onUnregister = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onUnregister");
            return await this.unregister(context.parameters.session_token, context.parameters.user, context.parameters.password);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onModify = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onModify");
            return await this.modify(context.parameters.session_token, context.parameters.user, context.parameters.password);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatParametersForRegister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForRegister");
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
            context.parameters.email = context.input.query.email;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForRegister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForRegister");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/register",
                    action: "/register",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForConfirm = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForConfirm");
            context.parameters.confirmationToken = context.input.query.confirmation_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForConfirm = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForConfirm");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/confirm",
                    action: "/confirm",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForLogin = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForLogin");
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForLogin = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForLogin");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/login",
                    action: "/login",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForLogout = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForLogout");
            context.parameters.session_token = context.input.query.session_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForLogout = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForLogout");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/logout",
                    action: "/logout",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForForgot = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForForgot");
            context.parameters.user = context.input.query.user;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForForgot = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForForgot");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/forgot",
                    action: "/forgot",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForRecover = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForRecover");
            context.parameters.recovery_token = context.input.query.recovery_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForRecover = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForRecover");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/recover",
                    action: "/recover",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForUnregister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForUnregister");
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
            context.parameters.session_token = context.input.query.session_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForUnregister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForUnregister");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/unregister",
                    action: "/unregister",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForModify = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForModify");
            context.parameters.session_token = context.input.query.session_token;
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForModify = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForModify");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/modify",
                    action: "/modify",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.register = async function (user, password, email) {
        try {
            trace("AuthByMySQL.prototype.register");
            if (typeof user !== "string") {
                throw new Error("Required parameter «user» to be a «string» in order to «register»");
            }
            if (typeof password !== "string") {
                throw new Error("Required parameter «password» to be a «string» in order to «register»");
            }
            if (typeof email !== "string") {
                throw new Error("Required parameter «email» to be a «string» in order to «register»");
            }
            const sanitizedUser = RestUtils.sanitize(user);
            const sanitizedEmail = RestUtils.sanitize(email);
            const [coincidentNames] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE name = ${sanitizedUser};`
            ].join("\n"));
            if (coincidentNames.length) {
                throw new Error("Required parameter «name» to be unique in order to «register»");
            }
            const [coincidentEmails] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE email = ${sanitizedEmail};`
            ].join("\n"));
            if (coincidentEmails.length) {
                throw new Error("Required parameter «email» to be unique in order to «register»");
            }
            const sanitizedPassword = RestUtils.sanitize(password);
            const confirmationToken = RestUtils.generateRandomToken(20);
            const sanitizedConfirmationToken = RestUtils.sanitize(confirmationToken);
            const [{ insertId }] = await this.server.rest.connection.proxifiedQuery([
                `INSERT INTO auth_pending_users (name, password, email, confirmation_token) VALUES (${sanitizedUser},${sanitizedPassword},${sanitizedEmail},${sanitizedConfirmationToken});`
            ].join("\n"));
            return {
                message: "user successfully registered",
                // pending_user_id: insertId,
                confirmation_token: confirmationToken,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.confirm = async function (confirmationToken) {
        try {
            trace("AuthByMySQL.prototype.confirm");
            if (typeof confirmationToken !== "string") {
                throw new Error("Required parameter «confirmation_token» to be a «string» in order to «confirm»");
            }
            const sanitizedConfirmationToken = RestUtils.sanitize(confirmationToken);
            const [pendingUsers] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_pending_users WHERE 1=1 AND confirmation_token = ${sanitizedConfirmationToken};`
            ].join("\n"));
            if (pendingUsers.length === 0) {
                throw new Error("Required parameter «confirmation_token» to match an existing pending users confirmation token in order to «confirm»");
            } else if (pendingUsers.length !== 1) {
                throw new Error("Data corrupted by duplication of confirmation_token of user");
            }
            const [userData] = pendingUsers;
            const sanitizedName = RestUtils.sanitize(userData.name);
            const sanitizedPassword = RestUtils.sanitize(userData.password);
            const sanitizedEmail = RestUtils.sanitize(userData.email);
            await this.server.rest.connection.proxifiedQuery([
                `INSERT INTO auth_users (name, password, email) VALUES (${sanitizedName},${sanitizedPassword},${sanitizedEmail});`
            ].join("\n"));
            const sanitizedId = RestUtils.sanitize(userData.id);
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_pending_users WHERE id = ${sanitizedId};`
            ].join("\n"));
            return {
                message: "user successfully confirmed"
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.login = async function (user, password) {
        try {
            trace("AuthByMySQL.prototype.login");
            // @TODO......................................
            let sessionToken = undefined;
            if (typeof user !== "string") {
                throw new Error("Required parameter «user» to be a «string» in order to «login»");
            }
            if (typeof password !== "string") {
                throw new Error("Required parameter «password» to be a «string» in order to «login»");
            }
            const sanitizedUser = RestUtils.sanitize(user);
            const [users] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE 1=1 AND name = ${sanitizedUser};`
            ].join("\n"));
            if (users.length === 0) {
                throw new Error("Required parameter «user» to match an existing user in order to «login»");
            } else if (users.length !== 1) {
                throw new Error("Data corrupted by duplication of name of user");
            }
            const [matchedUser] = users;
            if (matchedUser.password !== password) {
                throw new Error("Required parameter «password» to be the user password in order to «login»");
            }
            const userId = matchedUser.id;
            const sanitizedUserId = RestUtils.sanitize(userId);
            const [sessionsResults] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE 1=1 AND id_user = ${sanitizedUserId};`
            ].join("\n"));
            if (sessionsResults.length === 0) {
                sessionToken = RestUtils.generateRandomToken(20);
                const sanitizedSessionToken = RestUtils.sanitize(sessionToken);
                await this.server.rest.connection.proxifiedQuery([
                    `INSERT INTO auth_sessions (id_user, token) VALUES (${sanitizedUserId}, ${sanitizedSessionToken});`
                ].join("\n"));
            } else {
                sessionToken = sessionsResults[0].token;
            }
            const authentication = await this.authenticate(sessionToken);
            return {
                message: "user successfully logged in",
                session_token: sessionToken,
                authentication,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.logout = async function (sessionToken) {
        try {
            trace("AuthByMySQL.prototype.logout");
            const sanitizedSessionToken = RestUtils.sanitize(sessionToken);
            const [sessionsResults] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE 1=1 AND token = ${sanitizedSessionToken};`
            ].join("\n"));
            if (sessionsResults.length === 0) {
                throw new Error("Required parameter «session_token» to be a session token in order to «logout»");
            } else if (sessionsResults.length !== 1) {
                throw new Error("Data corrupted by session token duplication");
            }
            const [matchedSession] = sessionsResults;
            const sanitizedSessionId = RestUtils.sanitize(matchedSession.id);
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_sessions WHERE 1=1 AND id = ${sanitizedSessionId};`
            ].join("\n"));
            return {
                message: "user successfully logged out",
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.forgot = async function (user) {
        try {
            trace("AuthByMySQL.prototype.forgot");
            const token = RestUtils.generateRandomToken(20);
            const sanitizedUser = RestUtils.sanitize(user);
            const sanitizedToken = RestUtils.sanitize(token);
            await this.server.rest.connection.proxifiedQuery([
                `UPDATE auth_users SET recovery_token = ${sanitizedToken} WHERE 1=1 AND name = ${sanitizedUser};`
            ].join("\n"));
            return {
                message: "user successfully notified with recovery email",
                recovery_token: configurations.environment !== "test" ? "unknown" : token
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.recover = async function (recovery_token) {
        try {
            trace("AuthByMySQL.prototype.recover");
            const sanitizedToken = RestUtils.sanitize(recovery_token);
            const [matchedUsers] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE recovery_token = ${sanitizedToken};`
            ].join("\n"));
            if (matchedUsers.length === 0) {
                throw new Error("Required parameter «recovery_token» to be a recovery token in order to «recover»");
            } else if (matchedUsers.length !== 1) {
                throw new Error("Required user «recovery_token» to be active in order to «recover»");
            }
            const [userData] = matchedUsers;
            const token = RestUtils.generateRandomToken(20);
            const sanitizedUserId = RestUtils.sanitize(userData.id);
            await this.server.rest.connection.proxifiedQuery([
                `UPDATE auth_users SET recovery_token = NULL WHERE 1=1 AND id = ${sanitizedUserId};`
            ].join("\n"));
            return {
                message: "user successfully recovered",
                password: userData.password
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.unregister = async function (session_token, user, password) {
        try {
            trace("AuthByMySQL.prototype.unregister");
            const sanitizedToken = RestUtils.sanitize(session_token);
            const [matchedSessions] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE token = ${sanitizedToken};`
            ].join("\n"));
            if (matchedSessions.length === 0) {
                throw new Error("Required parameters «session_token» to be a session token in order to «unregister»");
            } else if (matchedSessions.length !== 1) {
                matchedSessions
                throw new Error("Data corrupted by session duplication on unregister");
            }
            const [matchedSession] = matchedSessions;
            const sanitizedUserId = RestUtils.sanitize(matchedSession.id_user);
            const [[matchedUser]] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE id = ${sanitizedUserId};`
            ].join("\n"));
            const isValidUser = (matchedUser.name === user) && (matchedUser.password === password);
            if (!isValidUser) {
                throw new Error("Required parameters «user» and «password» to match in order to «unregister»")
            }
            const sanitizedSessionId = RestUtils.sanitize(matchedSession.id);
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_sessions WHERE 1=1 AND id = ${sanitizedSessionId};`
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_users WHERE 1=1 AND id = ${sanitizedUserId};`
            ].join("\n"));
            return {
                message: "user successfully unregistered",
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.modify = async function (sessionToken, user, password) {
        try {
            trace("AuthByMySQL.prototype.modify");
            const sanitizedToken = RestUtils.sanitize(sessionToken);
            const [matchedSessions] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE token = ${sanitizedToken};`
            ].join("\n"));
            if (matchedSessions.length === 0) {
                throw new Error("Required parameters «session_token» to be a session token in order to «modify»");
            } else if (matchedSessions.length !== 1) {
                matchedSessions
                throw new Error("Data corrupted by session duplication on modify");
            }
            const [matchedSession] = matchedSessions;
            const sanitizedUserId = RestUtils.sanitize(matchedSession.id_user);
            const sanitizedUser = RestUtils.sanitize(user || "");
            const sanitizedPassword = RestUtils.sanitize(password || "");
            let sanitizedValues = "";
            sanitizedValues += user ? ("name = " + sanitizedUser) : "";
            sanitizedValues += ((user && password) ? ", " : "") + (password ? ("password = " + sanitizedPassword) : "");
            const [updateResults] = await this.server.rest.connection.proxifiedQuery([
                `UPDATE auth_users SET ${sanitizedValues} WHERE id = ${sanitizedUserId};`
            ].join("\n"));
            return {
                message: "user successfully modified",
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.resetAuth = async function () {
        try {
            trace("AuthByMySQL.prototype.resetAuth");
            // ENTITIES:
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_pending_users (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  password VARCHAR(100),",
                "  email VARCHAR(100),",
                "  confirmation_token VARCHAR(100)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_users (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  password VARCHAR(100),",
                "  email VARCHAR(100),",
                "  recovery_token VARCHAR(100),",
                "  description VARCHAR(200)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_groups (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  description VARCHAR(200)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_privileges (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  description VARCHAR(200)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_sessions (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  id_user INT,",
                "  token VARCHAR(100),",
                "  FOREIGN KEY (id_user) REFERENCES auth_users(id)",
                ");"
            ].join("\n"));
            // RELATIONS:
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_groups_of_users (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  id_user INT,",
                "  id_group INT,",
                "  FOREIGN KEY (id_user) REFERENCES auth_users(id),",
                "  FOREIGN KEY (id_group) REFERENCES auth_groups(id)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_privileges_of_groups (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  id_privilege INT,",
                "  id_group INT,",
                "  FOREIGN KEY (id_privilege) REFERENCES auth_privileges(id),",
                "  FOREIGN KEY (id_group) REFERENCES auth_groups(id)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_users (name, password, email) VALUES ('administrator', 'administrator', 'carlcarlsonc18@gmail.com');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_groups (name, description) VALUES ('administrators', 'the administration');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_privileges (name, description) VALUES ('to administrate', 'to administrate');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_groups_of_users (id_user, id_group) VALUES ('1', '1');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_privileges_of_groups (id_group, id_privilege) VALUES ('1', '1');"
            ].join("\n"));
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.hasAuthorizationFor = async function (privilegeName, authentication) {
        try {
            trace("AuthByMySQL.prototype.hasAuthorizationFor");
            if (typeof privilegeName !== "string") {
                throw new Error("Required parameter «privilegeName» to be a string in order to «hasAuthorizationFor»");
            }
            if (typeof authentication !== "object") {
                throw new Error("Required parameter «authentication» to be a string in order to «hasAuthorizationFor»");
            }
            const matchedPrivileges = authentication.privileges.filter(privilege => privilege.name === privilegeName);
            return matchedPrivileges.length;
        } catch (error) {
            this.onError(error);
        }
    };

    let RestByDexie = function (options, extensions = {}) {
        trace("RestByDexie.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «RestByDexie.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «RestByDexie.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «RestByDexie.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    RestByDexie = Object.assign(RestByDexie, { ...RestByMySQL });
    RestByDexie.prototype = Object.assign(RestByDexie.prototype, { ...RestByMySQL.prototype });
    RestByDexie.prototype.initialize = async function () {
        try {
            trace("RestByDexie.prototype.initialize");
            const versionSchema = {};
            const allServices = this.server.services;
            for (let indexService = 0; indexService < allServices.length; indexService++) {
                const serviceClass = allServices[indexService];
                if (typeof serviceClass.creationScript === "string") {
                    versionSchema[serviceClass.table] = serviceClass.creationScript;
                    // await this.connection.proxifiedQuery(serviceClass.creationScript);
                }
            }
            if (typeof this.seeder === "function") {
                await this.seeder(authentication);
            }
            this.connection = await RanasDB.connect("main_app_id", [[versionSchema, () => { }]]);
            this.connection = RestUtils.expandConnection(this.connection);
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.resetDatabase = async function (authentication) {
        try {
            trace("RestByDexie.prototype.resetDatabase");
            await RanasDB.dropDatabaseIfExists("main_app_id");
            await this.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.selectOne = async function (dataType, { where }, authentication) {
        try {
            trace("RestByDexie.prototype.selectOne");
            await this.server.hooks.useHook("api://rest.selectOne::before", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.selectOne:" + dataType + "::before", { dataType, where, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const allResults = await this.connection.dexieDB[dataType].filter(tfilter).toArray();
            if (allResults.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.selectOne»");
            } else if (allResults.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.selectOne»");
            }
            const result = allResults[0];
            await this.server.hooks.useHook("api://rest.selectOne::after", { dataType, where, authentication, result });
            await this.server.hooks.useHook("api://rest.selectOne:" + dataType + "::after", { dataType, where, authentication, result });
            return result;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.selectMany = async function (dataType, { where = [], order = [], group = [], pagination = [] }, authentication) {
        try {
            trace("RestByDexie.prototype.selectMany");
            await this.server.hooks.useHook("api://rest.selectMany::before", { dataType, where, order, group, pagination, authentication });
            await this.server.hooks.useHook("api://rest.selectMany:" + dataType + "::before", { dataType, where, order, group, pagination, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const [page = 1, items = 20] = pagination;
            const offset = (page - 1) * items;
            const finalOrder = ((!Array.isArray(order)) || (order.length === 0)) ? ":id" : order[0].startsWith("!") ? order[0].substr(1) : order[0];
            if (order[0].startsWith("!")) {
                transaction.reverse();
            }
            transaction.offset(offset).limit(items);
            const result = await transaction.sortBy(...finalOrder);
            await this.server.hooks.useHook("api://rest.selectMany::after", { dataType, where, order, group, pagination, result, authentication });
            await this.server.hooks.useHook("api://rest.selectMany:" + dataType + "::after", { dataType, where, order, group, pagination, result, authentication });
            return result;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.insertOne = async function (dataType, { item }, authentication) {
        try {
            trace("RestByDexie.prototype.insertOne");
            await this.server.hooks.useHook("api://rest.insertOne::before", { dataType, item, authentication });
            await this.server.hooks.useHook("api://rest.insertOne:" + dataType + "::before", { dataType, item, authentication });
            const result = await this.connection.dexieDB[dataType].add(item);
            await this.server.hooks.useHook("api://rest.insertOne::after", { dataType, item, authentication });
            await this.server.hooks.useHook("api://rest.insertOne:" + dataType + "::after", { dataType, item, authentication });
            return {
                rows: 1,
                id: result
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.insertMany = async function (dataType, { items }, authentication) {
        try {
            trace("RestByDexie.prototype.insertMany");
            await this.server.hooks.useHook("api://rest.insertMany::before", { dataType, items, authentication });
            await this.server.hooks.useHook("api://rest.insertMany:" + dataType + "::before", { dataType, items, authentication });
            const result = await this.connection.dexieDB[dataType].bulkAdd(items);
            await this.server.hooks.useHook("api://rest.insertMany::after", { dataType, items, authentication });
            await this.server.hooks.useHook("api://rest.insertMany:" + dataType + "::after", { dataType, items, authentication });
            return {
                rows: items.length,
                id: result
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.updateOne = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByDexie.prototype.updateOne");
            await this.server.hooks.useHook("api://rest.updateOne::before", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateOne:" + dataType + "::before", { dataType, where, values, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            if (allResults.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.updateOne»");
            } else if (allResults.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.updateOne»");
            }
            await transaction.modify(item => {
                Object.assign(item, values);
            });
            await this.server.hooks.useHook("api://rest.updateOne::after", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateOne:" + dataType + "::after", { dataType, where, values, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.updateMany = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByDexie.prototype.updateMany");
            await this.server.hooks.useHook("api://rest.updateMany::before", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateMany:" + dataType + "::before", { dataType, where, values, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            await transaction.modify(item => {
                Object.assign(item, values);
            });
            await this.server.hooks.useHook("api://rest.updateMany::after", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateMany:" + dataType + "::after", { dataType, where, values, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.deleteOne = async function (dataType, { where }, authentication) {
        try {
            trace("RestByDexie.prototype.deleteOne");
            await this.server.hooks.useHook("api://rest.deleteOne::before", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteOne:" + dataType + "::before", { dataType, where, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            if (allResults.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.deleteOne»");
            } else if (allResults.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.deleteOne»");
            }
            await transaction.delete();
            await this.server.hooks.useHook("api://rest.deleteOne::after", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteOne:" + dataType + "::after", { dataType, where, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.deleteMany = async function (dataType, { where }, authentication) {
        try {
            trace("RestByDexie.prototype.deleteMany");
            await this.server.hooks.useHook("api://rest.deleteMany::before", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteMany:" + dataType + "::before", { dataType, where, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            await transaction.delete();
            await this.server.hooks.useHook("api://rest.deleteMany::after", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteMany:" + dataType + "::after", { dataType, where, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.getFile = async function (table) {
        try {
            trace("RestByDexie.prototype.getFile");
            console.log(table);
            return 600;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.setFile = async function (table) {
        try {
            trace("RestByDexie.prototype.setFile");
            console.log(table);
            return 600;
        } catch (error) {
            this.onError(error);
        }
    };

    let AuthByDexie = function (options, extensions = {}) {
        trace("AuthByDexie.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «AuthByDexie.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «AuthByDexie.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «AuthByDexie.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    AuthByDexie = Object.assign(AuthByDexie, { ...AuthByMySQL });
    AuthByDexie.prototype = Object.assign(AuthByDexie.prototype, { ...AuthByMySQL.prototype });
    AuthByDexie.prototype.authenticate = function () { };
    AuthByDexie.prototype.login = function () { };
    AuthByDexie.prototype.logout = function () { };
    AuthByDexie.prototype.refresh = function () { };
    AuthByDexie.prototype.register = function () { };
    AuthByDexie.prototype.confirm = function () { };
    AuthByDexie.prototype.forgot = function () { };
    AuthByDexie.prototype.recover = function () { };
    AuthByDexie.prototype.unregister = function () { };
    AuthByDexie.prototype.hasAuthorizationFor = function () { };
    AuthByDexie.prototype.resetAuth = function () { };

    const VirtualDataService = function (dynamicInterface = {}) {
        trace("VirtualDataService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    Object.assign(VirtualDataService, { ...DataService });
    Object.assign(VirtualDataService.prototype, { ...DataService.prototype });

    VirtualDataService.prototype.resetDatabase = async function () {
        trace("VirtualDataService.prototype.resetDatabase");
        try {
            await RanasDB.dropDatabaseIfExists(this.credentials.database);
            return await this.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    VirtualDataService.prototype.initialize = async function () {
        trace("VirtualDataService.prototype.initialize");
        try {
            this.connection = await RanasDB.connect(this.credentials.database, this.versionation);
            return this;
        } catch (error) {
            this.onError(error);
        }
    };

    const VirtualQueryService = function () {
        trace("VirtualQueryService.constructor");
    };
    Object.assign(VirtualQueryService, { ...QueryService });
    Object.assign(VirtualQueryService.prototype, { ...QueryService.prototype });

    const VirtualProcessService = function () {
        trace("VirtualProcessService.constructor");
    };
    Object.assign(VirtualProcessService, { ...ProcessService });
    Object.assign(VirtualProcessService.prototype, { ...ProcessService.prototype });
    // VirtualProcessService.prototype.dispatch = function (request, response) { };

    const VirtualDataServer = function (dynamicInterface = {}) {
        trace("VirtualDataServer.constructor");
        Object.assign(this, dynamicInterface);
        if (!this.adapter) this.adapter = "dexie";
        this.rest = undefined;
        this.auth = undefined;
        this.services = [];
        this.queries = [];
        this.processes = [];
        this.hooks = Hooks.create();
        this.basePathForData = "/rest/api/v1";
        this.basePathForAuth = "/auth/api/v1";
        this.basePathForQuery = "/query/api/v1";
        this.basePathForProcess = "/process/api/v1";
        return this;
    };
    Object.assign(VirtualDataServer, { ...DataServer });
    Object.assign(VirtualDataServer.prototype, { ...DataServer.prototype });
    VirtualDataServer.prototype.initializeRest = async function () {
        try {
            trace("VirtualDataServer.prototype.initializeRest");
            let restAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "dexie";
            }
            // @TOCONTINUE: continue adding other REST adapters on the following conditional:
            if (this.adapter === "dexie") {
                restAdapter = new RestByDexie({
                    credentials: this.credentials || {},
                }, {
                    ...this.restExtension,
                    server: this,
                });
            } else {
                throw new Error("Required configuration «this.adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.rest = await restAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    VirtualDataServer.prototype.initializeAuth = async function () {
        try {
            trace("VirtualDataServer.prototype.initializeAuth");
            let authAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "dexie";
            }
            // @TOCONTINUE: continue adding other AUTH adapters on the following conditional:
            if (this.adapter === "dexie") {
                authAdapter = new AuthByDexie({
                    credentials: this.credentials,
                }, {
                    ...this.authExtension,
                    server: this,
                });
            } else {
                throw new Error("Required parameter «adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.auth = await authAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    VirtualDataServer.prototype.addService = function (...args) {
        trace("VirtualDataServer.prototype.addService");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicServiceFactory()
        const service = constructorFunction;
        Object.assign(service, { ...VirtualDataService }, { ...staticInterface });
        Object.assign(service.prototype, { ...VirtualDataService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticServiceInterface(service);
        RestUtils.validateDynamicServiceInterface(service.prototype);
        this.services.push(service);
        return this;
    };
    VirtualDataServer.prototype.addQuery = function (...args) {
        trace("VirtualDataServer.prototype.addQuery");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicQueryFactory()
        const queryClass = constructorFunction;
        Object.assign(queryClass, { ...VirtualQueryService }, { ...staticInterface });
        Object.assign(queryClass.prototype, { ...VirtualQueryService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticQueryInterface(queryClass);
        RestUtils.validateDynamicQueryInterface(queryClass.prototype);
        this.queries.push(queryClass);
        return this;
    };
    VirtualDataServer.prototype.addProcess = function (...args) {
        trace("VirtualDataServer.prototype.addProcess");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicProcessFactory()
        const processClass = constructorFunction;
        Object.assign(processClass, { ...VirtualProcessService }, { ...staticInterface });
        Object.assign(processClass.prototype, { ...VirtualProcessService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticProcessInterface(processClass);
        RestUtils.validateDynamicProcessInterface(processClass.prototype);
        this.processes.push(processClass);
        return this;
    };
    VirtualDataServer.prototype.dispatchSelf = function (method = "get", url = "/", requestArgs = {}, responseArgs = {}) {
        trace("VirtualDataServer.prototype.dispatchSelf");
        trace("METHOD: " + method);
        trace("   URL: " + url);
        const parsedUrl = RestUtils.require("url").parse(url);
        const request = new RequestPolyfill(method, url, requestArgs);
        const response = new ResponsePolyfill(responseArgs);
        if (parsedUrl.pathname.startsWith(this.basePathForData)) {
            const [model, operation, quantifier] = parsedUrl.pathname.replace(this.basePathForData, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        } else if (parsedUrl.pathname.startsWith(this.basePathForAuth)) {
            const [operation] = parsedUrl.pathname.replace(this.basePathForAuth, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        } else if (parsedUrl.pathname.startsWith(this.basePathForProcess)) {
            const [processId] = parsedUrl.pathname.replace(this.basePathForProcess, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        } else if (parsedUrl.pathname.startsWith(this.basePathForQuery)) {
            const [queryId] = parsedUrl.pathname.replace(this.basePathForQuery, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        }
        throw new Error("Request not valid: domain out of bounds");
    };
    VirtualDataServer.throwOnErrorStatus = function (data) {
        if (data.status >= 200 && data.status <= 400) {
            data.response = Object.assign({}, data, {
                statusText: "OK"
            });
            return data;
        }
        throw data;
    };
    /*
    VirtualDataServer.prototype.dispatch = function () {};
    VirtualDataServer.prototype.createDispatcher = function() {};
    VirtualDataServer.prototype.createHttpServerController = function() {};
    VirtualDataServer.prototype.createHttpServer = function() {};
    VirtualDataServer.prototype.listen = function() {};
    VirtualDataServer.prototype.stopDatabaseConnection = function() {};
    VirtualDataServer.prototype.stopHttpServer = function() {};
    VirtualDataServer.prototype.resetDatabase = function() {};
    VirtualDataServer.prototype.resetAuth = function() {};
    //*/

    ////////////////////////////////////////////////////////////////////////
    // 12. Common traits:
    RestByMySQL.prototype.onError = RestUtils.generateOnErrorFunction("RestByMySQL.prototype.onError");
    RestByMySQL.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("RestByMySQL.prototype.onDispatchError");
    AuthByMySQL.prototype.onError = RestUtils.generateOnErrorFunction("AuthByMySQL.prototype.onError");
    AuthByMySQL.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("AuthByMySQL.prototype.onDispatchError");
    DataService.prototype.onError = RestUtils.generateOnErrorFunction("DataService.prototype.onError");
    DataService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("DataService.prototype.onDispatchError");
    DataServer.prototype.onError = RestUtils.generateOnErrorFunction("DataServer.prototype.onError");
    DataServer.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("DataServer.prototype.onDispatchError");
    Hooks.prototype.onError = RestUtils.generateOnErrorFunction("Hooks.prototype.onError");
    Hooks.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("Hooks.prototype.onDispatchError");
    QueryService.prototype.onError = RestUtils.generateOnErrorFunction("QueryService.prototype.onError");
    QueryService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("QueryService.prototype.onDispatchError");
    ProcessService.prototype.onError = RestUtils.generateOnErrorFunction("ProcessService.prototype.onError");
    ProcessService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("ProcessService.prototype.onDispatchError");

    RestByDexie.prototype.onError = RestUtils.generateOnErrorFunction("RestByDexie.prototype.onError");
    RestByDexie.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("RestByDexie.prototype.onDispatchError");
    AuthByDexie.prototype.onError = RestUtils.generateOnErrorFunction("AuthByDexie.prototype.onError");
    AuthByDexie.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("AuthByDexie.prototype.onDispatchError");
    VirtualDataService.prototype.onError = RestUtils.generateOnErrorFunction("VirtualDataService.prototype.onError");
    VirtualDataService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualDataService.prototype.onDispatchError");
    VirtualDataServer.prototype.onError = RestUtils.generateOnErrorFunction("VirtualDataServer.prototype.onError");
    VirtualDataServer.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualDataServer.prototype.onDispatchError");

    VirtualQueryService.prototype.onError = RestUtils.generateOnDispatchErrorFunction("VirtualQueryService.prototype.onError");
    VirtualQueryService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualQueryService.prototype.onDispatchError");
    VirtualProcessService.prototype.onError = RestUtils.generateOnDispatchErrorFunction("VirtualProcessService.prototype.onError");
    VirtualProcessService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualProcessService.prototype.onDispatchError");

    ////////////////////////////////////////////////////////////////////////
    // 99. Export internal interfaces from DataServer:
    DataServer.RestInterface = RestInterface;
    DataServer.RestByMySQL = RestByMySQL;
    DataServer.AuthInterface = AuthInterface;
    DataServer.AuthByMySQL = AuthByMySQL;
    DataServer.DataService = DataService;
    DataServer.RestUtils = RestUtils;
    DataServer.Hooks = Hooks;
    DataServer.RestByDexie = RestByDexie;
    DataServer.AuthByDexie = AuthByDexie;
    DataServer.VirtualDataServer = VirtualDataServer;
    DataServer.VirtualDataService = VirtualDataService;

    ////////////////////////////////////////////////////////////////////////
    const finalAPI = {
        // Public API:
        DataServer,
        VirtualDataServer,
        DataService,
        Hooks,
        // Internal (but exposed) API:
        RestInterface,
        RestByMySQL,
        AuthInterface,
        AuthByMySQL,
        RestUtils,
        RestByDexie,
        AuthByDexie,
        VirtualDataService,
    };
    finalAPI.default = finalAPI;
    return finalAPI;

});