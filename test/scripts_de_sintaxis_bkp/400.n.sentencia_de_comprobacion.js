const msg = "Hola!";
if(!(msg === "Hola!")) throw new Error("Error en [22-62=1:23-3:39] cuando: " + "Compruebo que msg es igual que \"Hola!\"")
if(!(msg === "Hola!")) throw "La variable msg no es igual que 'Hola!'"