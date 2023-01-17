Castelog.metodos.un_testeo = function (tiempo, nombre_de_testeo, nombres_de_tests, en_exito, en_error) {
    try {
        if(typeof tiempo !== "number") {
            throw new Error("Required parameter «tiempo» to be a number in order to «Castelog.metodos.un_testeo»");
        }
        if(!Array.isArray(nombres_de_tests)) {
            throw new Error("Required parameter «nombres_de_tests» to be an array in order to «Castelog.metodos.un_testeo»");
        }
        if(nombres_de_tests.length === 0) {
            throw new Error("Required parameter «nombres_de_tests» to be an array with 1 or more items in order to «Castelog.metodos.un_testeo»");
        }
        if (typeof en_exito === "undefined") {
            // OK
        } else if (typeof en_exito !== "function") {
            throw new Error("Required parameter «en_exito» to be a function or undefined in order to «Castelog.metodos.un_testeo»");
        }
        if(typeof en_error === "undefined") {
            // OK
        } else if(typeof en_error !== "function") {
            throw new Error("Required parameter «en_error» to be a function or undefined in order to «Castelog.metodos.un_testeo»");
        }
        const entorno_de_testeo = new Castelog.variables.Entorno_de_testeo({
            tests_planificados: nombres_de_tests,
            tests_completados: [],
            tests_fallidos: [],
            tiempo_maximo_de_testeo: tiempo,
            estado_del_testeo: "pendiente", // "completado", "fallido"
            en_error: en_error ? en_error : (error) => {
                console.log("El testeo «" + nombre_de_testeo + "» falló con el siguiente error:", error);
            },
            en_exito: en_exito ? en_exito : () => {
                console.log("El testeo «" + nombre_de_testeo + "» se completó satisfactoriamente.");
            },
        });
        entorno_de_testeo.id_de_temporizador = setTimeout(() => {
            // console.log(200);
            const tests_no_completados = [];
            for(let index = 0; index < entorno_de_testeo.tests_planificados.length; index++) {
                // console.log(201);
                const nombre_de_test = entorno_de_testeo.tests_planificados[index];
                if(entorno_de_testeo.tests_completados.indexOf(nombre_de_test) === -1) {
                    // console.log(202);
                    tests_no_completados.push(nombre_de_test);
                }
            }
            if(entorno_de_testeo.estado_del_testeo === "pendiente") {
                // console.log(203);
                entorno_de_testeo.estado_del_testeo = "fallido";
                const mensaje_del_error = "El testeo «" + nombre_de_testeo + "» no completó en el tiempo estipulado («" + (tiempo/1000) + " segundos») los siguientes (" + tests_no_completados.length + ") tests: " + tests_no_completados.map(t => `«${t}»`).join(", ");
                const error = new Error(mensaje_del_error);
                if(typeof entorno_de_testeo.en_error === "function") {
                    // console.log(204);
                    entorno_de_testeo.en_error(error);
                } else {
                    // console.log(205);
                    console.log(error);
                    throw error;
                }
            }
        }, tiempo);
        return entorno_de_testeo;
    } catch (error) {
        throw error;
    }
};