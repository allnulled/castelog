# TODO

[ ] Componentes de formularios y controles
[ ] Componentes de UI:
    [ ] Cargador
    [ ] Gestor de errores (mediante notificación, típicamente, no un componente:)
        [ ] this. $dollar$notificaciones.error(error)
    [ ] Puerto de notificaciones
    [ ] Puerto de diálogos
    [ ] Grupo de controles
    [ ] Párrafo destacado
    [ ] Código fuente
    [ ] Código fuente interlineal
    [ ] Lista ordenada
    [ ] Arbol de datos
    [ ] Lista detallada
    [ ] Arbol detallado
    [ ] Iconos (FontAwesome, supongo)
    [ ] Galería de imágenes (con buen CSS y gestión de errores)
    [ ] Sonido
    [ ] Reproductor de sonido
    [ ] Video
    [ ] Reproductor de vídeo
    [ ] Reproductor de vídeo de Youtube


<PuertoDeComunicacionesDirectas />

pregunto asíncronamente al usuario mediante un componente vue2 llamado "FormularioDeDatosDeUsuario" con plantilla {
    <div>
        <Formulario :al-enviar="resolver_pregunta">
            <ControlDeEntrada tipo="texto" enunciado="¿Cuál es tu nombre?" :gestor="this" propiedad="nombre" />
            <ControlDeEntrada tipo="numero" enunciado="¿Cuál es tu edad?" :gestor="this" propiedad="edad" />
            <ControlDeEntrada tipo="opcion" enunciado="¿En qué género prefiere ser referid@?" :gestor="this" propiedad="detalles" :opciones="['Masculino', 'Femenino']" />
            <ControlDeEntrada tipo="dia" enunciado="¿Y tu fecha de nacimiento?" :gestor="this" propiedad="nacimiento" />
            <ControlDeEntrada tipo="texto largo" enunciado="¿Alguna cosa a tener en cuenta?" :gestor="this" propiedad="detalles" />
            <ControlDeEnvio>Continuar</ControlDeEnvio>
        </Formulario>
    </div>
} creando constante datos_de_usuario.

comunico asíncronamente al usuario mediante un componente vue2 llamado "ComunicacionDe001" con plantilla {
    <div>
        <Parrafo>Los datos sobre usted fueron guardados correctamente, y serán evaluados más adelante.</Parrafo>
        <Parrafo>De momento, querría saber algunas cosas más...</Parrafo>
        <ControlDeBoton :al-clicar="resolver_comunicacion">Continuar</ControlDeBoton>
    </div>
}.

































[ ] Y, si eso, más adelante, se puede pensar en...:

  [ ] Sentencia_de_inicio_ambito_asíncrono
    [ ] en errores [con (error)] [lanzo error]
    [ ] bloque subsiguiente wrapeado en un "(async function(){try{...}catch(error){...}}).call(this);"
    [ ] en errores
  [ ] Sentencia_de_conecto_con_base_de_datos 
    [ ] configurado con { host, port, user, password, database }
    [ ] creando constante db
    [ ] en errores
  [ ] Sentencia_de_scrapeo_sitio_web 
    [ ] asincrono
    [ ] configurado con { ... }
    [ ] donde
    [ ] en errores
  [ ] Sentencia_de_descargo_recurso_web 
    [ ] configurado con
    [ ] con origen
    [ ] con destino
    [ ] en errores
  [ ] Sentencia_de_envio_recurso_web 
    [ ] configurado con
    [ ] con origen
    [ ] con destino
    [ ] en errores
  [ ] Sentencia_de_comprimo 
    [ ] con origen
    [ ] con destino
    [ ] en errores
  [ ] Sentencia_de_descomprimo 
    [ ] con origen
    [ ] con destino
    [ ] en errores
  [ ] Sentencia_de_listo_directorio 
    [ ] con origen
  [ ] Sentencia_de_listo_procesos_del_sistema 
  [ ] Sentencia_de_listo_servicios_del_sistema 
  [ ] Sentencia_de_listo_usuarios_del_sistema 
  [ ] Sentencia_de_listo_grupos_del_sistema 
  [ ] Sentencia_de_listo_dispositivos_de_entrada_y_salida_del_sistema 
  [ ] Sentencia_de_listo_dispositivos_en_la_red_local 
  [ ] Sentencia_de_listo_interfaces_de_internet 
  [ ] Sentencia_de_listo_binarios_principales
  [ ] Sentencia_de_salgo_del_proceso
    [ ] con
  [ ] Sentencia_de_cambio_de_directorio 
    [ ] con destino
    [ ] en errores
  [ ] Sentencia_de_busco_ficheros_recursivamente 
    [ ] con origen
    [ ] por nombre con (fichero) donde [retorno true o false]
    [ ] por contenido con (fichero, contenido) donde [retorno {} o undefined]
    [ ] en errores
  [ ] Sentencia_de_reescribo_fichero 
    [ ] con origen
    [ ] con (fichero, contenido)
    [ ] donde [retorno contenido.replace(...)]
    [ ] en errores
  [ ] Sentencia_de_aseguro_ruta_de_ficheros 
    [ ] como fichero | como directorio
    [ ] con origen
    [ ] en errores
  [ ] Sentencia_de_compilo_aplicacion_para_aplicacion_web_progresiva 
  [ ] Sentencia_de_compilo_aplicacion_para_escritorio 
  [ ] Sentencia_de_compilo_aplicacion_para_movil 
  [ ] Sentencia_de_compilo_aplicacion_para_extension_de_navegador 
  [ ] Sentencia_de_muevo_dispositivo 
  [ ] Sentencia_de_inyecto_codigo_en_vivo 
  [ ] Sentencia_de_genero_certificados_de_seguridad_para_https 
  [ ] Sentencia_de_parseo_texto_en_json 
  [ ] Sentencia_de_hidrato_json 
  [ ] Sentencia_de_deshidrato_json 
  [ ] Sentencia_de_refresco_modulo_node 
  [ ] Sentencia_de_elimino_modulo_node 
  [ ] Sentencia_de_abro_con_navegador 
  [ ] Sentencia_de_listo_tareas_programadas 
  [ ] Sentencia_de_programo_tarea_para 
  [ ] Sentencia_de_programo_tarea_al_iniciar_sistema 
  [ ] Sentencia_de_inyecto_texto_en_fichero 
  [ ] Sentencia_de_deyecto_texto_en_fichero 
  [ ] Sentencia_de_prependizo_en_fichero 
  [ ] Sentencia_de_apendizo_en_fichero 
  [ ] Sentencia_de_registro_comando_de_consola 
  [ ] Sentencia_de_ejecuto_comando_registrado_de_consola 
  [ ] Sentencia_de_extiendo_objeto 
  [ ] Sentencia_de_extiendo_lista 

    [ ] 1 design pattern genérico

  [ ] GoF_01
  [ ] GoF_02
  [ ] GoF_03
  [ ] GoF_04
  [ ] GoF_05
  [ ] GoF_06
  [ ] GoF_07
  [ ] GoF_08
  [ ] GoF_09
  [ ] GoF_10
  [ ] GoF_11
  [ ] GoF_12
  [ ] GoF_13
  [ ] GoF_14
  [ ] GoF_15
  [ ] GoF_16
  [ ] GoF_17
  [ ] GoF_18
  [ ] GoF_19
  [ ] GoF_20
  [ ] GoF_21
  [ ] GoF_22
  [ ] GoF_23
  [ ] GoF_24


[ ] Adaptador de BD para RanasDB
[ ] Patrones de diseño
    [ ] 1. ...
    [ ] 2. ...
    [ ] 3. ...
    [ ] 4. ...
    [ ] 5. ...
    [ ] 6. ...
    [ ] 7. ...
    [ ] 8. ...
    [ ] 9. ...
    [ ] 10. ...
    [ ] 11. ...
    [ ] 12. ...
    [ ] 13. ...
    [ ] 14. ...
    [ ] 15. ...
    [ ] 16. ...
    [ ] 17. ...
    [ ] 18. ...
    [ ] 19. ...
    [ ] 20. ...
    [ ] 21. ...
    [ ] 22. ...
    [ ] 23. ...
    [ ] 24. ...
[ ] Nuevas sintaxis innovadoras.
[ ] Patrón de árbol de proyecto
[ ] Patrón de secuencia:
    un patrón de secuencia asíncrona donde globalmente {

    } además localmente en proceso X1 {

    } además globalmente {

    } además localmente {

    } además localmente en proceso X4 {

    }.
[ ] Patrón de proxificación de funciones, lambdas, hechos:
    creo to_upper_case como una función proxificada por "to_upper_case" con (texto) donde retorno texto.toUpperCase().
    agrego evento "before_call" en proxy "to_upper_case" como una función con (texto) donde retorno "Hardcoded text for every call+1".
    agrego evento "after_call" en proxy "to_upper_case" como una función con (resultado) donde retorno resultado.toLowerCase().
    compruebo que to_upper_case() es igual que "hardcoded text for every call+1".
    # Usando: Castelog.metodos.una_funcion_proxificada

[ ] Patrón de extendido sucesivamente por:

[ ] Patrón de rasgo (o extensión):

[ ] Patrón de static/dynamic:
    creo RasgoA como un rasgo con { propiedad a como "a". }.
    creo RasgoB como un rasgo con { propiedad b como "b". }.
    creo RasgoC como un rasgo con { propiedad c como "c". }.
    creo RasgoD como un rasgo con { propiedad d como "d". }.
    creo RasgoE como un rasgo con { propiedad e como "e". }.
    creo RasgoF como un rasgo con { propiedad f como "f". }.
    creo RasgoG como un rasgo con { propiedad g como "g". }.
    creo RasgoH como un rasgo con { propiedad h como "h". }.
    creo RasgoI como un rasgo con { propiedad i como "i". }.
    un patrón de static-dynamic class prototyping a partir de {} con estáticamente {
        propiedad DEFAULT_PARAMETERS como {}.
        propiedad DEFAULT_OPTIONS como {}.
        propiedad DEFAULT_SERVER_OPTIONS como {}.
        propiedad DEFAULT_CLIENT_OPTIONS como {}.
        propiedad Rasgo1 como un rasgo que extiende de (RasgoA, RasgoB, RasgoC) con {}.
        propiedad Rasgo2 como un rasgo que extiende de (RasgoD, RasgoE, RasgoF) con {}.
        propiedad Rasgo3 como un rasgo que extiende de (RasgoG, RasgoH, RasgoI) con {}.
    } con dinámicamente {
        método constructor con (parametros_p o en su defecto {}) donde {
            creo parametros como {} extendido por [this.constructor.DEFAULT_PARAMETERS, parametros_p].
            extiendo a this sucesivamente {
                en [] por [this.constructor.DEFAULT_OPTIONS, parametros].
                en ["server"] por [this.constructor.DEFAULT_SERVER_OPTIONS, parametros.server].
                en ["client"] por [this.constructor.DEFAULT_CLIENT_OPTIONS, parametros.client].
            }.
            hago una extensión de this por {} también por {} 
            hago una extensión de this sucesivamente { en [] por []. en [] por [] }
            creo x extendiendo a this por {} también por {}.
            creo x extendiendo a this sucesivamente { en [] por []. en [] por [] }
            implemento en this rasgos [Rasgo1, Rasgo2, Rasgo3].
            implemento en this sucesivamente rasgos [
                [ "rasgos_1", Rasgo1 ],
                [ "rasgos_2", Rasgo2 ],
                [ "rasgos_3", Rasgo3 ]
            ].
        }.
    }.

[ ] Patrón de reducción en creo y en apendizo/prependizo y en asigno
    creo x reduciendo (~1) [
        [
            [
                [0,10,20]
            ]
        ],
            [
                [1,11,21]
            ]
        ],
            [
                [2,12,22]
            ]
        ],
            [
                [3,13,23]
            ]
        ]
    ]   donde reduzco (~2) item1
        donde reduzco (~3) item2
        donde apendizo en reduccion1 a [(item3[0] * 10), (item3[1] * 10), (item3[2] * 10)].

[ ] Patrón getter/setter:
    creo variable x como 0.
    creo getset como {get: una función donde retorno x, set: una función con(valor) donde asigno x como valor.
    creo getset como un getter-setter para x.
    si getset.get() es igual que 0 imprimo "ok".
    hago getset.set(600).
    si getset.get() es igual que 600 imprimo "ok".

Patrón commander:
    desacoplo { consola, comandos, historico } a partir de un patrón commander con commands [{
        propiedad name como "New command".
        propiedad settings como {}.
        método do como una función donde retorno 900.
        método undo como una función donde retorno 900.
    }, {
        propiedad name como "New command 2".
        propiedad settings como {}.
        método do como una función.
        método undo como una función.
    }] con history [
        # pick from persistence here optionally
    ] con nombres [ "consola", "comandos", "historico", "hacer_comando", "deshacer_comando", "al_hacer", "al_deshacer" ].
    hago consola.hacer_comando("New command 2", { datos: [0,0,0] }).

Patrón promesas paralelas / promesas en serie / promesas en carrera:

hago asíncronamente unas promesas en serie a partir de [
    una promesa con (ok, fail) donde retorno ok("1"),
    una promesa con (ok, fail) donde retorno ok("2"),
    una promesa con (ok, fail) donde retorno ok("3"),
    una promesa con (ok, fail) donde retorno ok(unas promesas paralelas a partir de [
        una promesa con (ok, fail) donde retorno ok("4.1"),
        una promesa con (ok, fail) donde retorno ok("4.2"),
        una promesa con (ok, fail) donde retorno ok("4.3"),
        una promesa con (ok, fail) donde retorno ok("4.4"),
        una promesa con (ok, fail) donde retorno ok("4.5"),
    ]).
    una promesa con (ok, fail) donde retorno ok("5"),
].

Patrón factory:
    desacoplo { fabricas, fabricadores, productos } a partir de un patrón factory con factories {
        Propiedad Fabrica1 como una función donde retorno this.
        Propiedad Fabrica2 como una función donde retorno this.
        Propiedad Fabrica3 como una función donde retorno this.
        Propiedad Fabrica4 como una función donde retorno this.
        Propiedad Fabrica5 como una función donde retorno this.
        Propiedad Fabrica6 como ["Fabricador1", "Fabricador2", "Fabricador3", "~Fabricador4", "~Fabricador5"]
    } con fabricators {
        Propiedad Fabricador1 como una función donde asigno this.fabricador1 como true.
        Propiedad Fabricador2 como una función donde asigno this.fabricador2 como true.
        Propiedad Fabricador3 como una función donde asigno this.fabricador3 como true.
        Propiedad Fabricador4 como una función asíncrona donde asigno this.fabricador4 como true.
        Propiedad Fabricador5 como una función asíncrona donde asigno this.fabricador5 como true.
        Propiedad Fabricador6 como una función donde asigno this.fabricador6 como true.
        Propiedad Fabricador7 como una función donde asigno this.fabricador7 como true.
        Propiedad Fabricador8 como una función donde asigno this.fabricador8 como true.
        Propiedad Fabricador9 como una función donde asigno this.fabricador9 como true.
    } con products {
        Propiedad Producto1 como una función donde retorno this.
        Propiedad Producto2 como una función donde retorno this.
        Propiedad Producto3 como una función donde retorno this.
        Propiedad Producto4 como una función donde retorno this.
        Propiedad Producto5 como una función donde retorno this.
        Propiedad Producto6 como una función donde retorno this.
        Propiedad Producto7 como una función donde retorno this.
        Propiedad Producto8 como una función donde retorno this.
        Propiedad Producto9 como una función donde retorno this.
        Propiedad Producto10 como una función donde retorno this.
        Propiedad Producto11 como una función donde retorno this.
        Propiedad Producto12 como una función donde retorno this.
        Propiedad Producto13 como una función donde retorno this.
        Propiedad Producto14 como una función donde retorno this.
        Propiedad Producto15 como una función donde retorno this.
        Propiedad Producto16 como una función donde retorno this.
    } con nombres [ "fabricas", "fabricadores", "productos" ].

Patrón decorator:
    desacoplo { decorable, decoradores } como un patrón decorator con decorable {} con decorators [
        [una función con (decorable, attrs, config) donde {
            imprimo attrs.join(", ") + "!".
        }, ["awesome", "great", "it is decorable!"], {}],
        una función con (decorable, attrs) donde {
            asigno decorable.stack como [].
            apendizo en decorable.stack a {accion: "stack iniciado"}.
        },
        una función con (decorable) donde {
            apendizo en decorable.stack a {accion: "stack iniciado"}.
        }
    ] con nombres [ "decorable", "decoradores" ].

Patrón switch-cases:
    creo x según a en caso que esto es igual que 100 {
        # no es una función, por lo que hereda async/await:
        retorno 101.
    } en caso que esto es igual que 200 {
        retorno 202.
    } en su defecto {
        retorno 303.
    }.
    creo x según z si esto es igual que 100 {

    } pero si esto es igual que 200 {

    } y si no {

    }.
    creo esperar como una función con (parametros) donde retorno una espera de parametro milisegundos.
    
    creo x según { esperar } si ( ~ esto.esperar(100) ) es igual que 100 {
        imprimo "puedes hacer creo+segun utilizando aync/await!".
        retorno ~ una promesa donde retorno ok({ code: 1 }).
    } pero si (~ esto.esperar(200)) es igual que 200 {
        retorno ~ una promesa donde retorno ok({ code: 2 }).
    } y si no {
        retorno ~ una promesa donde retorno ok({ code: 3 }).
    }.
    
    compruebo que x.code es igual que 3.


Patrón object-prototype:

    creo { objeto, prototipos } como un patrón object-prototypes con object {

    } con prototypes [{

    }] con nombres ["objeto", "prototipos"].

Patrón object-modificators:

    creo { objeto, modificadores } como ~ un patrón object-modificators ~ con object {
        stack: []
    } con modificators [
        una función asíncrona con (entrada) donde apendizo en entrada.stack a "entrada;" después retorno entrada,
        una función asíncrona con (entrada2) donde apendizo en entrada2.stack a "entrada2;" después retorno entrada2,
        una función asíncrona con (entrada3) donde apendizo en entrada3.stack a "entrada3;" después retorno entrada3,
        una función asíncrona con (entrada4) donde apendizo en entrada4.stack a "entrada4;" después retorno entrada4,
        una función asíncrona con (entrada5) donde apendizo en entrada5.stack a "entrada5;" después retorno entrada5
    ] con nombres ["objeto", "modificadores"].

Patrón facade:

    desacoplo { privados, publicos } a partir de un patrón facade a partir de {} con preámbulo donde {
        asigno this.toString como una función donde retorno 500.
    } con privates {
        propiedad z como 20.
    } con publics {
        propiedad x como 10.
    } ok! formateado como {
        privados: esto.privates,
        publicos: esto.publics
    }.

Nota: el "ok!" cierra todos los paréntesis anteriores posibles.

Patrón memento:

    desacoplo { memoria, historico, acciones } a partir de un patrón memento con actions {
        propiedad accion_1 como una función.
        propiedad accion_2 como una función.
        propiedad accion_3 como una función.
        propiedad accion_4 como una función.
        propiedad accion_5 como una función.
        propiedad accion_6 como una función.
        propiedad accion_7 como una función.
        propiedad accion_8 como una función.
        propiedad accion_9 como una función.
        propiedad accion_10 como una función.
        propiedad accion_11 como una función.
        propiedad accion_12 como una función.
        propiedad accion_13 como una función.
        propiedad accion_14 como una función.
        propiedad accion_15 como una función.
        propiedad accion_16 como una función.
        propiedad accion_17 como una función.
    } con nombres ["memoria", "historico", "acciones", "hacer_accion", "deshacer_ultima_accion", "resetear_historico", "recargar_historico"].
    # memory, history, actions, do_action, undo_last_action, reset_history, reload_history
    imprimo memoria.historico.
    imprimo memoria.acciones.
    imprimo memoria.hacer_accion(una nueva acciones.accion_1).
    imprimo memoria.deshacer_ultima_accion().
    imprimo memoria.resetear_historico().
    imprimo memoria.recargar_historico(memoria.historico).

Patrón estado-evento:

    desacoplo { state, events } como un patrón state-events con state {
        preferencias: {
            de_perfil: {},
            de_idioma: {},
            de_servidor: {},
            de_sesion: {},
            de_otros: {}
        },
        interfaz: {
            pagina_principal: "HomePage",
            navegacion: { seleccionada:false, $events:[events.Evento1] },
            proyecto: {seleccionado:false},
            token_de_autentificacion: {seleccionado:false},
            autentificacion: {seleccionada:false},
            errores: {seleccionados: []},
        }
    } con events {
        
        en evento "Evento1" está usando una función.
        en evento "Evento2" está usando una función.
        en evento "Evento3" está usando una función.
        en evento "Evento4" está usando una función.
        en evento "Evento5" está usando una función.
        en evento "Evento6" está usando una función.

        en evento "Evento7" está usando una función.
        en evento "Evento8" está usando una función.
        en evento "Evento9" está usando una función.
        en evento "Evento10" está usando una función.
        en evento "Evento11" está usando una función.
        en evento "Evento12" está usando una función.
        en evento "Evento13" está usando una función.
        en evento "Evento14" está usando una función.

    }.

    hago state.set("interfaz/pagina_principal", "LoginPage").

    imprimo state.get("interfaz/autentificacion").

Patrón de funciones compartimentadas:

    una función asíncrona proxificada por "funcion_unica_0001" con (parametros) la cual en validación {

    } en cuerpo {

    } en formateo {

    } en errores {

    }.
    una lambda / un hecho ...

Patrón de factory-manager:

    desacoplo { fabrica, gestor } como un patrón factory-manager con factory una función donde {
        asigno a "producto" en this.type.
        asigno a "lechugas" en this.subtype.
        asigno a "tal tal tal" en this.description.
        asigno a undefined en this.uid.
        hago gestor.agregar_producto(this). # is instance of ? + set uid + push
        retorno this.
    } con manager {

    } con nombres [fabrica, gestor, productos, agregar_producto, encontrar_producto_por_uid, eliminar_producto_por_uid].

Patrón de objects-manager:

    creo [a,b,c,d,e] reduciendo "abcde" iniciado con {} donde apendizo en reduccion a item.
    desacoplo { objetos, gestor } como un patrón objects-manager con objetos [a,b,c,d,e] con manager {} con nombres [objetos, gestor].
    creo uid1 como gestor.agregar_producto({ nuevo: "producto" }).
    creo ins1 como gestor.encontrar_producto_por_uid(uid1).
    imprimo ins1.

Descargar proyecto git:

    clono proyecto git de "https://..." en branca "master" a __dirname + "/pro1".

Iniciar proyecto:

    inicio proyecto [para node/npm/castelog] [en __dirname]? [con package {}]?.
    instalo proyecto [para node/npm/castelog] [en __dirname].

Instalar y ejecutar proyecto para otros lenguajes:

    instalo entorno para c/c++
    instalo entorno para python
    instalo entorno para ruby
    instalo entorno para perl
    instalo entorno para java
    instalo entorno para node
    instalo entorno para php
    instalo entorno para castelog

    instalo entorno para "aplicaciones de escritorio" basado en "electron".
    instalo entorno para "aplicaciones de móvil" basado en "cordova".

    instalo proyecto para c/c++
    instalo proyecto para python
    instalo proyecto para ruby
    instalo proyecto para perl
    instalo proyecto para java
    instalo proyecto para node
    instalo proyecto para php
    instalo proyecto para castelog
    
    ejecuto proyecto para c/c++
    ejecuto proyecto para python
    ejecuto proyecto para ruby
    ejecuto proyecto para perl
    ejecuto proyecto para java
    ejecuto proyecto para node
    ejecuto proyecto para php
    ejecuto proyecto para castelog

    ejecuto fichero para c/c++
    ejecuto fichero para python
    ejecuto fichero para ruby
    ejecuto fichero para perl
    ejecuto fichero para java
    ejecuto fichero para node
    ejecuto fichero para php
    ejecuto fichero para castelog
    ejecuto fichero para electron
    ejecuto fichero para cordova

    si estoy en windows ejecuto comando de consola "bat instalacion.bat"
    pero si estoy en linux ejecuto comando de consola "sh instalacion.sh".
    pero si estoy en mac ejecuto comando de consola "echo 'Lo siento, nunca he tenido un mac ni nada asín.'".

Patrón variable-fuente

    creo dato_x como una variable-fuente con nombre 2 como 500.

    defino la variable-fuente con nombre 2 como {
        <div class="">
            <ControlForText label="Variable 2 del código fuente." :initial-value="" :on-change="v => internal_value = v" />
        </div>
    }.

Patrón protocol-actor:

    creo enviar_mensaje_basico como una función.
    un patrón protocol-actor con protocolos {
        propiedad Protocolo_de_envio_basico como { enviar_mensaje_basico }.
        propiedad Protocolo_de_envio_avanzado como { enviar_mensaje_avanzado }.
        propiedad Protocolo_de_recibo_basico como { recibir_mensaje_basico }.
        propiedad Protocolo_de_recibo_avanzado como { recibir_mensaje_avanzado }.
    } en actor {} con nombres [protocolo, actor].

Patrón object-subobject:

    creo objeto_final_1 como objeto_inicial excluyendo propiedades con una función con (propiedad, base, indice, acumulado) donde retorno propiedad.startsWith("$").    # sin propiedades que empiecen por $.
    creo objeto_final_2 como objeto_inicial incluyendo propiedades con una función con (propiedad, base, indice, acumulado) donde retorno no propiedad.startsWith("$"). # sin propiedades que empiecen por $.
    creo objeto_final_3 como objeto_inicial excluyendo valores con una función con (propiedad, base, indice, acumulado) donde retorno (valor % 2) es igual que 0.       # números pares solo
    creo objeto_final_4 como objeto_inicial incluyendo valores con una función con (propiedad, base, indice, acumulado) donde retorno no (valor % 2) es igual que 0.    # números pares solo

    creo objeto_final_11 como un patrón object-subobject en modo exclude-properties a partir de objeto_inicial con una función.
    creo objeto_final_12 como un patrón object-subobject en modo include-properties a partir de objeto_inicial con una función.
    creo objeto_final_13 como un patrón object-subobject en modo exclude-values a partir de objeto_inicial con una función.
    creo objeto_final_14 como un patrón object-subobject en modo include-values a partir de objeto_inicial con una función.
    
Patrón list-database:

    desacoplo { lista, db } a partir de un patrón list-database con list [] con database {
        método seleccionar como una función.
        método insertar como una función.
        método actualizar como una función.
        método borrar como una función.
        método insertar_en_lista como una función.
        método borrar_de_lista como una función.

    } con nombres [lista, db, datos, seleccionar, insertar, actualizar, borrar, insertar_en_lista, borrar_de_lista, antes_de_, despues_de_].
    imprimo db.datos.
    hago db.insertar({ id: 1, name: "x" }).
    imprimo db.datos.
    imprimo db.seleccionar([["id", "=", 1]]).

Patrón tree-database:

    desacoplo { tree, db } a partir de un patrón tree-database con tree {} con database {

    } con nombres [arbol, db, seleccionar, insertar, actualizar, eliminar, insertar_en_lista, eliminar_de_lista].

