
const x = (new Proxy({ nombre:"Carl",
obtenerNombre:(new Proxy(function() {return "Carl";
}, { apply:function( dato,
propiedaz ) {return "Carl Carlson";
}
}))
}, { get:function( dato,
propiedaz ) {if(propiedaz === "obtenerNombre") {
return dato[ propiedaz ];
}
return "Carlson";
}
}));
console.log(x.nombre);
console.log(x.edad);
console.log(x.obtenerNombre(  ));