
Castelog.metodos.un_diagrama_de_dependencias(async (dependencias) => {
  try {
    Castelog.metodos.defino_dependencia_de_paquete(dependencias, Object.assign({}, {
      llamado: fs,
      ruta: "fs",
      cual: null,
      valida: null,
      tiene: null,
      codifica: null,
      testea: null,
      exporta: null,
      describe: null,
      asigna: null,
      crea: null,
      errores: null,
      equivale: null
    }, {
      asincrono: null,
      recibe: null,
      usa: null,
      consiste: [{
        nombre: "promises",
        tipo: "defino propiedad",
        informacion: Object.assign({}, {
          llamado: null,
          ruta: null,
          cual: null,
          valida: () => { if (!(typeof esto === 'object')) throw new Error("Error en fichero [-] en posición [194-227=5:17-5:50] cuando: " + "compruebo que esto es tipo objeto"); },
          tiene: null,
          codifica: null,
          testea: null,
          exporta: null,
          describe: null,
          asigna: null,
          crea: null,
          errores: null,
          equivale: null
        }, {
          asincrono: null,
          recibe: null,
          usa: null,
          consiste: null,
          retorna: null
        }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
          componentes: null,
          construccion: null,
          estilos: null
        }, {
          rutas: null,
          traducciones: null
        })
      }, {
        nombre: "readFileSync",
        tipo: "defino método",
        informacion: Object.assign({}, {
          llamado: null,
          ruta: null,
          cual: null,
          valida: () => { if (!(typeof esto === 'function')) throw new Error("Error en fichero [-] en posición [341-375=10:17-10:51] cuando: " + "compruebo que esto es tipo función"); },
          tiene: null,
          codifica: null,
          testea: null,
          exporta: null,
          describe: null,
          asigna: null,
          crea: null,
          errores: null,
          equivale: null
        }, {
          asincrono: null,
          recibe: null,
          usa: null,
          consiste: null,
          retorna: null
        }, [{
          modalidad: "por defecto",
          ...Object.assign({}, {
            llamado: null,
            ruta: null,
            cual: null,
            valida: null,
            tiene: null,
            codifica: null,
            testea: null,
            exporta: null,
            describe: null,
            asigna: null,
            crea: null,
            errores: null,
            equivale: null
          }, {
            asincrono: null,
            recibe: null,
            usa: null,
            consiste: [{
              nombre: "x",
              tipo: "defino propiedad",
              informacion: Object.assign({}, {
                llamado: null,
                ruta: null,
                cual: null,
                valida: null,
                tiene: null,
                codifica: null,
                testea: null,
                exporta: null,
                describe: null,
                asigna: null,
                crea: null,
                errores: null,
                equivale: null
              }, {
                asincrono: null,
                recibe: null,
                usa: null,
                consiste: null,
                retorna: null
              }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                componentes: null,
                construccion: null,
                estilos: null
              }, {
                rutas: null,
                traducciones: null
              })
            }],
            retorna: null
          })
        }, {
          modalidad: "una_cosa",
          ...Object.assign({}, {
            llamado: null,
            ruta: null,
            cual: null,
            valida: null,
            tiene: null,
            codifica: null,
            testea: null,
            exporta: null,
            describe: null,
            asigna: null,
            crea: null,
            errores: null,
            equivale: null
          }, {
            asincrono: null,
            recibe: null,
            usa: null,
            consiste: null,
            retorna: null
          })
        }, {
          modalidad: "otra_cosa",
          ...Object.assign({}, {
            llamado: null,
            ruta: null,
            cual: null,
            valida: null,
            tiene: null,
            codifica: null,
            testea: null,
            exporta: null,
            describe: null,
            asigna: null,
            crea: null,
            errores: null,
            equivale: null
          }, {
            asincrono: null,
            recibe: null,
            usa: null,
            consiste: null,
            retorna: null
          })
        }].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
          componentes: null,
          construccion: null,
          estilos: null
        }, {
          rutas: null,
          traducciones: null
        })
      }],
      retorna: null
    }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {})));
    Castelog.metodos.defino_dependencia_de_paquete(dependencias, Object.assign({}, {
      llamado: path,
      ruta: "path",
      cual: null,
      valida: null,
      tiene: null,
      codifica: null,
      testea: null,
      exporta: null,
      describe: null,
      asigna: null,
      crea: null,
      errores: null,
      equivale: null
    }, {
      asincrono: null,
      recibe: null,
      usa: null,
      consiste: [{
        nombre: "resolve",
        tipo: "defino método",
        informacion: Object.assign({}, {
          llamado: null,
          ruta: null,
          cual: null,
          valida: () => { if (!(typeof esto === 'function')) throw new Error("Error en fichero [-] en posición [860-894=28:17-28:51] cuando: " + "compruebo que esto es tipo función"); },
          tiene: null,
          codifica: null,
          testea: null,
          exporta: null,
          describe: null,
          asigna: null,
          crea: null,
          errores: null,
          equivale: null
        }, {
          asincrono: null,
          recibe: null,
          usa: null,
          consiste: null,
          retorna: null
        }, [{
          modalidad: "por defecto",
          ...Object.assign({}, {
            llamado: null,
            ruta: null,
            cual: null,
            valida: null,
            tiene: null,
            codifica: null,
            testea: null,
            exporta: null,
            describe: null,
            asigna: null,
            crea: null,
            errores: null,
            equivale: null
          }, {
            asincrono: null,
            recibe: null,
            usa: null,
            consiste: [{
              nodo_de_tipo: "paso",
              numero: "1.",
              paso: "organizar parámetros",
              ...(Object.assign({}, {
                llamado: null,
                ruta: null,
                cual: null,
                valida: null,
                tiene: null,
                codifica: null,
                testea: null,
                exporta: null,
                describe: null,
                asigna: null,
                crea: null,
                errores: null,
                equivale: null
              }, {
                asincrono: null,
                recibe: [{
                  nombre: "x",
                  tipo: " (obligatorio)",
                  informacion: null
                }, {
                  nombre: "y",
                  tipo: " (opcional)",
                  informacion: null
                }, {
                  nombre: "z",
                  tipo: null,
                  informacion: null
                }],
                usa: null,
                consiste: [{
                  nodo_de_tipo: "paso",
                  numero: "1.1.",
                  paso: "validar parámetro de entrada x",
                  ...(Object.assign({}, {
                    llamado: null,
                    ruta: null,
                    cual: null,
                    valida: null,
                    tiene: null,
                    codifica: null,
                    testea: null,
                    exporta: null,
                    describe: null,
                    asigna: null,
                    crea: null,
                    errores: null,
                    equivale: null
                  }, {
                    asincrono: null,
                    recibe: null,
                    usa: null,
                    consiste: null,
                    retorna: null
                  }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                    componentes: null,
                    construccion: null,
                    estilos: null
                  }, {
                    rutas: null,
                    traducciones: null
                  }))
                }, {
                  nodo_de_tipo: "paso",
                  numero: "1.2.",
                  paso: "validar parámetro de entrada y",
                  ...(Object.assign({}, {
                    llamado: null,
                    ruta: null,
                    cual: null,
                    valida: null,
                    tiene: null,
                    codifica: null,
                    testea: null,
                    exporta: null,
                    describe: null,
                    asigna: null,
                    crea: null,
                    errores: null,
                    equivale: null
                  }, {
                    asincrono: null,
                    recibe: null,
                    usa: null,
                    consiste: null,
                    retorna: null
                  }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                    componentes: null,
                    construccion: null,
                    estilos: null
                  }, {
                    rutas: null,
                    traducciones: null
                  }))
                }, {
                  nodo_de_tipo: "paso",
                  numero: "1.3.",
                  paso: "validar parámetro de entrada z",
                  ...(Object.assign({}, {
                    llamado: null,
                    ruta: null,
                    cual: null,
                    valida: null,
                    tiene: null,
                    codifica: null,
                    testea: null,
                    exporta: null,
                    describe: null,
                    asigna: null,
                    crea: null,
                    errores: null,
                    equivale: null
                  }, {
                    asincrono: null,
                    recibe: null,
                    usa: null,
                    consiste: null,
                    retorna: null
                  }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                    componentes: null,
                    construccion: null,
                    estilos: null
                  }, {
                    rutas: null,
                    traducciones: null
                  }))
                }],
                retorna: [{
                  nombre: "x",
                  tipo: "defino propiedad",
                  informacion: Object.assign({}, {
                    llamado: null,
                    ruta: null,
                    cual: null,
                    valida: null,
                    tiene: null,
                    codifica: null,
                    testea: null,
                    exporta: null,
                    describe: null,
                    asigna: null,
                    crea: null,
                    errores: null,
                    equivale: null
                  }, {
                    asincrono: null,
                    recibe: null,
                    usa: null,
                    consiste: null,
                    retorna: null
                  }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                    componentes: null,
                    construccion: null,
                    estilos: null
                  }, {
                    rutas: null,
                    traducciones: null
                  })
                }, {
                  nombre: "y",
                  tipo: "defino propiedad",
                  informacion: Object.assign({}, {
                    llamado: null,
                    ruta: null,
                    cual: null,
                    valida: null,
                    tiene: null,
                    codifica: null,
                    testea: null,
                    exporta: null,
                    describe: null,
                    asigna: null,
                    crea: null,
                    errores: null,
                    equivale: null
                  }, {
                    asincrono: null,
                    recibe: null,
                    usa: null,
                    consiste: null,
                    retorna: null
                  }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                    componentes: null,
                    construccion: null,
                    estilos: null
                  }, {
                    rutas: null,
                    traducciones: null
                  })
                }, {
                  nombre: "z",
                  tipo: "defino propiedad",
                  informacion: Object.assign({}, {
                    llamado: null,
                    ruta: null,
                    cual: null,
                    valida: null,
                    tiene: null,
                    codifica: null,
                    testea: null,
                    exporta: null,
                    describe: null,
                    asigna: null,
                    crea: null,
                    errores: null,
                    equivale: null
                  }, {
                    asincrono: null,
                    recibe: null,
                    usa: null,
                    consiste: null,
                    retorna: null
                  }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                    componentes: null,
                    construccion: null,
                    estilos: null
                  }, {
                    rutas: null,
                    traducciones: null
                  })
                }, {
                  nombre: "compute",
                  tipo: "defino método",
                  informacion: Object.assign({}, {
                    llamado: null,
                    ruta: null,
                    cual: null,
                    valida: null,
                    tiene: null,
                    codifica: null,
                    testea: null,
                    exporta: null,
                    describe: null,
                    asigna: null,
                    crea: null,
                    errores: null,
                    equivale: null
                  }, {
                    asincrono: null,
                    recibe: null,
                    usa: null,
                    consiste: null,
                    retorna: null
                  }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                    componentes: null,
                    construccion: null,
                    estilos: null
                  }, {
                    rutas: null,
                    traducciones: null
                  })
                }]
              }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                componentes: null,
                construccion: null,
                estilos: null
              }, {
                rutas: null,
                traducciones: null
              }))
            }, {
              nodo_de_tipo: "paso",
              numero: "2.",
              paso: "validar parámetros",
              ...(Object.assign({}, {
                llamado: null,
                ruta: null,
                cual: null,
                valida: null,
                tiene: null,
                codifica: null,
                testea: null,
                exporta: null,
                describe: null,
                asigna: null,
                crea: null,
                errores: null,
                equivale: null
              }, {
                asincrono: null,
                recibe: [],
                usa: null,
                consiste: [],
                retorna: []
              }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
                componentes: null,
                construccion: null,
                estilos: null
              }, {
                rutas: null,
                traducciones: null
              }))
            }],
            retorna: null
          })
        }].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {}), {
          componentes: null,
          construccion: null,
          estilos: null
        }, {
          rutas: null,
          traducciones: null
        })
      }],
      retorna: null
    }, [].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {})));
  } catch (error) {
    throw error;
  }
}, null);
console.log("OK!");