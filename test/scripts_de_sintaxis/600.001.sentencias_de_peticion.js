
const x = "sometoken";
const respuesta1 = Castelog.metodos.una_peticion_http("https://www.example.com", "GET", "", { Authorization:"Bearer " + x
}, null, null);