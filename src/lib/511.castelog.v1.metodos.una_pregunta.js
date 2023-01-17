Castelog.metodos.una_pregunta = function(mensaje, defecto = "", es_silenciosa = false) {
    if(typeof window === "object") {
        return new Promise((ok, fail) => {
            try {
                const dialogDiv = document.createElement("div");
                dialogDiv.innerHTML = `<div style="display: block; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: white; z-index: 9999; font-family: monospace; font-size: 10px;">
                    <table style="width: 100%; height: 100%;">
                        <tr style="height: 5%;">
                            <td style="vertical-align: bottom;">
                                <div style="display: inline-block; width: auto; font-family: monospace; font-size: 10px;" class="dialog_label"></div>
                                <button style="float: right; font-family: monospace; font-size: 10px;" class="dialog_closer">Salir</div>
                            </td>
                        </tr>
                        <tr style="height: 50%;">
                            <td style="vertical-align: top; border-top: 1px solid #333;">
                                <textarea style="width: 100%; min-height: 100px; resize: vertical; box-sizing: border-box; font-family: monospace; font-size: 10px;" class="dialog_textarea"></textarea>
                                <button style="float: left; font-family: monospace; font-size: 10px;" class="dialog_submiter">Aceptar</button><span>ó CTRL + ENTER pero desde el texto</span>
                            </td>
                        </tr>
                    </table>
                </div>`;
                const dialogLabel = dialogDiv.querySelector(".dialog_label");
                const dialogCloser = dialogDiv.querySelector(".dialog_closer");
                const dialogTextarea = dialogDiv.querySelector(".dialog_textarea");
                const dialogSubmiter = dialogDiv.querySelector(".dialog_submiter");
                dialogLabel.textContent = mensaje;
                dialogCloser.addEventListener("click", function(event) {
                    dialogDiv.remove();
                    return ok(false);
                });
                dialogSubmiter.addEventListener("click", function(event) {
                    const val = dialogTextarea.value;
                    dialogDiv.remove();
                    return ok(val);
                });
                dialogTextarea.value = defecto;
                dialogTextarea.addEventListener("keypress", function(event) {
                    if((event.code === "Enter") && (event.ctrlKey)) {
                        const val = dialogTextarea.value;
                        dialogDiv.remove();
                        return ok(val);
                    }
                });
                document.body.appendChild(dialogDiv);
                dialogTextarea.focus();
            } catch(error) {
                return fail(error);
            }
        });
    } else if(typeof global === "object") {
        return new Promise(ok => {
            const reader = require("readline").createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            if(es_silenciosa) {
                reader.question(mensaje, answer => {
                    reader.close();
                    if(!answer) {
                        return ok(defecto);
                    }
                    return ok(answer);
                })
            } else {
                reader.question(mensaje + "\n«Respuesta:» ", answer => {
                    reader.close();
                    if(!answer) {
                        return ok(defecto);
                    }
                    return ok(answer);
                });
            }
        });
    }
};