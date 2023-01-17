const errorTipico = new Error("Típico error");
if(!(errorTipico instanceof Error)) throw new Error("Error en [53-102=1:54-3:48] cuando: " + "Compruebo que errorTipico es instancia de Error")