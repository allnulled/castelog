
module.exports = function() {return new Promise((ok, fallo) => {
setTimeout(() => {return ok(600);},0.1 * 1000);});}