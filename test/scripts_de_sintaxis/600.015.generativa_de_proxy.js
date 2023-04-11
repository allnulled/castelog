
const x = (new Proxy({ nombre:"Carl",
obtenerNombre:(new Proxy(function() {try {
return "Carl";
} catch(error) {
console.log(error);
throw error;
}

}, { apply:function( dato,
propiedaz ) {try {
return "Carl Carlson";
} catch(error) {
console.log(error);
throw error;
}

}
}))
}, { get:function( dato,
propiedaz ) {try {
if(propiedaz === "obtenerNombre") {
return dato[ propiedaz ];
}
return "Carlson";
} catch(error) {
console.log(error);
throw error;
}

}
}));
console.log(x.nombre);
console.log(x.edad);
console.log(x.obtenerNombre(  ));