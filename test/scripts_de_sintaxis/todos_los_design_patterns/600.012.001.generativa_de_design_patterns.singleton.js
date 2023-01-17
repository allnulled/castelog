
Castelog.metodos.un_test("Test de un singleton design pattern", async () => {
const obtener_conexion = function() {return { tipo:"conexión única"
};
};
const { getter: getConnection, value
} = Castelog.metodos.un_singleton_design_pattern({
  getter: dp => { return null; },
  setter: dp => { return () => {dp.value = obtener_conexion(  );
}; },
  value: dp => { return null; }
});
const conexion1 = getConnection(  );
const conexion2 = getConnection(  );
const conexion3 = getConnection(  );
if(!(conexion1 === conexion2)) throw new Error("Error en fichero [-] en posición [486-537=6:41-7:51] cuando: " + "compruebo que conexion1 es igual que conexion2");
if(!(conexion2 === conexion3)) throw new Error("Error en fichero [-] en posición [538-589=7:52-8:51] cuando: " + "compruebo que conexion2 es igual que conexion3");
if(!(conexion3 === value)) throw new Error("Error en fichero [-] en posición [590-637=8:52-9:47] cuando: " + "compruebo que conexion3 es igual que value");
console.log("¡Test de un singleton design pattern pasado exitosamente!");
}, testeo_de_dp, undefined, undefined);