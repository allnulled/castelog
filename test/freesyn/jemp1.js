const vm = require("vm");
const base = {
    console: {
        log: console.log.bind(console)
    }
};
const generate_proxy_handler = () => ({
    get: function(dato, clave) {
        if (!(clave in dato)) {
            console.log("Creando: " + clave);
            dato[clave] = Object.assign(new Proxy(function () { }, generate_proxy_handler()))
        }
        return dato[clave];
    }
});
const sandbox = Object.assign(new Proxy({}, generate_proxy_handler()), base);

const fn = function n() {
    carl.carlson.dice("HOLA!");
    console.log("OKKKKK!");
    carl.carlson.dice("HOLA!");
};

const fn_code = `(${fn.toString()})()`;
console.log(fn_code);
vm.runInContext(fn_code, vm.createContext(sandbox));