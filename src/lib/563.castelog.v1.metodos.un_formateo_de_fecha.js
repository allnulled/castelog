Castelog.variables.formato_de_fecha_por_defecto = "YYYY/MM/DD HH:mm:ss.xxx";
Castelog.metodos.un_formateo_de_fecha = function (fecha = new Date(), formato = Castelog.variables.formato_de_fecha_por_defecto, direccion = "un formateo de fecha a texto") {
    const maxLength = Castelog.variables.formato_de_fecha_por_defecto.length;
    const minLength = "ss".length;
    if(typeof formato === "undefined") {
        formato = Castelog.variables.formato_de_fecha_por_defecto;
    }
    if(formato === null) {
        formato = Castelog.variables.formato_de_fecha_por_defecto;
    }
    if(direccion === "un formateo de fecha a texto") {
        if(typeof formato !== "string") {
            throw new Error("Required parameter «formato» to be a string while «direccion» is «un formateo de fecha a texto» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        if(formato.length > maxLength) {
            throw new Error("Required parameter «formato» to be greater than «" + maxLength + "» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        if(formato.length < minLength) {
            throw new Error("Required parameter «formato» to be greater than «" + minLength + "» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        if(!(fecha instanceof Date)) {
            throw new Error("Required parameter «fecha» to be an instance of Date in order while «direccion» is «un formateo de fecha a texto» to «Castelog.metodos.un_formateo_de_fecha»");
        }
        return formato
            .replace("YYYY", Castelog.metodos.un_relleno_de_texto(fecha.getFullYear(), 4, "0"))
            .replace("MM", Castelog.metodos.un_relleno_de_texto(fecha.getMonth() + 1, 2, "0"))
            .replace("DD", Castelog.metodos.un_relleno_de_texto(fecha.getDate(), 2, "0"))
            .replace("HH", Castelog.metodos.un_relleno_de_texto(fecha.getHours(), 2, "0"))
            .replace("mm", Castelog.metodos.un_relleno_de_texto(fecha.getMinutes(), 2, "0"))
            .replace("ss", Castelog.metodos.un_relleno_de_texto(fecha.getSeconds(), 2, "0"))
            .replace("xxx", Castelog.metodos.un_relleno_de_texto(fecha.getMilliseconds(), 3, "0"));
    } else if(direccion === "un formateo de texto a fecha") {
        if (typeof formato !== "string") {
            throw new Error("Required parameter «formato» to be a string while «direccion» is «un formateo de texto a fecha» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        if(formato.length > maxLength) {
            throw new Error("Required parameter «formato» to be greater than «" + maxLength + "» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        if(formato.length < minLength) {
            throw new Error("Required parameter «formato» to be greater than «" + minLength + "» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        if (typeof fecha !== "string") {
            throw new Error("Required parameter «fecha» to be a string while «direccion» is «un formateo de texto a fecha» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        if(fecha.length < minLength) {
            throw new Error("Required parameter «fecha» to be greater than «" + minLength + "» in order to «Castelog.metodos.un_formateo_de_fecha»");
        }
        let nueva_fecha = new Date();
        nueva_fecha.setHours(0);
        nueva_fecha.setMinutes(0);
        nueva_fecha.setSeconds(0);
        nueva_fecha.setMilliseconds(0);
        ExtractingDatePart: {
            const matchedPosition = formato.indexOf("YYYY");
            if(matchedPosition === -1) break ExtractingDatePart;
            const date_part = fecha.substring(matchedPosition, matchedPosition + 4);
            const date_part_int = parseInt(date_part);
            if(date_part) nueva_fecha.setFullYear(date_part_int);
        }
        ExtractingDatePart: {
            const matchedPosition = formato.indexOf("MM");
            if(matchedPosition === -1) break ExtractingDatePart;
            const date_part = fecha.substring(matchedPosition, matchedPosition + 2);
            const date_part_int = parseInt(date_part);
            if(date_part) nueva_fecha.setMonth(date_part_int - 1);
        }
        ExtractingDatePart: {
            const matchedPosition = formato.indexOf("DD");
            if(matchedPosition === -1) break ExtractingDatePart;
            const date_part = fecha.substring(matchedPosition, matchedPosition + 2);
            const date_part_int = parseInt(date_part);
            if(date_part) nueva_fecha.setDate(date_part_int);
        }
        ExtractingDatePart: {
            const matchedPosition = formato.indexOf("HH");
            if(matchedPosition === -1) break ExtractingDatePart;
            const date_part = fecha.substring(matchedPosition, matchedPosition + 2);
            const date_part_int = parseInt(date_part);
            if(date_part) nueva_fecha.setHours(date_part_int);
        }
        ExtractingDatePart: {
            const matchedPosition = formato.indexOf("mm");
            if(matchedPosition === -1) break ExtractingDatePart;
            const date_part = fecha.substring(matchedPosition, matchedPosition + 2);
            const date_part_int = parseInt(date_part);
            if(date_part) nueva_fecha.setMinutes(date_part_int);
        }
        ExtractingDatePart: {
            const matchedPosition = formato.indexOf("ss");
            if(matchedPosition === -1) break ExtractingDatePart;
            const date_part = fecha.substring(matchedPosition, matchedPosition + 2);
            const date_part_int = parseInt(date_part);
            if(date_part) nueva_fecha.setSeconds(date_part_int);
        }
        ExtractingDatePart: {
            const matchedPosition = formato.indexOf("xxx");
            if(matchedPosition === -1) break ExtractingDatePart;
            const date_part = fecha.substring(matchedPosition, matchedPosition + 3);
            const date_part_int = parseInt(date_part);
            if(date_part) nueva_fecha.setMilliseconds(date_part_int);
        }
        return nueva_fecha;

    }
};