
const testeo_de_otras_cosas = Castelog.metodos.un_testeo(5 * 1000, "Testeo de varias cosas", [ "Test de otra cosa 1",
"Test de otra cosa 2",
"Test de otra cosa 3" ], undefined, undefined);
( async () => {
(await Castelog.metodos.un_test("Test de otra cosa 1", async () => {
if(!(true === true)) throw new Error("Error en fichero [-] en posición [379-415=10:9-10:45] cuando: " + "compruebo que true es igual que true");
}, testeo_de_otras_cosas, undefined, undefined));
(await Castelog.metodos.un_test("Test de otra cosa 2", async () => {
if(!(true === true)) throw new Error("Error en fichero [-] en posición [536-572=13:9-13:45] cuando: " + "compruebo que true es igual que true");
}, testeo_de_otras_cosas, undefined, undefined));
(await Castelog.metodos.un_test("Test de otra cosa 3", async () => {
if(!(true === true)) throw new Error("Error en fichero [-] en posición [693-729=16:9-16:45] cuando: " + "compruebo que true es igual que true");
}, testeo_de_otras_cosas, undefined, undefined));})();
const testeo_de_varias_cosas = Castelog.metodos.un_testeo(5 * 1000, "Testeo de varias cosas", [ "Test de cosa 1",
"Test de cosa 2",
"Test de cosa 3" ], () => {console.log("testeo pasado");}, error => {
console.log("error en el testeo de varias cosas");});
( async () => {
(await Castelog.metodos.un_test("Test de cosa 1", async () => {
if(!(true === true)) throw new Error("Error en fichero [-] en posición [1288-1324=32:9-32:45] cuando: " + "compruebo que true es igual que true");
}, testeo_de_varias_cosas, () => {console.log("test de cosa 1 pasado exitosamente");}, error => {
console.log("error en el test de cosa 1");}));
(await Castelog.metodos.un_test("Test de cosa 2", async () => {
if(!(true === true)) throw new Error("Error en fichero [-] en posición [1577-1613=39:9-39:45] cuando: " + "compruebo que true es igual que true");
}, testeo_de_varias_cosas, () => {console.log("test de cosa 2 pasado exitosamente");}, error => {
console.log("error en el test de cosa 2");}));
(await Castelog.metodos.un_test("Test de cosa 3", async () => {
if(!(true === true)) throw new Error("Error en fichero [-] en posición [1866-1902=46:9-46:45] cuando: " + "compruebo que true es igual que true");
}, testeo_de_varias_cosas, () => {console.log("test de cosa 3 pasado exitosamente");}, error => {
console.log("error en el test de cosa 3");}));})();