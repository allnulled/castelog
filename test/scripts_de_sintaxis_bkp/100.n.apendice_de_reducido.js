console.log((6 === ([1, 2, 3]).reduce(function(output, item) {return output + item;}, 0)));
if(!(10 === ([1, 9]).reduce(function(output, item) {return output + item;}, 0))) throw new Error("Error en [117-237=3:64-6:63] cuando: " + "Compruebo que 10 es igual que [1,9]\n    reducido desde 0\n    con una función (output, item) donde retorno output + item")