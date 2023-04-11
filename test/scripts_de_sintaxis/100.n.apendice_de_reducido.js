
console.log(Castelog.metodos.un_reducido_por.toString(  ));
console.log(typeof( Castelog.metodos.un_reducido_por([ 1,
2,
3 ], ( item,
output ) => {
return output + item;
}, 0, null) ));
console.log(Castelog.metodos.un_reducido_por([ 1,
2,
3 ], ( item,
output ) => {
return output + item;
}, 0, null));
console.log(6 === Castelog.metodos.un_reducido_por([ 1,
2,
3 ], ( item,
output ) => {
return output + item;
}, 0, null));
if(!(10 === Castelog.metodos.un_reducido_por([ 1,
9 ], ( item,
output ) => {
return output + item;
}, 0, null))) throw new Error("Error en fichero [-] en posición [324-424=4:98-5:100] cuando: " + "Compruebo que 10 es igual que [1,9] reducido desde 0 con (item, output) donde retorno output + item");