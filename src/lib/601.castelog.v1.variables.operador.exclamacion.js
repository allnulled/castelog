Castelog.variables.operador.exclamacion = {
    seleccionado: {}
};
Castelog.variables.operador.exclamacion.ejs = {};
Castelog.variables.operador.exclamacion.ejs.ui = {};
Castelog.variables.operador.exclamacion.ejs.ui.dom = {};
Castelog.variables.operador.exclamacion.ejs.ui.dom.elemento = function(elemento = "div", atributos = {}, componentes = []) {
    let plantilla = "";
    plantilla += "<" + elemento;
    const clave_de_atributos = Object.keys(atributos);
    for(let index = 0; index < clave_de_atributos.length; index++) {
        const clave_de_atributo = clave_de_atributos[index];
        const valor_de_atributo = atributos[clave_de_atributo];
        plantilla += ` ${clave_de_atributo}=${JSON.stringify(valor_de_atributo)}`
    }
    plantilla += ">";
    const clave_de_componentes = Object.keys(componentes);
    for(let index = 0; index < clave_de_componentes.length; index++) {
        const clave_de_componente = clave_de_componentes[index];
        const valor_de_componente = componentes[clave_de_componente];
        plantilla += valor_de_componente;
    }
    plantilla += "</" + elemento + ">";
    return plantilla;
};