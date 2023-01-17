const x = (async () => {
try {{(await Castelog.metodos.generativa_de_espera(ok => { try { {}}catch(error) {
} }, 5 * 1000));
console.log("Esperado 1 segundo");
(await Castelog.metodos.generativa_de_espera(ok => {  }, 2000 * 1));
console.log("Esperados 2 segundos más");
return 100;}} catch(error) {
return 0;}})();