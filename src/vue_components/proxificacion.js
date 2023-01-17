(() => {


  const Constantes_del_sistema_reactivo = {
    funcion_que_genera_funcion_para_agregar_hook: function (proxy, tipo) {
      return function (hook, parametros = {}) {
        if (typeof hook !== "function") {
          throw new Error(`Required parameter «hook» to be a function in order to «proxificacion.$eventos_de_proxy.una_intervencion("agregar", "${tipo}")»`);
        }
        if (typeof parametros !== "object") {
          throw new Error(`Required parameter «parametros» to be an object in order to «proxificacion.$eventos_de_proxy.una_intervencion("agregar", "${tipo}")»`);
        }
        const propiedaz = tipo + "s";
        proxy.$eventos_de_proxy.para[propiedaz].push({ hook, parametros });
        proxy.$eventos_de_proxy.para[propiedaz] = proxy.$eventos_de_proxy.para[propiedaz].sort(Constantes_del_sistema_reactivo.function_que_ordena_por_orden);
        return hook;
      };
    },
    funcion_que_genera_funcion_para_eliminar_hook: function (proxy, tipo) {
      return function (hook) {
        if (typeof hook !== "function") {
          throw new Error(`Required parameter «hook» to be a function in order to «proxificacion.$eventos_de_proxy.una_intervencion("eliminar", "${tipo}")»`);
        }
        const propiedaz = tipo + "s";
        const [indice_a_quitar] = proxy.$eventos_de_proxy.para[propiedaz].reduce(output, (output, item, index) => {
          if (item.hook === hook) {
            output.push(index);
          }
          return output;
        }, []);
        return proxy.$eventos_de_proxy.para[propiedaz].splice(indice_a_quitar, 1);
      };
    },
    funcion_que_genera_funcion_para_cambiar_hook: function (proxy, tipo) {
      return function (hook, hook_2, parametros = {}) {
        if (typeof hook !== "function") {
          throw new Error(`Required parameter «hook» to be a function in order to «proxificacion.$eventos_de_proxy.una_intervencion("cambiar", "${tipo}")»`);
        }
        const propiedaz = tipo + "s";
        const [indice_a_quitar] = proxy.$eventos_de_proxy.para[propiedaz].reduce((output, item, index) => {
          if (item.hook === hook) {
            output.push(index);
          }
          return output;
        }, []);
        if (typeof indice_a_quitar === "undefined") {
          throw new Error(`Required parameter «hook» to be an already added hook function in order to «proxificacion.$eventos_de_proxy.una_intervencion("cambiar", "${tipo}")»`)
        }
        const nuevo_hook = {
          hook: hook_2,
          parametros: Object.assign({}, proxy.$eventos_de_proxy.para[propiedaz][indice_a_quitar].parametros, parametros)
        };
        proxy.$eventos_de_proxy.para[propiedaz].splice(indice_a_quitar, 1, nuevo_hook);
        proxy.$eventos_de_proxy.para[propiedaz] = proxy.$eventos_de_proxy.para[propiedaz].sort(Constantes_del_sistema_reactivo.function_que_ordena_por_orden);
        return hook_2;
      };
    },
    funcion_que_genera_funcion_para_usar_hook: function (proxy, tipo) {
      return function (...argumentos) {
        try {
          console.log(argumentos);
          const propiedaz = tipo + "s";
          const eventos_de_proxy = proxy.$eventos_de_proxy.para[propiedaz];
          let resultado = undefined;
          for (let index = 0; index < eventos_de_proxy.length; index++) {
            (hook => {
              const salida = hook.hook.call(proxy, {
                proxy,
                resultado,
                argumentos,
                index,
                hook,
                parametros,
                hook
              });
              if(typeof salida !== "undefined") {
                resultado = salida;
              }
            })(eventos_de_proxy[index]);
          }
          return resultado;
        } catch (error) {
          throw error;
        }
      };
    },
    funcion_que_ordena_por_orden: function (a_origen, b_origen) {
      if (typeof b_origen !== "object") {
        return -1;
      }
      if (typeof a_origen !== "object") {
        return 1;
      }
      const b = b_origen.parametros;
      const a = a_origen.parametros;
      if (typeof b.orden !== "number") {
        return -1;
      }
      if (typeof a.orden !== "number") {
        return 1;
      }
      return b.orden < a.orden ? 1 : -1;
    }
  };

  class Sistema_reactivo {
    static get constantes() { return Constantes_del_sistema_reactivo }
    constructor(obj = {}) {
      const proxy = new Proxy(obj, {
        get: (...args) => {
          const [dato, clave] = args;
          if (clave.startsWith("$")) {
            return dato[clave];
          }
          console.log("get", args);
          return proxy.$eventos_de_proxy.una_intervencion("usar", "getter").con(dato, clave);
        },
        set: (...args) => {
          const [dato, clave, valor] = args;
          if (clave.startsWith("$")) {
            dato[clave] = valor;
            return dato[clave];
          }
          console.log("set", args);
          return proxy.$eventos_de_proxy.una_intervencion("usar", "setter").con(dato, clave, valor);
        },
        apply: (...args) => {
          const [dato, clave, parametros] = args;
          if (prop.startsWith("$")) {
            return dato[clave](...parametros);
          }
          console.log("apply", args);
          return proxy.$eventos_de_proxy.una_intervencion("usar", "caller").con(dato, clave, parametros);
        }
      });
      obj.$eventos_de_proxy = {
        una_intervencion: function (accion, tipo) {
          const es_accion_valida = ["agregar", "eliminar", "cambiar", "usar"].indexOf(accion) !== -1;
          const es_tipo_valido = ["getter", "setter", "caller"].indexOf(tipo) !== -1;
          if (!es_accion_valida) throw new Error("Required parameter «accion» to be a valid action (agregar, eliminar, cambiar, usar) in order to «proxy.$eventos_de_proxy.una_intervencion»");
          if (!es_tipo_valido) throw new Error("Required parameter «tipo» to be a valid type (getter, setter, caller) in order to «proxy.$eventos_de_proxy.una_intervencion»");
          if (accion === "agregar") {
            return {
              con: Sistema_reactivo.constantes.funcion_que_genera_funcion_para_agregar_hook(proxy, tipo)
            };
          } else if (accion === "eliminar") {
            return {
              con: Sistema_reactivo.constantes.funcion_que_genera_funcion_para_eliminar_hook(proxy, tipo)
            };
          } else if (accion === "cambiar") {
            return {
              con: Sistema_reactivo.constantes.funcion_que_genera_funcion_para_cambiar_hook(proxy, tipo)
            };
          } else if (accion === "usar") {
            return {
              con: Sistema_reactivo.constantes.funcion_que_genera_funcion_para_usar_hook(proxy, tipo)
            };
          }
          throw new Error("Required parameter «accion» to be a valid action (agregar, eliminar, cambiar, usar) in order to «proxy.$eventos_de_proxy.una_intervencion»");
        },
        para: {
          getters: [],
          setters: [],
          callers: [],
        }
      };
      return {
        proxy,
        dato: obj
      };
    }
  }

  const { proxy, dato: yo } = new Sistema_reactivo({
    saludar: function () { console.log("Saludos, terricola!") }
  });
  console.log(yo);
  console.log(yo);
  console.log("OKKKKKKKKKKK");
  const sistema_reactivo_por_defecto = yo;
  const una_intervencion_acceso_a_name = sistema_reactivo_por_defecto
    .$eventos_de_proxy
    .una_intervencion("agregar", "getter")
    .con(function (dato, clave, indice, resultado) {
      if (clave === "name") {
        return 0;
      }
    });
  const una_intervencion_acceso_encontrado = sistema_reactivo_por_defecto
    .$eventos_de_proxy
    .una_intervencion("agregar", "getter")
    .con(function (dato, clave, indice, resultado) {
      console.log(dato, clave, indice, resultado);
      if (typeof resultado === "undefined") {
        if (clave in dato) {
          return dato[clave];
        }
        return "error 404: not found";
      }
    });
  console.log(yo.name);
  console.log(yo.age);
  const una_intervencion_acceso_encontrado_2 = sistema_reactivo_por_defecto
    .$eventos_de_proxy
    .una_intervencion("cambiar", "getter")
    .con(una_intervencion_acceso_encontrado, function (resultado, dato, clave) {
      if (typeof resultado === "undefined") {
        if (clave in dato) {
          return dato[clave];
        }
        return "error 404: propiedad no encontrada";
      }
    });
  console.log(yo.name);
  console.log(yo.age);
  const una_intervencion_acceso_encontrado_3 = sistema_reactivo_por_defecto
    .$eventos_de_proxy
    .una_intervencion("cambiar", "getter")
    .con(una_intervencion_acceso_encontrado_2, function (resultado, dato, clave) {
      if (typeof resultado === "undefined") {
        if (clave in dato) {
          return dato[clave];
        }
        return "error 404: propiedad no encontrada";
      }
    });

  const salida = sistema_reactivo_por_defecto
    .$eventos_de_proxy
    .una_intervencion("agregar", "caller")
    .con(function caller_uno (...args) {
      console.log("Alguien saluda");
    });

  const { dato: dato2 } = salida;

  yo.saludar = dato2;

  console.log(dato2);

  const { dato: dato3 } = sistema_reactivo_por_defecto
    .$eventos_de_proxy
    .una_intervencion("agregar", "caller")
    .con(function caller_dos (...args) {
      console.log("El eco del saludo");
    });

  yo.saludar = dato3;

  yo.street = "Otra calle";

  yo.saludar();
  yo.saludar();
  yo.saludar();
  yo.saludar();
  yo.saludar();

})()