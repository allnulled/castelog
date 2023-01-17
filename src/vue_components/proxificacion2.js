(() => {

  

  const original1 = {
    name: "Carl",
    surname: "Carlson",
    age: 32,
    ciry: "Bonastre"
  };
  const [proxy1, dato1] = new Proxificacion(original1);
  console.log(proxy1);
  console.log(dato1);

  dato1.$proxy_api.insertar("get", function (...args) {
    console.log("GET 1");
  });
  dato1.$proxy_api.insertar("get", function (...args) {
    console.log("GET 2");
  });
  dato1.$proxy_api.insertar("get", function (...args) {
    console.log("GET 3");
    console.log(args);
  });
  dato1.$proxy_api.insertar("get", function (evento) {
    const { dato, clave, ambito, parametros, hecho } = evento;
    console.log("GET 4");
    console.log("Se está accediendo a propiedad «" + clave + "» del objeto «" + JSON.stringify(dato, null, 2) + "»");
    return hecho(dato[clave]);
  });
  dato1.$proxy_api.insertar("set", function (evento) {
    const { dato, clave, valor, ambito, parametros, hecho} = evento;
    console.log("SET 5");
    console.log("Se está modificando a propiedad «" + clave + "» del objeto «" + JSON.stringify(dato, null, 2) + "» con valor «" + JSON.stringify(valor, null, 2) + "»");
    dato[clave] = valor;
    return hecho(dato[clave]);
  });
  const [proxy2, dato2] = new Proxificacion(function () {
    console.log("El proxy dice: Hola!");
  });

  dato2.$proxy_api.insertar("call", function(evento) {
    console.log("Hook de función mediante proxy");
    console.log(evento);
  });

  dato2.$proxy_api.insertar("call", function (evento) {
    console.log("Hook de función mediante proxy");
    console.log(evento);
  });

  dato2.$proxy_api.insertar("call", function (evento) {
    console.log("Hook de función mediante proxy");
    console.log(evento);
    const { argumentos, dato, hecho } = evento;
    const salida = argumentos.reduce((out, item) => {
      out += item;
      return out;
    }, 0);
    console.log("El proxy está saludando????");
    dato(...argumentos);
    console.log("Y la salida es:" + salida);
    return hecho(salida);
  });

  dato1.saludar = proxy2;

  console.log(dato1.name);

  dato1.age = 18;

  console.log(dato1.age);

  dato1.saludar(8,16,32);


})()