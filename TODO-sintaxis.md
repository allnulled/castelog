561.castelog.v1.metodos.un_mapeado_por.js
562.castelog.v1.metodos.un_filtrado_por.js
563.castelog.v1.metodos.un_reducido_por.js
564.castelog.v1.metodos.un_modificado_por.js
565.castelog.v1.metodos.un_iterado_por.js
566.castelog.v1.metodos.un_interpelado_por.js

Generativas:
una reducción asíncrona desde {} con (item, salida, clave, indice) donde {} en errores {} creando constante x.
una reducción asíncrona desde {} por z en errores {} creando constante x.

Apéndices:
reducido asíncronamente desde {} con (item, salida, clave, indice) donde {} en errores {} creando constante x.
reducido asíncronamente desde {} por z en errores {} creando constante x.

Sentencias:
reduzco asíncronamente [
    "https://www.worldwidethings.com",
    "https://www.worldwidethings2.com",
    "https://www.worldwidethings3.com",
    "https://www.worldwidethings4.com",
    "https://www.worldwidethings5.com"
] desde {} donde {
    asigno salida[ key ] como asíncronamente consulto_web(value).
} en errores imprimo error creando constante x.
reduzco asíncronamente [
    "https://www.worldwidethings.com",
    "https://www.worldwidethings2.com",
    "https://www.worldwidethings3.com",
    "https://www.worldwidethings4.com",
    "https://www.worldwidethings5.com"
] desde {} por z en errores imprimo error creando constante x.

6 sentencias x 6 modalidades cada sentencia = 36 sintaxis específicas
[ ] según {generativa} si esto es igual que x retorno z si esto es igual que w retorno 5
[ ] un introspector a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).set(globselector, 1000, true).
    [ ] un set by selector design pattern con selector como [] con value como 800 a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).set(globselector, 1000, true).
        [ ] hago Castelog.variables.Introspector.from(data).set(globselector, 1000).
    [ ] un get by selector design pattern con selector como [] con default como 800 a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).get(globselector, 500).
        [ ] hago Castelog.variables.Introspector.from(data).get(globselector).
    [ ] un has by selector design pattern con selector como [] con property como "ei" a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).has(globselector, {property:"ei"}).
    [ ] un has by selector design pattern con selector como [] con value como "ei" a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).has(globselector, {value:"ei"}).
    [ ] un can by selector design pattern con selector como [] con function con (x) donde retorno x.a es tipo texto a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).can(globselector, x => { if(typeof x === "object") throw new Error("No objects"); } ).
    [ ] un map by selector design pattern con selector como [] con mapper como una función con (x) donde retorno x.a es tipo texto a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).map(globselector, x => x[0] ).
    [ ] un filter by selector design pattern con selector como [] con filter como una función con (x) donde retorno x.a es tipo texto a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).filter(globselector, x => x.startsWith("a") ).
    [ ] un reduce by selector design pattern con selector como [] con reducer como una función con (x) donde retorno x.a es tipo texto a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).reduce(globselector, (x,out,k) => out[k] = x + ".0" ).
    [ ] un modify by selector design pattern con selector como [] con modifier como una función con (x) donde retorno x.a es tipo texto a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).modify(globselector, (out) => out.concat(["okk"]) ).
    [ ] un iterate by selector design pattern con selector como [] con iterator como una función con (x) donde retorno x.a es tipo texto a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).iterate(globselector, (x,out,k) => out[k] = x + ".0" ).
    [ ] un interpelate by selector design pattern con selector como [] con interpelater como una función con (x) donde retorno x.a es tipo texto a partir de data
        [ ] hago Castelog.variables.Introspector.from(data).interpelate(globselector, (x) => 700 ).
[ ] una función proxificada llamada ("algo") 
        [ ] creo funcionesSeleccionadas como un conjunto de funciones proxificadas con selector como "/utils/**/*,/settings/**/*".

    [ ] con anteriores como []
    [ ] con actuales como []
    [ ] con posteriores como []
        [ ] hago Castelog.variables.FuncionProxificada.from({ id: "algo", anteriores: [], actuales: [], posteriores: [] }, Castelog.variables.gestorDeFuncionesProxy)
[ ] 