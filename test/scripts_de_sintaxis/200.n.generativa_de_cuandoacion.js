
const modo = "normal";
const mensaje = "en modo normal";
if(!(( modo === "normal" ? mensaje === "en modo normal" : ( modo === "avanzado" ? mensaje === "en modo avanzado" : ( modo === "fácil" ? mensaje === "en modo fácil" : false ) ) ))) throw "Modo y mensaje no están en sincronía";