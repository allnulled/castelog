creo x como un diagrama temporal donde {
    defino tarea con { nombre: "Primera tarea", inicio: "2022-11-17 05:30:00", fin: "2022-11-18 07:00:00" }.
    defino tarea con { nombre: "Segunda tarea", inicio: "después de: Primera tarea", duracion: "1a 3M 2d 5h 30m 50s" }.
    defino tarea con { nombre: "Tercera tarea", inicio: "después de: Segunda tarea", duracion: "5h" }.
}.
escribo fichero en ruta "./gantt.md" con contenido x.toMermaidCode() con codificación "utf8".
ejecuto un comando de consola en serie consistente en `mmdc -i '${__dirname}/gantt.mmd' -o '${__dirname}/gantt.png'`.







compilo fichero de documentación en ruta `${__dirname}/gantt.json` con destino `${__dirname}/gantt.html` a partir un diagrama temporal donde {
    defino clase de diagrama temporal con {
        nombre: "lo-hace-el-yo",
        estilo: ""
    }.
    defino clase de diagrama temporal con {
        nombre: "lo-hace-el-otro",
        estilo: ""
    }.
    defino clasificación de diagrama temporal con {
        
    }.
    defino agente de diagrama temporal con {
        nombre: "Yo"
    }.
    defino tarea de diagrama temporal con {
        nombre: "Primera tarea",
        agentes: ["Yo"],
        inicio: "2022-11-17 05:30:00",
        fin: "2022-11-18 07:00:00"
    }.
    defino tarea de diagrama temporal con {
        nombre: "Segunda tarea",
        agentes: ["Yo"],
        inicio: "después de: Primera tarea",
        duracion: "1a 3M 2d 5h 30m 50s"
    }.
    defino tarea de diagrama temporal con {
        nombre: "Tercera tarea",
        agentes: ["Yo"],
        inicio: "después de: Segunda tarea",
        duracion: "5h"
    }.
}.