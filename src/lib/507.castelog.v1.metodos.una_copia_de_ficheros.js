Castelog.metodos.una_copia_de_ficheros = function (file, contents, codificacion, modelId_ = "fs", fsSystem = "simplestdb.fs") {
    if (fsSystem === "simplestdb.fs") {
        let modelId = modelId_;
        if(modelId_ === null) {
            modelId = "fs";
        } else if(typeof modelId_ === "undefined") {
            modelId = "fs";
        }
        const sdb_fs = Castelog.variables.SimplestDB.getFS();
        // @TODO...
    } else if (fsSystem === "node.fs") {
        // @TODO...
    } else {
        throw new Error("Modalidad de sistema de ficheros «" + fsSystem + "» no identificada. Solo disponibles: 'simplestdb.fs' y 'node.fs'. [0003]");
    }
};