Castelog.variables.plantillas_config_por_defecto = {};
Castelog.variables.plantillas_settings_por_defecto = { delimiter: ":", async: false };

Castelog.metodos.una_plantilla = function(fn, defaultConfig = {}, defaultSettings = {}) {
    if(typeof fn === "string") {
        return (config_p, settings_p) => {
            const config = Object.assign({}, Castelog.variables.plantillas_config_por_defecto, defaultConfig, config_p);
            const settings = Object.assign({}, Castelog.variables.plantillas_settings_por_defecto, defaultSettings, settings_p);
            const parameters = { config };
            return Castelog.variables.ejs.render(fn, parameters, settings);
        };
    } else if(typeof fn === "function") {
        return (config, settings) => {
            return fn(
                Object.assign({}, defaultConfig, config),
                Object.assign({}, defaultSettings, settings),
            );
        };
    } else throw new Error("Tipo de plantilla no identificado (válidos:'string' y 'function'");
};