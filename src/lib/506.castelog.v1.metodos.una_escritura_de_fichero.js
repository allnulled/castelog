Castelog.metodos.una_escritura_de_fichero = function (file, contents, codificacion, modelId_ = "fs", fsSystem = "simplestdb.fs") {
    if (fsSystem === "simplestdb.fs") {
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
            return sdb_fs.insert(modelId, { path: file, contents: contents || "" });
        } else if(keys.length > 1) {
            throw new Error("Fichero corrupto por duplicidad de ruta al escribir: " + file + " [00808]");
        }
        sdb_fs.update(modelId, previous_files[keys[0]].id, { contents });
        return previous_files[keys[0]];
    } else if (fsSystem === "node.fs") {
        return require("fs").writeFileSync(file, contents, codificacion);
    } else {
        throw new Error("Modalidad de sistema de ficheros «" + fsSystem + "» no identificada. Solo disponibles: 'simplestdb.fs' y 'node.fs'. [0002]");
    }
};