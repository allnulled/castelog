
console.log(6 === Castelog.metodos.un_reducido_por([ 1,
2,
3 ], ( output,
item ) => {
return output + item;
}, 0, null));
if(!(10 === Castelog.metodos.un_reducido_por([ 1,
9 ], ( output,
item ) => {
return output + item;
}, 0, null))) throw new Error("Error en fichero [-] en posición [97-197=1:98-2:100] cuando: " + "Compruebo que 10 es igual que [1,9] reducido desde 0 con (output, item) donde retorno output + item");