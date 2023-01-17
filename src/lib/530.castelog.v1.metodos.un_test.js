Castelog.metodos.un_test = function(nombre_de_test, funcion_de_test, objeto_de_testeo, en_exito, en_error) {
    try {
        if(typeof nombre_de_test !== "string") {
            throw new Error("Required parameter «nombre_de_test» to be a string in order to «Castelog.metodos.un_test»");
        }
        if(typeof funcion_de_test !== "function") {
            throw new Error("Required parameter «funcion_de_test» to be a function in order to «Castelog.metodos.un_test»");
        }
        if(typeof en_exito === "undefined") {
            // OK
        } else if(typeof en_exito !== "function") {
            throw new Error("Required parameter «en_exito» to be a function or undefined in order to «Castelog.metodos.un_test»");
        }
        if(typeof en_error === "undefined") {
            // OK
        } else if(typeof en_error !== "function") {
            throw new Error("Required parameter «en_error» to be a function or undefined in order to «Castelog.metodos.un_test»");
        }
        if(typeof objeto_de_testeo === "undefined") {
            // OK
        } else if(!(objeto_de_testeo instanceof Castelog.variables.Entorno_de_testeo)) {
            throw new Error("Required parameter «objeto_de_testeo» to be an object or undefined in order to «Castelog.metodos.un_test»")
        }
        try {
            // console.log(100);
            const resultado_de_test = funcion_de_test(objeto_de_testeo, nombre_de_test);
            if(!(resultado_de_test instanceof Promise)) {
                throw new Error("Required parameter «funcion_de_test» to be a function that returns a Promise in order to «Castelog.metodos.un_test»");
            }
            // console.log(101);
            return resultado_de_test.then(resultado_final_de_test => {
                // console.log(102);
                let es_ultimo_test = true;
                if(typeof objeto_de_testeo === "object") {
                    // console.log(103);
                    objeto_de_testeo.tests_completados.push(nombre_de_test);
                    EsUltimoTest:
                    for (let index = 0; index < objeto_de_testeo.tests_planificados.length; index++) {
                        // console.log(104);
                        const nombre_de_test_planificado = objeto_de_testeo.tests_planificados[index];
                        if (objeto_de_testeo.tests_completados.indexOf(nombre_de_test_planificado) === -1) {
                            // console.log(105);
                            es_ultimo_test = false;
                            break EsUltimoTest;
                        }
                    }
                    if(es_ultimo_test) {
                        // console.log(106);
                        objeto_de_testeo.estado_del_testeo = "completado";
                        clearTimeout(objeto_de_testeo.id_de_temporizador);
                    }
                }
                if(typeof en_exito === "function") {
                    // console.log(107);
                    en_exito(resultado_final_de_test, objeto_de_testeo);
                }
                if((typeof objeto_de_testeo === "object") && (typeof objeto_de_testeo.en_exito === "function")) {
                    // console.log(108);
                    if (es_ultimo_test) {
                        // console.log(109);
                        if (typeof objeto_de_testeo.en_exito === "function") {
                            // console.log(110);
                            objeto_de_testeo.en_exito(objeto_de_testeo, nombre_de_test, resultado_final_de_test);
                        }
                    }
                }
                return resultado_final_de_test;
            }).catch(error => {
                // console.log(120);
                if (typeof objeto_de_testeo === "object") {
                    // console.log(121);
                    clearTimeout(objeto_de_testeo.id_de_temporizador);
                    objeto_de_testeo.estado_del_testeo = "fallido";
                    objeto_de_testeo.tests_fallidos.push(nombre_de_test);
                }
                if(typeof en_error === "function") {
                    // console.log(122);
                    en_error(error, objeto_de_testeo);
                } else {
                    // console.log(123);
                    console.log("Error en test «" + nombre_de_test + "»:", error);
                }
                if(typeof objeto_de_testeo === "object") {
                    // console.log(124);
                    if (typeof objeto_de_testeo.en_error === "function") {
                        // console.log(125);
                        objeto_de_testeo.en_error(error, objeto_de_testeo, nombre_de_test);
                    }
                }
            });
        } catch(error) {
            // console.log(150);
            if (typeof objeto_de_testeo === "object") {
                // console.log(151);
                clearTimeout(objeto_de_testeo.id_de_temporizador);
                objeto_de_testeo.estado_del_testeo = "fallido";
                objeto_de_testeo.tests_fallidos.push(nombre_de_test);
            }
            if (typeof en_error === "function") {
                // console.log(152);
                en_error(error, objeto_de_testeo);
            } else {
                // console.log(153);
                console.log("Error en test «" + nombre_de_test + "»:", error);
            }
            if (typeof objeto_de_testeo === "object") {
                // console.log(154);
                if (typeof objeto_de_testeo.en_error === "function") {
                    // console.log(155);
                    objeto_de_testeo.en_error(error, nombre_de_test, objeto_de_testeo);
                }
            }
        }
    } catch (error) {
        throw error;
    }
};