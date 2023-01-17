
const mensaje = "Mensaje fáctico";
if(!("Mensaje fáctico" === ((mensaje) => {
return mensaje;})(mensaje))) throw new Error("Error en fichero [-] en posición [36-126=1:37-2:90] cuando: " + "Compruebo que \"Mensaje fáctico\" es igual que un hecho con (mensaje) donde retorno mensaje")