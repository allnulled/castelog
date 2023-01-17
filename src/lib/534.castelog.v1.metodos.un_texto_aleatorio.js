Castelog.metodos.un_texto_aleatorio = function(caracteres, alfabeto = Castelog.variables.alfabeto_ingles) {
    if(typeof caracteres !== "number") {
        throw new Error("Required argument «caracteres» to be a number in order to «Castelog.metodos.un_texto_aleatorio»");
    }
    if(caracteres <= 0) {
        throw new Error("Required argument «caracteres» to be a more than 0 in order to «Castelog.metodos.un_texto_aleatorio»");
    }
    if(!Array.isArray(alfabeto)) {
        throw new Error("Required argument «alfabeto» to be an array in order to «Castelog.metodos.un_texto_aleatorio»");
    }
    let output = "";
    for(let index = 0; index < caracteres; index++) {
        output += alfabeto[Math.floor(Math.random() * alfabeto.length)];
    }
    return output;
};