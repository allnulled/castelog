
if(!(( Castelog.metodos.un_filtrado_por([ 1,
2,
3 ], ( item ) => {
return item === 2;
}, null, null) ).length === 1)) throw "Error de 100.n.apendice_de_filtrado.clg";