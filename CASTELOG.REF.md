# Referencia oficial de Castelog


## La API nativa de Castelog


La API nativa de Castelog es un script que va a cargar una serie de librerías y funciones que están asociadas al lenguaje.

La API nativa de Castelog está pensada para poder importarse, indistintamente, en entornos de node.js así como navegadores. Esta API, pues, no está pensada para ser compatible con otros entornos de JavaScript, como [Rhino](https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)) (donde usarías librerías de Java como **vocabulario** de JavaScript) o [JScript](https://es.wikipedia.org/wiki/JScript) (donde no sé exactamente qué usarías como vocabulario porque no lo he usado unnca, pero algo de Microsoft, imagino .NET), y aunque se puedan escribir algoritmos también para estos entornos con Castelog, Castelog no asegura la compatibilidad de todas las funciones para estos entornos. Castelog, en cambio, ha estado centrado y desarrollado para los 2 entornos más populares de JavaScript: node.js y navegadores. Y en cualquiera de estos entornos, Castelog puede importar su API nativa, y esperar que sus módulos internos funcionen correctamente. Fuera de ellos, no se asegura que el **vocabulario básico** del motor de JavaScript de turno sea compatible. Esto significa que, si en navegadores, `Imprimo "hola"` se transpila como `console.log("hola")`, pero en Rhino se escribe `System.out.println("Hola")` o `print("Hola")`, pues no espere que la sentencia de imprimir por consola funcione en ese entorno distinto a node.js y navegadores, donde sí se escribiría `console.log("Hola")`, porque Castelog traduce esta sentencia, de esta manera concreta, y no va a multiplicar su compatibilidad para cualquier vocabulario, evidentemente. Soy un tío solo haciendo esta mierda y sin dinero, al revés, lo único que he conseguido es que el MIT me chulee con su Scratch y con cómo pueden robar creatividades ajenas sin parpadear ni inmutarse, y los demás parece que tenemos que verlo, sin poder hacer nada al respecto del expolio y el robo de tiempo, moral y salud: es evidente que no voy a meterme en eso. Y pedirlo es estúpido: no se moleste.

Para cargar esta API nativa en cualquiera de tus scripts, solo tienes que hacer así:

```calo
Importo api nativa.
```

Con eso, estarás importando toda la API nativa de Castelog, que son unos cuantos miles de líneas.

## Las librerías de la API nativa de Castelog

Estos son los frameworks/librerías externos que importa la API nativa de Castelog.

- **`xhr2`** `(v0.2.1)`. Implementación para node.js de XMLHttpRequest.
- **`axios`** `(v0.27.2)`. *Comunicaciones estáticas.* Librería para hacer peticiones HTTP/S tanto en navegadores como en node.js.
- **`vue`** `(v2.6.14)`. *Interfaces gráficas.* Librería para construir front-end para navegadores.
- **`simplest-db`** `(v1.0.3)`. *Persistencia de datos.* Librería para tener persistencia rápida en cualquier entorno.
- **`ejs`** `(v3.1.6)`. **Plantillas de texto.* Librería para crear plantillas de texto.
- **`vue-router`** `(v3.5.1)`. *Enrutación.* Librería para `vue` y el manejo de rutas internas. 
- **`i18next`** `(v21.8.0)`. *Internacionalización.* Librería para facilitar la inclusión de traducciones.
- **`vue-i18next`** `(v0.15.2)` *Internacionalización.* Librería para compatibilizar **i18next** con **vue**.
- **`ranas-db`** `(v0.0.1)`. *Persistencia de datos*. Librería para explotar la [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) de los navegadores. Incluye [dexie.js](https://github.com/dexie/Dexie.js) y [dexie-relationships](https://www.npmjs.com/package/dexie-relationships).
- **`rest`** `(v0.0.1)`. *Arquitecturas HTTP REST automáticas*. Es este proyecto, [restologia](https://github.com/allnulled/restologia). Pero no, no sin dinero, no sin porros.
- **`jquery`** `(v3.3.1)`. *Manejo del DOM y otras utilidades de navegador*. El framework más popular de JavaScript.
- **`jquery-ui`** `(v1.13.2)`. *Widgets y funciones de interfaz de usuario*. Complementación de jQuery que proporciona widgets y funcionalidades relacionadas con las interfaces gráficas de usuario.
- **`sortablejs`** `(v1.8.4)`. *Funcionalidad de arrastrar y soltar*. Aunque jQueryUI ya proporciona alguna funcionalidad, esta librería se incluye para que Vue pueda usar el siguiente:
- **`vue.draggable`** `(v2.20.0)`. *Funcionalidad de arrastrar y soltar para Vue*. Con esta librería podemos añadir el arrastrar-y-soltar en Vue fácilmente.
- **`hook-by-priority`** `(v1.0.1)`. *Hooking y pluginaje*. Librería para implementar rápidamente hooks y plugins en tus aplicaciones.

Luego, además, están todas las funciones internas de la API nativa de Castelog. Esta lista es más amplia:

- `Castelog.inicializacion`
- `Castelog.metodos.un_filtrado_por`
- `Castelog.metodos.un_mapeado_por`
- `Castelog.metodos.un_reducido_por`
- `Castelog.variables.un_servidor_activo_de_control_remoto`
- `Castelog.variables.un_cliente_activo_de_control_remoto`
- `Castelog.variables.un_cliente_pasivo_de_control_remoto`
- `Castelog.variables.un_servidor_pasivo_de_control_remoto`
- `Castelog.variables.una_aplicacion_sintactica_universal`
- `Castelog.variables.un_punto_sintactico_universal`
- `Castelog.variables.un_utilities_helper_para_mysql2`
- `Castelog.variables.un_proxy_de_pool_de_conexiones_para_mysql2`
- `Castelog.variables.un_proxy_de_conexion_para_mysql2`
- `Castelog.variables.operador`
- `Castelog.metodos.una_peticion_http`
- `Castelog.metodos.un_cacheo`
- `Castelog.metodos.un_modulo_importado`
- `Castelog.metodos.una_exportacion_de_modulo_universal_estandar`
- `Castelog.metodos.una_importacion_de_modulo_universal_estandar`
- `Castelog.metodos.un_modulo_exportado`
- `Castelog.metodos.una_plantilla`
- `Castelog.metodos.una_lectura_de_fichero`
- `Castelog.metodos.una_escritura_de_fichero`
- `Castelog.metodos.una_copia_de_ficheros`
- `Castelog.metodos.una_conexion_de_base_de_datos`
- `Castelog.metodos.una_seleccion_de_base_de_datos`
- `Castelog.metodos.una_insercion_de_base_de_datos`
- `Castelog.metodos.una_actualizacion_de_base_de_datos`
- `Castelog.metodos.una_eliminacion_de_base_de_datos`
- `Castelog.metodos.una_notificacion`
- `Castelog.metodos.una_pregunta`
- `Castelog.metodos.una_confirmacion`
- `Castelog.metodos.estoy_en`
- `Castelog.metodos.un_elemento_html`
- `Castelog.metodos.una_compilacion_estandar_de_parametros_de_consola`
- `Castelog.metodos.un_servidor_http`
- `Castelog.metodos.un_servidor_https`
- `Castelog.metodos.un_servidor_socket_io`
- `Castelog.metodos.un_cliente_socket_io`
- `Castelog.metodos.una_red_de_servidores_http_rest_automaticos`
- `Castelog.metodos.una_superquery`
- `Castelog.metodos.una_query`
- `Castelog.metodos.un_proyecto_npm`
- `Castelog.metodos.un_comando_de_consola`
- `Castelog.metodos.un_testeo`
- `Castelog.metodos.un_test`
- `Castelog.metodos.una_descripcion_del_entorno`
- `Castelog.metodos.un_reseteo_de_directorio`
- `Castelog.metodos.un_servicio_de_ficheros_estaticos`
- `Castelog.metodos.un_texto_aleatorio`
- `Castelog.metodos.un_valor_aleatorio`
- `Castelog.metodos.un_servidor_activo_de_control_remoto`
- `Castelog.metodos.un_servidor_pasivo_de_control_remoto`
- `Castelog.metodos.un_cliente_activo_de_control_remoto`
- `Castelog.metodos.un_cliente_pasivo_de_control_remoto`
- `Castelog.metodos.un_fichero_xml`
- `Castelog.metodos.un_escaneo_de_puertos`
- `Castelog.metodos.un_monitoreo_de_red`
- `Castelog.metodos.una_propiedad_para`
- `Castelog.metodos.siendo`
- `Castelog.metodos.una_espera_de`
- `Castelog.metodos.una_aplicacion_sintactica_universal`
- `Castelog.metodos.un_punto_sintactico_universal`
- `Castelog.metodos.un_call_wait_map`
- `Castelog.metodos.un_componente_vue2`
- `Castelog.metodos.una_aplicacion_vue2`
- `Castelog.metodos.un_numero_textual`
- `Castelog.metodos.un_sistema_rest`
- `Castelog.metodos.un_diagrama_conceptual`
- `Castelog.metodos.un_diagrama_de_dependencias`
- `Castelog.metodos.un_formateo_de_fecha`
- `Castelog.metodos.un_relleno_de_texto`
- `Castelog.metodos.un_dia_de_la_semana`
- `Castelog.metodos.un_nombre_de_mes`
- `Castelog.metodos.una_comunicacion_de_entrada_de_usuario`
- `Castelog.metodos.una_comunicacion_de_salida_a_usuario`
- `Castelog.metodos.un_proxy`
- `Castelog.metodos.una_proxificacion`
- `Castelog.metodos.una_observacion_fenomenica`
- `Castelog.metodos.una_interfaz_vacia`
- `Castelog.metodos.una_funcion_contextualiazada`
- `Castelog.metodos.una_funcion_literaria`
- `Castelog.metodos.un_clon_de_proxy`
- `Castelog.metodos.una_funcion_mixta`
- `Castelog.metodos.una_reduccion_recursiva`
- `Castelog.metodos.una_expansion`
- `Castelog.metodos.un_navegador_automatico`
- `Castelog.metodos.una_seleccion_de_elementos_del_dom`
- `Castelog.metodos.una_seleccion_del_primer_elemento_del_dom`
- `Castelog.metodos.una_insercion_de_estilos_en_cascada`
- `Castelog.metodos.un_bloque_de_estilos_en_cascada`
- `Castelog.metodos.un_elemento_jquery`
- `Castelog.metodos.una_insercion_de_elemento_del_dom`
- `Castelog.metodos.un_acceso_a_propiedad`
- `Castelog.metodos.un_escaneo_de_ficheros`
- `Castelog.metodos.pasandole`
- `Castelog.metodos.pasado_por`
- `Castelog.metodos.una_serializacion_como_json`
- `Castelog.metodos.mostrando_solo_propiedades`
- `Castelog.metodos.un_hook_global`
- `Castelog.componentes_vue2`
- `Castelog.variables.operador.exclamacion.js`

Pero igual ver así las funciones no dirá mucho. En adelante, se intentará profundizar en este apartado. Pero qué quieres... yo solo soy un tío. ¿Un tío solo en contra de las universidades, que no quieren impartir lógica en lenguaje natural? Es muy duro, colegui Dios, estás zumbado de la puta cabeza, me provocas locura chunga de verdad, me da miedo tirar por aquí, he llegado demasiado lejos, demasiado solo, y me mata, me mata ver que eres un hijodeputa tal.



