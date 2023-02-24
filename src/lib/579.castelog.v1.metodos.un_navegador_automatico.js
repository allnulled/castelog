Castelog.variables.configuraciones_de_navegador_automatico_por_defecto = {
    headless: false
};
Castelog.metodos.un_navegador_automatico = function(configuraciones_arg = {}) {
    const configuraciones = Object.assign({}, Castelog.variables.configuraciones_de_navegador_automatico_por_defecto, configuraciones_arg);
    let puppeteer = undefined;
    try {
        puppeteer = require("puppeteer");
    } catch(error) {
        throw new Error("Se requiere del módulo «puppeteer» (versión 19.7.2 óptimamente) para «Castelog.metodos.un_navegador_automatico»");
    }
    return puppeteer.launch(configuraciones);
}