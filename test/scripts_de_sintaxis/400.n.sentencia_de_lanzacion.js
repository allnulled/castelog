
let x = 1;
try {
throw "un error";
} catch(error) {
x = 2;}
if(!(x === 2)) throw new Error("Error en fichero [-] en posición [105-137=8:3-10:31] cuando: " + "Compruebo que x es igual que 2");