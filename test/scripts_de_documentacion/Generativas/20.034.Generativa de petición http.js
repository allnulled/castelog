
(async () => {
console.log((await Castelog.metodos.una_peticion_http("localhost", "GET", "", {}, null, (error) => {
return 500;})));})();