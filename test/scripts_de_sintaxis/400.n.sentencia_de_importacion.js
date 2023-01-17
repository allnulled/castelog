
const texto = require(__dirname + "/../texto.js");
if(!(texto === "Esto es un texto de ejemplo.")) throw new Error("Error en fichero [-] en posición [144-209=3:79-5:64] cuando: " + "Compruebo que texto es igual que \"Esto es un texto de ejemplo.\"");