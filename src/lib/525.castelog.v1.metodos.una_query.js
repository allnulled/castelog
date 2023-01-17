Castelog.metodos.una_query = function(superquery, tabla, cuyos, ordenada_por, paginada_por) {
    if(typeof superquery !== "object") {
        throw new Error("Se requiere de parámetro «superquery» ser un objeto para «Castelog.metodos.una_query»");
    }
    if(typeof superquery.esquema !== "object") {
        throw new Error("Se requiere de parámetro «superquery.esquema» ser un objeto para «Castelog.metodos.una_query»");
    }
    if(typeof superquery.cliente !== "function") {
        throw new Error("Se requiere de parámetro «superquery.cliente» ser una función para «Castelog.metodos.una_query»");
    }
    if(typeof tabla !== "string") {
        throw new Error("Se requiere de parámetro «tabla» ser un string para «Castelog.metodos.una_query»");
    }
    if(typeof cuyos !== "object") {
        throw new Error("Se requiere de parámetro «cuyos» ser una objeto para «Castelog.metodos.una_query»");
    }
    if(typeof ordenada_por !== "object") {
        throw new Error("Se requiere de parámetro «ordenada_por» ser una objeto para «Castelog.metodos.una_query»");
    }
    if(typeof paginada_por !== "object") {
        throw new Error("Se requiere de parámetro «paginada_por» ser una objeto para «Castelog.metodos.una_query»");
    }
    const { esquema, cliente } = superquery;
    return cliente.get("?" + new URLSearchParams({
        operation: "select",
        table: tabla,
        where: JSON.stringify(cuyos),
        order: JSON.stringify(ordenada_por),
        paginate: JSON.stringify(paginada_por)
    }).toString()).then(response => {
        return response.data.data.items;
    });
};