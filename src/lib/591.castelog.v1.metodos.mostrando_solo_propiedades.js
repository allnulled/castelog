Castelog.metodos.mostrando_solo_propiedades = function (dato, props) {
    const dato_keys = Object.keys(dato);
    const nuevo_dato = {};
    Copiando_valores:
    for(let i=0; i<dato_keys.length; i++) {
        const dato_key = dato_keys[i];
        if(props.indexOf(dato_key) === -1) {
            continue Copiando_valores;
        }
        const dato_value = dato[dato_key];
        nuevo_dato[dato_key] = dato_value;
    }
    return nuevo_dato;
};