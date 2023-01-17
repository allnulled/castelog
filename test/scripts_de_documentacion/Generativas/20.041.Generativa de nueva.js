
const Paisaje = class {constructor(objetos = []){for(objeto of objetos) {
this.objetos.push(objeto)}
}};
const paisajeUno = new Paisaje(["árbol", "sol", "mar", "montaña", "nubes"]);
const paisajeDos = new Paisaje(["edificios", "calles", "personas", "sol", "nubes"]);
if(!(paisajeUno.objetos.indexOf("árbol") !== -1)) throw new Error("Error en fichero [-] en posición [407-460=9:94-11:52] cuando: " + "Compruebo que paisajeUno.objetos contiene valor \"árbol\"")
if(!(paisajeUno.objetos.indexOf("sol") !== -1)) throw new Error("Error en fichero [-] en posición [461-511=11:53-12:50] cuando: " + "Compruebo que paisajeUno.objetos contiene valor \"sol\"")
if(!(paisajeUno.objetos.indexOf("mar") !== -1)) throw new Error("Error en fichero [-] en posición [512-562=12:51-13:50] cuando: " + "Compruebo que paisajeUno.objetos contiene valor \"mar\"")
if(!(paisajeUno.objetos.indexOf("montaña") !== -1)) throw new Error("Error en fichero [-] en posición [563-617=13:51-14:54] cuando: " + "Compruebo que paisajeUno.objetos contiene valor \"montaña\"")
if(!(paisajeUno.objetos.indexOf("nubes") !== -1)) throw new Error("Error en fichero [-] en posición [618-670=14:55-15:52] cuando: " + "Compruebo que paisajeUno.objetos contiene valor \"nubes\"")
if(!(paisajeDos.objetos.indexOf("edificios") !== -1)) throw new Error("Error en fichero [-] en posición [671-728=15:53-17:56] cuando: " + "Compruebo que paisajeDos.objetos contiene valor \"edificios\"")
if(!(paisajeDos.objetos.indexOf("calles") !== -1)) throw new Error("Error en fichero [-] en posición [729-782=17:57-18:53] cuando: " + "Compruebo que paisajeDos.objetos contiene valor \"calles\"")
if(!(paisajeDos.objetos.indexOf("personas") !== -1)) throw new Error("Error en fichero [-] en posición [783-838=18:54-19:55] cuando: " + "Compruebo que paisajeDos.objetos contiene valor \"personas\"")
if(!(paisajeDos.objetos.indexOf("sol") !== -1)) throw new Error("Error en fichero [-] en posición [839-889=19:56-20:50] cuando: " + "Compruebo que paisajeDos.objetos contiene valor \"sol\"")
if(!(paisajeDos.objetos.indexOf("nubes") !== -1)) throw new Error("Error en fichero [-] en posición [890-942=20:51-21:52] cuando: " + "Compruebo que paisajeDos.objetos contiene valor \"nubes\"")