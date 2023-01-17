
let x = 100;
setTimeout(() => {x = 200;},2 * 1000);
if(!(x === 100)) throw new Error("Error en fichero [-] en posición [80-113=2:55-3:33] cuando: " + "Compruebo que x es igual que 100")
setTimeout(() => {if(!(x === 200)) throw new Error("Error en fichero [-] en posición [151-183=4:37-4:69] cuando: " + "compruebo que x es igual que 200")},3 * 1000);