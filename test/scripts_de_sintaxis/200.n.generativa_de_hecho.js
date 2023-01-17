
const x = ( async () => {
try {return 100;} catch(error) {
return 0;}})().then( function( resultado ) {if(!(typeof resultado === 'number' && resultado === 100)) throw new Error("Error en fichero [-] en posición [137-204=6:5-6:72] cuando: " + "Compruebo que resultado es tipo número y resultado es igual que 100");
} );