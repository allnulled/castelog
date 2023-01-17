
const mensaje = "un mensaje diferente";
if(!((!(mensaje === "un mensaje típico")))) throw new Error("Error en fichero [-] en posición [41-100=1:42-3:58] cuando: " + "Compruebo que mensaje no es igual que \"un mensaje típico\"");
if(!((!(typeof mensaje === 'number')))) throw new Error("Error en fichero [-] en posición [101-141=3:59-4:40] cuando: " + "Compruebo que mensaje no es tipo número");
if(!((!(typeof mensaje === 'object')))) throw new Error("Error en fichero [-] en posición [142-182=4:41-5:40] cuando: " + "Compruebo que mensaje no es tipo objeto");
if(!((!(Array.isArray(mensaje))))) throw new Error("Error en fichero [-] en posición [183-222=5:41-6:39] cuando: " + "Compruebo que mensaje no es tipo lista");
if(!((!(typeof mensaje === 'undefined')))) throw new Error("Error en fichero [-] en posición [223-267=6:40-7:44] cuando: " + "Compruebo que mensaje no es tipo indefinido");
if(!((!(typeof mensaje === 'function')))) throw new Error("Error en fichero [-] en posición [268-309=7:45-8:41] cuando: " + "Compruebo que mensaje no es tipo función");