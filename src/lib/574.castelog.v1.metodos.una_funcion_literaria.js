Castelog.metodos.una_funcion_literaria = function (ast_factory, partir = {}, reductor = Castelog.variables.noop, en_errores = undefined) {
    return Castelog.metodos.una_funcion_contextualizada(
        Castelog.metodos.una_interfaz_vacia(reductor, partir),
        ast_factory,
        en_errores
    );
};