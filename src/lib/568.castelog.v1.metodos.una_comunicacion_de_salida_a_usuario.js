Castelog.metodos.una_comunicacion_de_salida_a_usuario = function (componente, atributos = {}, eventos = {}) {
    if(typeof Vue === "undefined") {
        throw new Error("Required global «Vue» to be defined in order to «Castelog.metodos.una_comunicacion_de_salida_a_usuario»");
    }
    if(typeof Vue.prototype === "undefined") {
        throw new Error("Required global «Vue.prototype» to be defined in order to «Castelog.metodos.una_comunicacion_de_salida_a_usuario»");
    }
    if(typeof Vue.prototype.$comunicaciones.una_salida_a_usuario === "undefined") {
        throw new Error("Required global «Vue.prototype.una_comunicacion_de_salida_a_usuario» to be defined in order to «Castelog.metodos.una_comunicacion_de_salida_a_usuario»");
    }
    if(typeof componente !== "string") {
        throw new Error("Required argument «componente» to be a string in order to «Castelog.metodos.una_comunicacion_de_salida_a_usuario»");
    }
    if(typeof atributos !== "object") {
        throw new Error("Required argument «atributos» to be a object in order to «Castelog.metodos.una_comunicacion_de_salida_a_usuario»");
    }
    if(typeof eventos !== "object") {
        throw new Error("Required argument «eventos» to be a object in order to «Castelog.metodos.una_comunicacion_de_salida_a_usuario»");
    }
    return Vue.prototype.$comunicaciones.una_salida_a_usuario(componente, atributos, eventos);
};