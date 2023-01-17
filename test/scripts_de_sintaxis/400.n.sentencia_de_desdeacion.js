
let semaforo1 = 0;
let semaforo2 = 0;
let semaforo3 = 0;
let semaforo4 = 0;
for(let index = 0; index < 10; index++) {semaforo1 += 1;}
for(let indice = 0; indice < 10; indice++) {semaforo2 += 2;}
for(let index = 0; index < 10; index++) {semaforo3 += 1;}
for(let indice = 0; indice < 10; indice++) {semaforo4 += 2;}
if(!(semaforo1 === 10)) throw new Error("Error en fichero [-] en posición [405-468=13:63-17:40] cuando: " + "# Los tests finales:\n\nCompruebo que semaforo1 es igual que 10");
if(!(semaforo2 === 20)) throw new Error("Error en fichero [-] en posición [469-509=17:41-18:40] cuando: " + "Compruebo que semaforo2 es igual que 20");
if(!(semaforo3 === 10)) throw new Error("Error en fichero [-] en posición [510-550=18:41-19:40] cuando: " + "Compruebo que semaforo3 es igual que 10");
if(!(semaforo4 === 20)) throw new Error("Error en fichero [-] en posición [551-591=19:41-20:40] cuando: " + "Compruebo que semaforo4 es igual que 20");