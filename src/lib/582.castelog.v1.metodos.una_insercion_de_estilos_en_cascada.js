Castelog.metodos.una_insercion_de_estilos_en_cascada = function (id, contenidos) {
    const PROPERTY = "data-identificador-de-estilo-en-cascada-de-castelog";
    const matches = Array.from(document.head.querySelectorAll(`style`)).filter(item => {
        const id_elemento = item.getAttribute(PROPERTY);
        return id === id_elemento;
    });
    if (matches.length) {
        return false;
    }
    const styleTag = document.createElement("style");
    styleTag.setAttribute(PROPERTY, id);
    styleTag.textContent = contenidos;
    document.head.appendChild(styleTag);
};