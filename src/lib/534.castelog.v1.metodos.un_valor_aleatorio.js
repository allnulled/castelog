Castelog.metodos.un_valor_aleatorio = function(lista) {
    if(!Array.isArray(lista)) {
        throw new Error("Required argument «lista» to be an array in order to «Castelog.metodos.un_valor_aleatorio«");
    }
    return lista[Math.floor(Math.random() * lista.length)];
};