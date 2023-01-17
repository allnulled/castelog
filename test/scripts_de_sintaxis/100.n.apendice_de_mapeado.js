
console.log(( Castelog.metodos.un_mapeado_por([ 1,
2,
3 ], ( item ) => {
return "+" + item;
}, null, null) )[ 0 ] === "+1");