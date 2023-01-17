Castelog.metodos.un_nombre_de_mes = function(base) {
    let mes = base;
    if(base instanceof Date) {
        mes = base.getMonth();
    }
    if(typeof base === "number") {
        mes = base;
    }
    if(typeof base === "string") {
        mes = parseInt(base);
    }
    if(typeof mes !== "number") {
        throw new Error("Required parameter «base» to be an instance of Date, a string or a number in order to «Castelog.metodos.un_nombre_de_mes»");
    }
    if(mes === 0) return "Enero";
    if(mes === 1) return "Febrero";
    if(mes === 2) return "Marzo";
    if(mes === 3) return "Abril";
    if(mes === 4) return "Mayo";
    if(mes === 5) return "Junio";
    if(mes === 6) return "Julio";
    if(mes === 7) return "Agosto";
    if(mes === 8) return "Setiembre";
    if(mes === 9) return "Octubre";
    if(mes === 10) return "Noviembre";
    if(mes === 11) return "Diciembre";
    throw new Error("Required parameter «base» to be a number between 1 and 11 in order to «Castelog.metodos.un_nombre_de_mes»");
};