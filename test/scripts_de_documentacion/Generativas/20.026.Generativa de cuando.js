
let x = 10;
let y = 20;
let z = x + y;
if(!((x === 10 ? z === 30 : z === 20))) throw new Error("Error en fichero [-] en posición [77-175=3:28-6:28] cuando: " + "Compruebo que cuando x es igual que 10\n    entonces z es igual que 30\n    si no z es igual que 20")