
Castelog.metodos.un_test("Test de un factory method design pattern", async () => {
const { factory, classes
} = Castelog.metodos.un_factory_method_design_pattern({
  factory: dp => { return null; },
  classes: dp => { return { FactoryPrototype:class { constructor( configuraciones ){ Object.assign(this, configuraciones || { 
} ); }
},
Factory1:class extends dp.classes.FactoryPrototype{ build( parametros ){ return new Object.assign(dp.products.Product1(  ), parametros, { tipo:"Product of type 1"
} );
}
},
Factory2:class extends dp.classes.FactoryPrototype{ build( parametros ){ return new Object.assign(dp.products.Product2(  ), parametros, { tipo:"Product of type 2"
} );
}
}
}; },
  products: dp => { return null; }});
const product1 = factory( "Factory 1",
{ x:"ok"
},
{ z:true
} );
const product2 = factory( "Factory 2",
{ x:"ok"
},
{ z:true
} );
if(!(product1.tipo === "Product of type 1")) throw new Error("Error en fichero [-] en posición [1113-1178=15:71-16:65] cuando: " + "compruebo que product1.tipo es igual que \"Product of type 1\"");
if(!(product2.tipo === "Product of type 2")) throw new Error("Error en fichero [-] en posición [1179-1244=16:66-17:65] cuando: " + "compruebo que product2.tipo es igual que \"Product of type 2\"");
console.log("¡Test de un factory method design pattern pasado exitosamente!");
}, testeo_de_dp, undefined, undefined);