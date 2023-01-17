
const Animal = class { constructor(  ){ this.id = "animal"; }
};
const Persona = class extends Animal{ static get CONFIGURACIONES_POR_DEFECTO(){ return { id:undefined
};
}
static crear(){ this.id = "lo que sea";
this.opciones = { 
};
this.debug = false;
}
get x(){ return "100";
}
constructor( opciones ){ super(  );
Object.assign( this,
opciones ); }
};
const persona1 = new Persona( { nombre:"Carl",
apellidos:"Carlson Carlson"
} );