Castelog.metodos.una_lectura_de_fichero = function(file, codificacion = "utf8", modelId_ = "fs", fsSystem = "simplestdb.fs") {
    if(fsSystem === "simplestdb.fs") {
        let modelId = modelId_;
        if(modelId_ === null) {
            modelId = "fs";
        } else if(typeof modelId_ === "undefined") {
            modelId = "fs";
        }
        const sdb_fs = Castelog.variables.SimplestDB.getFS();
        const previous_files = sdb_fs.select(modelId, item => item.path === file);
        const keys = Object.keys(previous_files);
        if(!keys.length) {
            return undefined;
        } else if(keys.length > 1) {
            throw new Error("Fichero corrupto por duplicidad de ruta al leer: " + file + " [00909]");
        }
        return previous_files[keys[0]].contents;
    } else if(fsSystem === "node.fs") {
        return require("fs").readFileSync(file, codificacion);
    } else {
        throw new Error("Modalidad de sistema de ficheros «" + fsSystem + "» no identificada. Solo disponibles: 'simplestdb.fs' y 'node.fs'. [0001]");
    }
};