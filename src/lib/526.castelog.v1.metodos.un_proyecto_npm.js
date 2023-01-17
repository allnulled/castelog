Castelog.metodos.un_proyecto_npm = async function(extensionDePackage, directorio, esAsincrono = false) {
    try {
        if(typeof extensionDePackage !== "object") {
            throw new Error("Se requiere de parámetro «extensionDePackage» ser un object para «Castelog.metodos.un_proyecto_npm»");
        }
        if(typeof directorio !== "string") {
            throw new Error("Se requiere de parámetro «directorio» ser un string para «Castelog.metodos.un_proyecto_npm»");
        }
        if(typeof global === "undefined" || typeof require !== "function") {
            throw new Error("Se requiere de variable «global» no ser undefined y a variable «require» ser una función para  «Castelog.metodos.un_proyecto_npm»");
        }
        const fs = require("fs");
        const path = require("path");
        // Sí o sí, síncrono:
        Castelog.metodos.un_comando_de_consola("npm init -y", { cwd: directorio ? directorio : process.cwd() }, false);
        const packagePath = path.resolve(directorio, "package.json");
        let packageContents = undefined;
        if(esAsincrono) {
            packageContents = await fs.promises.readFile(packagePath, "utf8")
        } else {
            packageContents = fs.readFileSync(packagePath, "utf8");
        }
        const packageData = JSON.parse(packageContents);
        Object.assign(packageData, extensionDePackage);
        if(esAsincrono) {
            await fs.promises.writeFile(packagePath, JSON.stringify(packageData, null, 4), "utf8");
        } else {
            fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 4), "utf8");
        }
        return extensionDePackage;
    } catch (error) {
        console.log("Error al desplegar proyecto npm:", error);
        throw error;
    }
};