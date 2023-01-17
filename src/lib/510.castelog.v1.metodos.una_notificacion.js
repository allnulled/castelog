Castelog.metodos.una_notificacion = function(mensaje) {
    if (typeof window !== "undefined") {
        return new Promise((ok, fail) => {
            try {
                const dialogDiv = document.createElement("div");
                dialogDiv.innerHTML = `<div style="display: block; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: white; z-index: 9999;">
                    <table style="width: 100%; height: 100%;">
                        <tr style="height: 5%;">
                            <td style="vertical-align: bottom;">
                                <div style="display: inline-block; width: auto; font-family: monospace; font-size: 10px;" class="dialog_label"></div>
                            </td>
                        </tr>
                        <tr style="height: 50%;">
                            <td style="vertical-align: top; border-top: 1px solid #333;">
                                <button style="float: left; font-family: monospace; font-size: 10px;" class="dialog_submiter">Aceptar</button>
                            </td>
                        </tr>
                    </table>
                </div>`;
                const dialogLabel = dialogDiv.querySelector(".dialog_label");
                const dialogSubmiter = dialogDiv.querySelector(".dialog_submiter");
                dialogLabel.textContent = mensaje;
                dialogSubmiter.addEventListener("click", function (event) {
                    dialogDiv.remove();
                    return ok(true);
                });
                document.body.appendChild(dialogDiv);
                dialogSubmiter.focus();
            } catch (error) {
                window.alert(mensaje);
                return fail(error);
            }
        });
    } else if (typeof global === "object") {
        return new Promise((ok, fail) => {
            try {
                const reader = require("readline").createInterface({
                    input: process.stdin,
                    output: process.stdout,
                });
                reader.question(mensaje + "\n«Presiona enter:» ", answer => {
                    reader.close();
                    return ok(true);
                });
            } catch(error) {
                console.log(mensaje);
                return fail(error);
            }
        });
    }
};