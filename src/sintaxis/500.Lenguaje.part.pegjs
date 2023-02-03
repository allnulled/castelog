Escript_de_castelog = prescripts:Sentencia_de_programa_inicial? script:Lenguaje_inicial { return prescripts + "\n" + wrapScriptCode(script) }

Sentencia_incompleta = sentencia:(
  Hook_para_sentencia_preferente /
  Sentencia_de_sirvo_ficheros_estaticos /
  Sentencia_de_ejecuto_comando_de_consola /
  Sentencia_de_inicio_proyecto_npm /
  Sentencia_de_elimino_directorio /
  Sentencia_de_genero_directorio /
  Sentencia_de_elimino_fichero /
  Sentencia_de_genero_fichero /
  Sentencia_de_importo_api_nativa /
  Sentencia_de_importo_jquery /
  Sentencia_de_elimino_propiedad /
  Sentencia_de_conecto_sistema_rest /
  Sentencia_de_conecto_base_de_datos /
  Sentencia_de_selecciono /
  Sentencia_de_inserto /
  Sentencia_de_actualizo /
  Sentencia_de_elimino /
  Sentencia_de_diagrama_conceptual /
  Sentencia_de_diagrama_de_dependencias /
  Sentencia_de_cacheo /
  Sentencia_de_leo_fichero /
  Sentencia_de_escribo_fichero /
  Sentencia_de_notifico /
  Sentencia_de_pregunto /
  Sentencia_de_confirmo /
  Sentencia_de_reseteo_directorio /
  Sentencia_de_no_hago_nada /
  Sentencia_de_si_alternativa_1 /
  Sentencia_de_si / 
  Sentencia_de_mientras / 
  Sentencia_de_hasta /
  Sentencia_de_creo / 
  Sentencia_de_desacoplo / 
  Sentencia_de_asigno / 
  Sentencia_de_retorno / 
  Sentencia_de_hago / 
  Sentencia_de_compruebo / 
  Sentencia_de_intento / 
  Sentencia_de_defino / 
  Sentencia_de_redefino / 
  Sentencia_de_lanzo / 
  Sentencia_de_incremento /
  Sentencia_de_interrumpo /
  Sentencia_de_itero /
  Sentencia_de_desde /
  Sentencia_de_apendizo_y_prependizo /
  Sentencia_de_exporto_un_manifiesto_web /
  Sentencia_de_importo /
  Sentencia_de_exporto /
  Sentencia_de_imprimo / 
  Sentencia_de_debugo / 
  Sentencia_de_derivo /
  Sentencia_de_ignoro_que /
  Sentencia_de_en_proceso /
  Sentencia_de_siempre_que_proxificacion /
  Hook_para_sentencia )
    { return sentencia }

  /*
  Sentencia_de_inicio_ambito_asincrono /
  Sentencia_de_conecto_con_base_de_datos /
  Sentencia_de_scrapeo_sitio_web /
  Sentencia_de_descargo_recurso_web /
  Sentencia_de_envio_recurso_web /
  Sentencia_de_comprimo /
  Sentencia_de_descomprimo /
  Sentencia_de_listo_directorio /
  Sentencia_de_listo_procesos_del_sistema /
  Sentencia_de_listo_servicios_del_sistema /
  Sentencia_de_listo_usuarios_del_sistema /
  Sentencia_de_listo_grupos_del_sistema /
  Sentencia_de_listo_dispositivos_de_entrada_y_salida_del_sistema /
  Sentencia_de_listo_dispositivos_en_la_red_local /
  Sentencia_de_listo_interfaces_de_internet /
  Sentencia_de_listo_binarios_principales /
  Sentencia_de_cierro_proceso /
  Sentencia_de_cambio_de_directorio /
  Sentencia_de_busco_ficheros_recursivamente /
  Sentencia_de_reescribo_fichero /
  Sentencia_de_aseguro_ruta_de_ficheros /
  Sentencia_de_compilo_aplicacion_para_aplicacion_web_progresiva /
  Sentencia_de_compilo_aplicacion_para_escritorio /
  Sentencia_de_compilo_aplicacion_para_movil /
  Sentencia_de_compilo_aplicacion_para_extension_de_navegador /
  Sentencia_de_muevo_dispositivo /
  Sentencia_de_inyecto_codigo_en_vivo /
  Sentencia_de_genero_certificados_de_seguridad_para_https /
  Sentencia_de_parseo_texto_en_json /
  Sentencia_de_hidrato_json /
  Sentencia_de_deshidrato_json /
  Sentencia_de_refresco_modulo_node /
  Sentencia_de_elimino_modulo_node /
  Sentencia_de_abro_con_navegador /
  Sentencia_de_listo_tareas_programadas /
  Sentencia_de_programo_tarea_para /
  Sentencia_de_programo_tarea_al_iniciar_sistema /
  Sentencia_de_inyecto_texto_en_fichero /
  Sentencia_de_deyecto_texto_en_fichero /
  Sentencia_de_prependizo_en_fichero /
  Sentencia_de_apendizo_en_fichero /
  Sentencia_de_registro_comando_de_consola /
  Sentencia_de_ejecuto_comando_registrado_de_consola /
  Sentencia_de_extiendo_objeto /
  Sentencia_de_extiendo_lista /
  //*/

Generativa_simple = generativa:(
  Hook_para_generativa_preferente /
  Generativa_de_numero /
  Generativa_de_texto /
  Generativa_de_cuando /
  Generativa_de_segun /
  Generativa_de_una_seleccion_de_elementos_del_dom /
  Generativa_de_una_seleccion_del_primer_elemento_del_dom /
  Generativa_de_una_insercion_de_estilos_en_cascada /
  Generativa_de_un_bloque_de_estilos_en_cascada /
  Generativa_de_una_insercion_de_elemento_del_dom /
  Generativa_de_un_elemento_html /
  Generativa_de_un_elemento_jquery /
  Generativa_de_una_promesa /
  Generativa_de_una_espera /
  Generativa_de_una_clase / 
  Generativa_de_un_objeto /
  Generativa_de_un_array /
  Generativa_de_una_reduccion_recursiva /
  Generativa_de_una_funcion_mixta /
  Generativa_de_una_funcion_literaria /
  Generativa_de_una_funcion /
  Generativa_de_una_lambda /
  Generativa_de_un_hecho /
  Generativa_de_un_nuevo /
  Generativa_de_una_pregunta /
  Generativa_de_un_valor_aleatorio /
  Generativa_de_un_texto_aleatorio /
  Generativa_de_un_testeo /
  Generativa_de_un_test /
  Generativa_de_una_aplicacion_sintactica_universal / 
  Generativa_de_un_punto_sintactico_universal / 
  Generativa_de_un_codigo_en_texto /
  Generativa_de_un_codigo_en_js /
  Generativa_de_un_codigo_en_html /
  Generativa_de_un_codigo_en_css /
  Generativa_de_un_formateo_de_fecha /
  Generativa_de_un_relleno_de_texto /
  Generativa_de_un_dia_de_la_semana /
  Generativa_de_un_nombre_de_mes /
  Generativa_de_una_descripcion_del_entorno /
  Generativa_de_una_confirmacion /
  Generativa_de_una_notificacion /
  Generativa_de_una_peticion_http /
  Generativa_de_una_seleccion_de_base_de_datos /
  Generativa_de_una_insercion_de_base_de_datos /
  Generativa_de_una_actualizacion_de_base_de_datos /
  Generativa_de_una_eliminacion_de_base_de_datos /
  Generativa_de_un_cacheo /
  Generativa_de_una_lectura_de_fichero /
  Generativa_de_una_escritura_de_fichero /
  Generativa_de_un_componente_vue2 / 
  Generativa_de_una_aplicacion_vue2 /
  Generativa_de_una_comunicacion_con_usuario /
  Generativa_de_una_plantilla /
  Generativa_de_estoy_en_entorno /
  Generativa_de_un_comando_de_consola /
  Generativa_de_un_conjunto_de_claves_del_objeto /
  Generativa_de_un_conjunto_de_valores_del_objeto /
  Generativa_de_una_compilacion_estandar_de_parametros_de_consola /
  Generativa_de_un_servidor_http_o_https /
  Generativa_de_un_socket_io_servidor_o_cliente / 
  Generativa_de_una_red_de_servidores_http_rest_automaticos /
  Generativa_de_una_copia_de_ficheros /
  Generativa_de_un_fichero_xml /
  Generativa_de_un_escaneo_de_puertos /
  Generativa_de_un_monitoreo_de_red /
  Generativa_de_un_servidor_de_control_remoto /
  Generativa_de_un_cliente_de_control_remoto /
  Generativa_de_un_diagrama_conceptual /
  Generativa_de_un_diagrama_de_dependencias /
  Generativa_de_un_proxy /
  Generativa_de_una_proxificacion /
  Generativa_de_un_design_pattern /
  Generativa_de_un_manifiesto_web /
  Generativa_de_un_resultado_de_proxificacion /
  Generativa_de_una_interfaz_vacia /
  Generativa_de_sabes_pues /
  Hook_para_generativa /
  Generativa_de_una_propiedad_para /
  Generativa_de_variable_llamable )
    { return generativa }

Sentencia_de_programa_inicial =
  principal:Ejecutable_principal?
  entorno:Sentencia_este_script_funciono_con?
  secundarios:Ejecutables_secundarios*
  compilable:Compilable_principal?
  empaquetable:Empaquetable_principal?
  html5:Sentencia_de_documento_html5?
    { return (principal ? principal : "") + (entorno ? entorno : "") + (secundarios ? secundarios.join("") : "") + (compilable ? compilable : "") + (empaquetable ? empaquetable : "") + (html5 ? html5 : "") }

EOS = ("." / (_* "oksentencia" (_+/EOF) ))
EOF = !.
_ "separación" = (__ / ___ / Comentarios_entre_espacios)
__ "espacio" = (" " / "\t")
___ "salto" = ("\r\n"/"\r" / "\n")
EOL = ___
Comentarios_entre_espacios = comentario:(
  Hook_para_comentario_preferente /
  Comentario_de_linea_con_salto /
  Comentario_multilinea /
  Comentario_de_por_algo /
  Sentencia_Seccionacion_interno /
  Sentencia_Documentacion_interno /
  Hook_para_comentario )
    { return comentario }
Comentario_de_linea_con_salto = "#" (!(___) .)* (___/EOF) _* { return }
Comentario_de_por_algo = "@POR-" (!(___) .)* (___/EOF) _* { return }
Comentario_multilinea = "[*" (!("*]").)* "*]" { return text() }

Lenguaje_inicial_sin_salto_final = _* sentencias:Sentencias { return sentencias }
Lenguaje_inicial = _* sentencias:Sentencias _* { return sentencias }
Nuevo_bloque_en_texto = _* SIMBOLO_ABRIR_BLOQUE _* Escript_de_castelog _* SIMBOLO_CERRAR_BLOQUE { return JSON.stringify(text().replace(/^[\n\t ]*\{|\}[\n\t ]*$/g, "")) }
Nuevo_bloque_en_js = _* SIMBOLO_ABRIR_BLOQUE _* script:Escript_de_castelog _* SIMBOLO_CERRAR_BLOQUE { return JSON.stringify(script) }
Nuevo_bloque_en_css = _* SIMBOLO_ABRIR_BLOQUE _* script:Codigo_css _* SIMBOLO_CERRAR_BLOQUE { return JSON.stringify(script) }
Bloque = ( Bloque_unilinea / Bloque_multilinea )
Bloque_unilinea "bloque unilinea" = (SIMBOLO_DE_COMA/":"/_*) _* bloque:Sentencia_incompleta despues:Subsentencias_despues? ";"? { return bloque + ( despues ? ("\n" + despues) : "" ) }
Bloque_multilinea  = _* SIMBOLO_ABRIR_BLOQUE _* bloque:Lenguaje_inicial _* SIMBOLO_CERRAR_BLOQUE { return bloque }

Sentencias = sentencias:(
  Sentencia_completa_2 /
  Sentencia_completa_1 )*
    { return sentencias.join("\n") }
Sentencia_completa_1 = 
  sentencia:Sentencia_completa_de_por_si
Sentencia_completa_2 = 
  sentencia:Sentencia_incompleta EOS { return sentencia }
Sentencia_completa_de_por_si = sentencia:(
  Hook_para_sentencia_completa_preferente /
  Sentencia_Seccionacion / 
  Sentencia_Documentacion /
  Sentencia_de_imprimo_2 /
  Hook_para_sentencia_completa )
    { return sentencia }

Subsentencias_despues = sentencias:Subsentencia_despues+ { return sentencias.join("\n") }
Subsentencia_despues = _* "después" _+ sentencia:Sentencia_incompleta { return sentencia }

Sentencia_este_script_funciono_con = _* ("Este script funcionó con" / "este script funcionó con") _*
  entorno:Generativa EOS
    { return createExecutedWithCommand(entorno) }
Ejecutable_principal = _* ("Ejecutable por" / "ejecutable por") ":"? _*
  ejec:Programa_inicial_2 (EOL/EOF)
    { return createShebang(ejec) }
Ejecutables_secundarios = _* ("Ejecutable "/"ejecutable ") id:[0-9]+ " por" ":"? _*
  ejec:Programa_inicial_2 (EOL/EOF)
    { return createExecutableComment(id, ejec) }
Programa_inicial = ((!EOS) .)+ { return text() }
Programa_inicial_2 = ((!(EOL/EOF)) .)+ { return text() }
Sentencia_de_documento_html5 = _*
  ("Ejecutable como documento HTML5" / "ejecutable como documento html5")
  autor:Subsentencia_con_autor?
  nombre:Subsentencia_con_nombre?
  version:Subsentencia_con_version? ":"?
  contenido:Documento_html5? EOS (EOL/EOF)
    { return `\n// [castelog:html5izable] ACTIVADO con: ${JSON.stringify({ autor, nombre, version, contenido })}\n` }

Subsentencia_con_autor = _* "con autor" _* etiqueta:Etiqueta_de_fichero { return etiqueta }
Subsentencia_con_nombre = _* "con nombre" _* etiqueta:Etiqueta_de_fichero { return etiqueta }
Subsentencia_con_version = _* "con versión" _* etiqueta:Etiqueta_de_fichero { return etiqueta }
Documento_html5 = _* head:Codigo_html_solo_text _* body:Codigo_html_solo_text { return { head, body }}
Etiqueta_de_fichero = [A-Za-z0-9_\-\.]+ { return text() }

Empaquetable_principal = _* ("Empaquetable con" / "empaquetable con") ":"?
  lista:Lista_de_empaquetables
    { return lista }

Compilable_principal = _* ("Compilable con" / "compilable con") ":"?
  lista:Lista_de_compilables
    { return lista }

Lista_de_empaquetables = empaquetables:Item_de_empaquetable* { return empaquetables.map(f => `\n// [castelog:empaquetables] ${ JSON.stringify(f) }\n`).join("") }
Item_de_empaquetable = EOL ("  ./" / "  @/" ) Programa_inicial_2 { return text().trim() }

Lista_de_compilables = compilables:Item_de_compilable* { return compilables.map(f => `// [castelog:compilables] ${ JSON.stringify(f) }\n`).join("") }
Item_de_compilable = EOL ("  ./" / "  @/" ) Programa_inicial_2 { return text().trim() }

Sentencia_de_si = _*
  etiqueta:Subsentencia_en_proceso?
  si:Sentencia_Si_1
  perosi:Sentencia_Si_2*
  ysino:Sentencia_Si_3?
    { return (etiqueta ? etiqueta : "") + si + perosi.join("") + (ysino ? ysino : "") }

Sentencia_de_si_alternativa_1 = _*
  etiqueta:Subsentencia_en_proceso?
  si:Sentencia_Si_1_v2
  osi:Sentencia_Si_2_v2*
  osino:Sentencia_Si_3_v2?
    { return (etiqueta ? etiqueta : "") + si + osi.join("") + (osino ? osino : "") }

Sentencia_Si_1 = _* Token_si _*
  condicion:Generativa
  bloque:Bloque
    { return "if(" + condicion + ") {\n" + bloque + "\n}" }

Sentencia_Si_1_v2 = _* Token_en_caso_que _*
  condicion:Generativa
  bloque:Bloque
    { return "if(" + condicion + ") {\n" + bloque + "\n}" }

Token_en_caso_que = _* ("en caso que" / "En caso que" / "en caso de que" / "En caso de que") _* {}

Sentencia_Si_2 = Sentencia_Si_2_v1

Sentencia_Si_2_v1 = _* Token_pero_si _*
  condicion:Generativa
  bloque:Bloque
    { return "\nelse if(" + condicion + ") {\n" + bloque + "\n}" }

Sentencia_Si_3 = Sentencia_Si_3_v1

Sentencia_Si_3_v1 = _* Token_y_si_no __*
  bloque:Bloque
    { return "\nelse {\n" + bloque + "\n}" }

Sentencia_Si_2_v2 = _* EOS _* Token_o_si _*
  condicion:Generativa
  bloque:Bloque 
    { return "\nelse if(" + condicion + ") {\n" + bloque + "\n}" }

Sentencia_Si_3_v2 = _* EOS _* Token_o_si_no __*
  bloque:Bloque
    { return "\nelse {\n" + bloque + "\n}" }

Token_o_si = _* ((!Token_o_si_no) ( "O si" / "o si" )) {}
Token_o_si_no = _* (("o si no" / "O si no")) {}


Sentencia_de_mientras = _*
  etiqueta:Subsentencia_en_proceso?
  Token_mientras _*
  condicion:Generativa
  bloque:Bloque
    { return (etiqueta ? etiqueta : "") + "while(" + condicion + ") {\n" + bloque + "\n}" }

Sentencia_de_hasta = _*
  etiqueta:Subsentencia_en_proceso?
  Token_hasta_que _*
  condicion:Generativa
  bloque:Bloque
    { return (etiqueta ? etiqueta : "") + "while(!(" + condicion + ")) {\n" + bloque + "\n}" }

Token_hasta_que = ("Hasta" / "hasta") (_* "que")? {}

Sentencia_de_creo = _*
  Token_creo _*
  creaciones:Lista_de_creaciones
    { return creaciones; }

Lista_de_creaciones = _*
  creacion_1:Subsentencia_de_creacion_1
  creacion_n:Subsentencia_de_creacion_n*
    { return [creacion_1].concat(creacion_n ? creacion_n : []).join("\n") }

Subsentencia_de_creacion_1 = _*
  tipo:Token_variable_o_constante?
  nombre:Etiqueta_de_variable
  Token_como_o_igual
  valor:Generativa
    { return (tipo === "variable" ? "let " : "const ") + nombre + " = " + valor + ";" }

Subsentencia_de_creacion_n = _* SIMBOLO_DE_COMA creacion:Subsentencia_de_creacion_1 { return creacion }

Sentencia_de_desacoplo = _*
  Token_desacoplo
  tipo:( _* ("variables" / "constantes") )? _+
  desacoplados:Lista_de_desacoplados _*
  Token_a_partir_de _*
  generativa:Generativa
    { return (tipo ? (tipo[1] === "variables") ? "let" : "const" : "const") + " " + desacoplados + " = " + generativa + ";" }

/* Desacoplo variables [ sujeto o en su defecto 'x', verbo, predicado ] a partir de [ "PC", "alerts", "rains" ]. */
/* Desacoplo variables { subject como sujeto o en su defecto {}, verb como verbo o en su defecto "!=null", predicate como predicado } a partir de { subject: "PC", verb: "alerts", predicate: "rains" }. */


Token_a_partir_de = _* ("a partir de") {}

Lista_de_desacoplados = ( Lista_de_desacoplados_de_lista / Lista_de_desacoplados_de_objeto )

Lista_de_desacoplados_de_lista = _*
  ( SIMBOLO_ABRIR_LISTA _* )
  item:Item_desacoplado_de_lista_1 
  items:Items_desacoplados_de_lista_n*
  ( _* SIMBOLO_CERRAR_LISTA )
    { return "[ " + item + (items ? items : "") + " ]" }

Item_desacoplado_de_lista_1 = _*
  item:Etiqueta_de_variable_simple
  defecto:Subsentencia_o_en_su_defecto?
    { return item + (defecto ? defecto : '') }
Items_desacoplados_de_lista_n =
  items:Item_desacoplado_de_lista_n+
    { return items.join("") }
Item_desacoplado_de_lista_n = _* SIMBOLO_DE_COMA _*
  item:Etiqueta_de_variable_simple
  defecto:Subsentencia_o_en_su_defecto?
    { return ", " + item + (defecto ? defecto : '') }

Lista_de_desacoplados_de_objeto = _*
  ( SIMBOLO_ABRIR_BLOQUE _* )
  item:Item_desacoplado_de_objeto_1 
  items:Items_desacoplados_de_objeto_n?
  ( _* SIMBOLO_CERRAR_BLOQUE )
    { return "{ " + item + (items ? items : "") + "\n}" }

Item_desacoplado_de_objeto_1 =
  item:Etiqueta_de_variable_simple
  como:Subsentencia_como_etiqueta?
  defecto:Subsentencia_o_en_su_defecto?
    { return item + (como ? ": " + como : "") + (defecto ? defecto : ''); }
Items_desacoplados_de_objeto_n =
  items:Item_desacoplado_de_objeto_n+
    { return ", " + items.join(", ") }
Item_desacoplado_de_objeto_n = _* SIMBOLO_DE_COMA _*
  item:Item_desacoplado_de_objeto_1
  como:Subsentencia_como_etiqueta?
  defecto:Subsentencia_o_en_su_defecto?
    { return item + (como ? ": " + como : "") + (defecto ? defecto : '') }

Subsentencia_como_etiqueta = ( _+ "como" _+ ) etiqueta:Etiqueta_de_variable_simple { return etiqueta }

Token_desacoplo = ( "Desacoplo" / "desacoplo" )

Sentencia_de_retorno = _*
  Token_retorno
  valor:(_+ Generativa)?
    { return "return" + (valor ? " " + valor[1] : "") + ";" }

Sentencia_de_asigno = _*
  Token_asigno _*
  nombre:Acceso_a_variable
  Token_como_o_igual
  valor:Generativa
    { return nombre + " = " + valor + ";" }

Sentencia_de_hago = _*
  Token_hago _*
  llamada:Generativa
    { return llamada + ";" }

Sentencia_de_compruebo = _*
  Token_compruebo_que _*
  comprobacion:Generativa
  lanzando:Subsentencia_lanzando?
    { return 'if(!(' + comprobacion + ')) throw ' + (lanzando ? lanzando : getErrorToCode(text(), location())) + ';' }

Sentencia_de_intento = _*
  Token_intento
  bloque:Subsentencia_donde_sin_parentesis
  error:Subsentencia_en_errores?
    { return fromBlockAndCatchToCode(bloque, error, true) }

Sentencia_de_ejecuto_comando_de_consola = _* ("Ejecuto"/"ejecuto")
  asincronamente:(_+ Token_asincronamente)? _+
  generativa:Generativa_de_un_comando_de_consola
    { return `${ asincronamente ? "await " : "" }${generativa};` }

Sentencia_de_inicio_proyecto_npm = _*
  asincronamente:Token_inicio_proyecto_npm _*
  desde:( ( "desde directorio" _* ) Generativa )? _* "con" _+
  generativa:Generativa
    { return `${ asincronamente ? "await " : "" }Castelog.metodos.un_proyecto_npm(${generativa}, ${desde ? desde[1] : 'undefined'}, ${asincronamente ? "true" : "false"});` }

Token_inicio_proyecto_npm = ("Inicio"/"inicio")
  asincronamente:(_+ Token_asincronamente)? _+ ("proyecto NPM" / "proyecto npm")
    { return asincronamente }

Sentencia_de_defino = _* ( "Defino" / "defino" )
  asincronamente:(_+ Token_asincronamente)?
  tipo:(" constante" / " variable")? _+
  nombre:Etiqueta_de_variable _+ "como" _+
  generativa:Generativa
    { return `${(tipo && (tipo === ' variable')) ? 'let' : 'const'} ${nombre} = ${asincronamente ? '(await ' : ''}${generativa}${asincronamente ? ')' : ''};` }

Sentencia_de_redefino = _* ( "Redefino" / "redefino" )
  asincronamente:(_+ Token_asincronamente)? _+
  nombre:Acceso_a_variable _+ "como" _+
  generativa:Generativa
    { return `${nombre} = ${asincronamente ? '(await ' : ''}${generativa}${asincronamente ? ')' : ''};` }

Sentencia_de_elimino_directorio = _* ("Elimino" / "elimino")
  asincronamente:(_+ Token_asincronamente)?
  recursivamente:(_+ Token_recursivamente)? _+ "directorio" _+
  directorio:Generativa
    { return `${asincronamente ? "await require('fs').promises.rmdir" : "require('fs').rmdirSync"}(${directorio}, { recursive: ${recursivamente ? "true" : "false"} });` }

Token_recursivamente = _* "recursivamente" {}

Sentencia_de_genero_directorio = _* ("Genero" / "genero")
  asincronamente:(_+ Token_asincronamente)?
  recursivamente:(_+ Token_recursivamente)? _+ "directorio" _+
  directorio:Generativa
    { return `${asincronamente ? "await require('fs').promises.mkdir" : "require('fs').mkdirSync"}(${directorio});` }

Sentencia_de_elimino_fichero = _* ("Elimino" / "elimino")
  asincronamente:(_+ Token_asincronamente)? _+ "fichero" _+
  fichero:Generativa
    { return `${asincronamente ? "await require('fs').promises.unlink" : "require('fs').unlinkSync"}(${fichero});` }

Sentencia_de_genero_fichero = _* ("Genero" / "genero")
  asincronamente:(_+ Token_asincronamente)? _+ "fichero" _+
  fichero:Generativa
  codificacion:Subsentencia_con_codificacion?
  contenido:Subsentencia_con_contenido
    { return `${asincronamente ? "await require('fs').promises.writeFile" : "require('fs').writeFileSync"}(${fichero}, ${contenido}, ${codificacion});` }

Sentencia_de_importo_api_nativa = _*
  ( "Importo API nativa" / "Importo api nativa" / "importo api nativa" )
    { return lib_source_code + "\n"; }

Sentencia_de_importo_jquery = _*
  ( "Importo jQuery" / "importo jquery" / "importo jQuery" )
    { return jquery_source_code + "\n"; }

Sentencia_de_importo = (Sentencia_de_importo_modulo_universal / Sentencia_de_importo_modulo_tipico)
Sentencia_de_importo_modulo_universal = _*
  ( "Importo módulo universal estándar" / "importo módulo universal estándar" )
  llamado:Subsentencia_llamado
  creando:Subsentencia_creando_o_asignando?
  errores:Subsentencia_en_errores_como_funcion?
    { return `${creando ? creando : ""}Castelog.metodos.una_importacion_de_modulo_universal_estandar(${llamado}, ${errores});`}

Sentencia_de_importo_modulo_tipico = _*
  Token_importo _+
  tipo:Token_modulo_tipo _+
  nombre:Subsentencia_de_nombre?
  ruta:Subsentencia_de_ruta
  cacheado:Subsentencia_cacheado_en?
  creando:Subsentencia_creando_o_asignando?
  errores:Subsentencia_en_errores_como_funcion?
    { return generate_import_module_expression(tipo, nombre, ruta, cacheado, creando, errores) }

Subsentencia_de_ruta = _* Token_de_ruta _+ ruta:Generativa { return ruta }
Subsentencia_creando_o_asignando = (Subsentencia_asignando / Subsentencia_creando / Subsentencia_a )
Subsentencia_asignando = ( _* "asignando" _+ ) ref:Acceso_a_variable { return ref + ' = ' }
Subsentencia_creando = ( _* "creando" ) tp:(_+ ("constante" / "variable"))? _+ ref:Acceso_a_variable { return ( tp ? tp[1] === 'variable' ? 'let ' : 'const ' : '' ) + ref + ' = '}
Subsentencia_a = ( _* "a" ) tp:(_+ ("constante" / "variable"))? _+ ref:Acceso_a_variable { return ( tp ? tp[1] === 'variable' ? 'let ' : 'const ' : '' ) + ref + ' = '}
Subsentencia_a_generativa = ( _* "a" _+ ) generativa:Generativa { return generativa }
Subsentencia_cacheado_en = _* Token_cacheado_en _+ id:Generativa { return id }
Subsentencia_de_nombre = _* Token_de_nombre _+ etiqueta:Generativa { return etiqueta }

Token_de_nombre = "de nombre"

Sentencia_de_exporto = (Sentencia_de_exporto_como_modulo / Sentencia_de_exporto_modulo_universal)
Sentencia_de_exporto_modulo_universal = _*
  ( "Exporto módulo universal estándar" / "exporto módulo universal estándar" )
  llamado:Subsentencia_llamado
  a_partir_de:Subsentencia_a_partir_de
    { return `Castelog.metodos.una_exportacion_de_modulo_universal_estandar(${llamado}, ${a_partir_de}, (typeof __dirname !== 'undefined') ? __dirname : undefined, (typeof process !== 'undefined') ? process.cwd() : undefined);`}

Sentencia_de_exporto_como_modulo = _*
  Token_exporto _+ "como" _+
  tipo:Token_modulo_tipo _+
  valor:Generativa
  cacheado:Subsentencia_cacheado_en?
    { return generate_export_module_expression(valor, tipo, cacheado) }

Subsentencia_en_errores_como_funcion = _*
  Token_en_errores _*
  con:(Subsentencia_con_para_parametros_definidos)?
  bloque:Bloque
    { return (con ? con : "error") + ' => {\n' + bloque + '}'; }
Subsentencia_en_errores = _*
  Token_en_errores _*
  con:(
    ( Token_con _+ )
    ( Etiqueta_de_variable )
  )?
  bloque:Bloque
  finalmente:((_* Token_finalmente _*) Bloque )?
    { return 'catch(' + (con ? con[1] : "error") + ') {\n' + bloque + '}' + (finalmente ? (' finally {' + finalmente[1] + '}') : ''); }

Sentencia_de_lanzo = _*
  Token_lanzo _*
  generativa:Generativa
    { return "throw " + generativa + ";" }

Sentencia_de_debugo = _* Token_debugo _+ generativa:Generativa
    { return "console.log('[DEBUG]', " + generativa + ");" }

Sentencia_de_derivo = _* Token_derivo
  con:Subsentencia_con?
    { return "super" + (con ? con : "()") }

Token_derivo = ("Derivo" / "derivo") {}

Sentencia_de_ignoro_que = _* ("Ignoro que" / "ignoro que") _*
  bloque:Bloque
    { return "/////////////////////////\n// Ignorado por Castelog:\n// " + bloque.replace(/\n/g, "\n// ") + "\n" }

Sentencia_de_imprimo = Sentencia_de_imprimo_1
Sentencia_de_imprimo_1 = _*
  Token_imprimo _+ generativa:Generativa
    { return "console.log(" + generativa + ");" }
Sentencia_de_imprimo_2 = _*
  ":>" contenido:Contenido_de_plantilla  ("<:")
    { return '\n$plantilla += (' + reduce_plantilla(contenido) + ')((typeof config === "object") ? config : {}, (typeof settings === "object") ? settings : {})'; }

Sentencia_de_incremento = _*
  sentido:( Token_incremento / Token_decremento ) _*
  referencia:Acceso_a_variable
  variacion:( Token_en Generativa )?
    { return referencia + sentido + (variacion ? variacion[1] : "1") + ";" }

Sentencia_de_interrumpo = _*
  sentido:( Token_interrumpo / Token_continuo )
  ( _+ "proceso")?
  referencia:( _+ Etiqueta_de_variable)?
    { return sentido + (referencia ? (" " + referencia[1]) : "") + ";" }

Subsentencia_en_proceso = _*
  Token_en_proceso _*
  etiqueta:Etiqueta_de_variable _* "donde" _*
    { return etiqueta + ":\n"}

Sentencia_de_desde = _*
  etiqueta:Subsentencia_en_proceso?
  ( Token_desde _+ )
  desde:Generativa _*
  ( Token_hasta _+ )
  hasta:Generativa
  usando:(
    ( _+ Token_usando _+  )
    ( Etiqueta_de_variable )
  )? _*
  bloque:Bloque 
    { return fromLoopDataToCode(etiqueta, desde, hasta, usando, bloque) }

Sentencia_de_apendizo_y_prependizo = _*
  movimiento:("Apendizo" / "apendizo" / "Prependizo" / "prependizo" ) _*
  item:Generativa
  _* "en" _+
  lista:Generativa
    { return `${lista}.${(movimiento.toLowerCase() === "apendizo") ? "push" : (movimiento.toLowerCase() === "prependizo") ? "unshift" : "concat" }(${item})` }


Sentencia_de_en_proceso = _* ( "En proceso" / "en proceso" ) _*
  nombre:Etiqueta_de_variable
  bloque:Bloque_multilinea
    { return `${nombre ? nombre + ":" : "" } {\n${bloque}}\n` }

Sentencia_de_reseteo_directorio = Subsentencia_reseteo_directorio

Subsentencia_reseteo_directorio = _*
  asincronamente:(Subsentencia_reseteo_directorio_1 / Subsentencia_reseteo_asincronamente_directorio_1 ) _*
  directorio:Generativa
    { return `${asincronamente ? 'await ' : ''}Castelog.metodos.un_reseteo_de_directorio(${directorio}, ${asincronamente ? 'true' : 'false'})` }

Subsentencia_reseteo_directorio_1 = _* ("Reseteo directorio" / "reseteo directorio") { return false }
Subsentencia_reseteo_asincronamente_directorio_1 = _* (("Reseteo" _+ Token_asincronamente _+ "directorio") / ("reseteo" _+ Token_asincronamente _+ "directorio")) { return true }

Sentencia_de_sirvo_ficheros_estaticos = _* ("Sirvo ficheros estáticos" / "sirvo ficheros estáticos") 
  con:Subsentencia_con_sin_parentesis?
  errores:Subsentencia_en_errores_como_funcion?
  ficherosNoEncontrados:Subsentencia_en_ficheros_no_encontrados_como_funcion?
  otrosCasos:Subsentencia_en_otros_casos_como_funcion?
    { return `Castelog.metodos.un_servicio_de_ficheros_estaticos(${con ? con : "undefined"}, ${errores ? errores : "undefined"}, ${ficherosNoEncontrados ? ficherosNoEncontrados : "undefined"}, ${otrosCasos ? otrosCasos : "undefined"})` }

Subsentencia_en_otros_casos_como_funcion = _* "en otros casos" _+ 
  asincronamente:(Token_asincronamente _+)?
  bloque:Bloque
    { return `${asincronamente ? "async " : ""}() => {\n${bloque}\n}` }

Subsentencia_en_ficheros_no_encontrados_como_funcion = _* "en ficheros no encontrados" _+
  asincronamente:(Token_asincronamente _+)?
  bloque:Bloque
    { return `${asincronamente ? "async " : ""}() => {\n${bloque}\n}` }

Subsentencia_con_sin_parentesis = _* "con" _+ generativa:Generativa { return generativa }

Sentencia_de_no_hago_nada = _* ("no hago nada" / "No hago nada") { return JSON.stringify("Sentencia de no hacer nada") + ";" }

Sentencia_Seccionacion = _* seccion:Sentencia_Seccionacion_interno { return seccion }

Hasta_fin_de_sentencia_linea_o_fichero = ((!EOSLF) .)* { return text() }
Hasta_fin_de_linea_o_fichero = ((!EOLF) .)* { return text() }
EOSLF = (EOS EOLF)
EOLF = (EOL/EOF)

OBR = SIMBOLO_ABRIR_BLOQUE {}
Titulo_de_seccion = ((!CBR_FEOS) .)* { return text().trim() }
FEOS = (EOS (EOL/EOF)) {}
CBR = SIMBOLO_CERRAR_BLOQUE {}
CBR_FEOS = CBR FEOS {}

Sentencia_Seccionacion_interno = ("@SECCIÓN" / "@sección" / "@Sección") ":"? _*
  titulo:Hasta_fin_de_linea_o_fichero EOLF
    { return "\n// [castelog:seccionable] Esto es una sección del documento: " + titulo + "" }

Sentencia_Documentacion = _* documentacion:Sentencia_Documentacion_interno { return documentacion }

Sentencia_Documentacion_interno = ("@DOCUMENTACIÓN" / "@documentación" / "@Documentación") ":"?
  contenido:Contenido_de_punto_de_documentacion
    { return "\n// [castelog:documentable] Esto es documentación del documento: \n" + contenido + "" }

Contenido_de_punto_de_documentacion =
  contenido:Contenido_de_punto_de_documentacion_unilinea*
    { return "/**\n * " + (contenido || []).join("\n * ") + "\n */" }
Contenido_de_punto_de_documentacion_unilinea = __* __* 
  linea:( Subsentencia_punto_sobre / Subsentencia_punto_biespacio )
    { return linea }
Subsentencia_punto_sobre = ( "· Sobre " / "· sobre " )  contenido:Hasta_fin_de_linea_o_fichero { return "@" + contenido }
Subsentencia_punto_biespacio = ( "·  " )  contenido:Hasta_fin_de_linea_o_fichero { return contenido }


Sentencia_de_elimino_propiedad = _* ( "Elimino propiedad" / "elimino propiedad" ) _*
  prop:Acceso_a_variable
    { return `delete ${prop};`}

Sentencia_de_itero = _*
  etiqueta:Subsentencia_en_proceso?
  tipo:("Itero como objeto" / "itero como objeto" / "Itero como lista" / "itero como lista") _*
  generativa:Generativa
  usando:Subsentencia_usando_o_creando
  donde:Subsentencia_donde_sin_parentesis
    { return `${ etiqueta ? etiqueta : ''}for(${usando.replace(/ = $/g, "")} ${tipo.toLowerCase() === "itero como objeto" ? "in" : "of" } ${generativa}) {\n${donde}}\n`; }
Subsentencia_usando_o_creando = (Subsentencia_usando / Subsentencia_creando_2)
Subsentencia_usando = _* "usando" _* generativa:Acceso_a_variable { return generativa }
Subsentencia_creando_2 = creando:Subsentencia_creando { return creando }

Sentencia_de_conecto_sistema_rest = _* ("Conecto" / "conecto") _*
  asincronamente:(_* Token_asincronamente _*)?
  objetivo:( "un sistema rest" / "un sistema REST" )
  tipo:( (_* "tipo" _*) Generativa )?
  configuraciones:( (_* "configurado con" _*) Generativa )?
  configuracionesServer:( (_* "con server configurado con" _*) Generativa )?
  donde:( (_* "donde" _*) Bloque )?
  error:Subsentencia_en_errores_como_funcion?
  creando:Subsentencia_creando_o_asignando?
    { return (creando ? creando : "") + (asincronamente ? "await " : "") + `Castelog.metodos.un_sistema_rest(${configuraciones ? configuraciones[1] : "{}"}, ${configuracionesServer ? configuracionesServer[1] : "{}"}, ${donde ? ("async (RestAPI) => {\n" + donde[1] + "\n}") : "null"}, ${tipo ? tipo[1] : JSON.stringify("default")}, ${error});` }

Sentencia_de_conecto_base_de_datos = _* ("Conecto" / "conecto") _*
  asincronamente:(_* Token_asincronamente _*)?
  objetivo:( Token_una_base_de_datos / Token_una_pool_de_bases_de_datos )
  tipo:( (_* "tipo" _*) Generativa )?
  configuraciones:( (_* "configurada con" _*) Generativa )?
  creando:Subsentencia_creando_o_asignando?
  error:Subsentencia_en_errores_como_funcion?
    { return (creando ? creando : "") + (asincronamente ? "await " : "") + `Castelog.metodos.una_conexion_de_base_de_datos(${configuraciones ? configuraciones[1] : "{}"}, ${tipo ? tipo[1] : JSON.stringify("simplestdb")}, ${error}, ${objetivo});` }

Sentencia_de_selecciono = _* ("Selecciono" / "selecciono")
  asincronamente:(_* Token_asincronamente _*)?
  seleccion:Subsentencias_de_una_seleccion
  creando:Subsentencia_creando_o_asignando?
    { return (creando ? creando : "") + (asincronamente ? "await " : "") + seleccion + ";" }
Sentencia_de_inserto = _* ("Inserto" / "inserto")
  asincronamente:(_* Token_asincronamente _*)?
  insercion:Subsentencias_de_una_insercion
  creando:Subsentencia_creando_o_asignando?
    { return (creando ? creando : "") + (asincronamente ? "await " : "") + insercion + ";" }
Sentencia_de_actualizo = _* ("Actualizo" / "actualizo")
  asincronamente:(_* Token_asincronamente _*)?
  actualizacion:Subsentencias_de_una_actualizacion
    { return (asincronamente ? "await " : "") + actualizacion + ";" }
Sentencia_de_elimino = _* ("Elimino" / "elimino")
  asincronamente:(_* Token_asincronamente _*)?
  eliminacion:Subsentencias_de_una_eliminacion
    { return (asincronamente ? "await " : "") + eliminacion + ";" }



Generativa_de_una_seleccion_de_base_de_datos = _*
  Token_una_seleccion _*
  seleccion:Subsentencias_de_una_seleccion
    { return seleccion }
Subsentencias_de_una_seleccion = _*
  objetivo:("a un ítem"/"a varios ítems"/"al último ítem"/"al primer ítem")? _*
  modelo:Subsentencia_en_modelo
  filtrando:Subsentencia_filtrando_por?
  ordenando:Subsentencia_ordenando_por?
  agrupando:Subsentencia_agrupando_por?
  paginando:Subsentencia_paginando_por?
  bd:Subsentencia_en_base_de_datos?
  adaptador:Subsentencia_usando_adaptador?
    { return `Castelog.metodos.una_seleccion_de_base_de_datos(${modelo}, ${filtrando}, ${ordenando}, ${agrupando}, ${paginando}, ${bd}, ${adaptador ? adaptador : "undefined"}, ${JSON.stringify(objetivo)})` }

Subsentencia_filtrando_por = (_* "filtrando por" _*) generativa:Generativa { return generativa }
Subsentencia_ordenando_por = (_* "ordenando por" _*) generativa:Generativa { return generativa }
Subsentencia_agrupando_por = (_* "agrupando por" _*) generativa:Generativa { return generativa }
Subsentencia_paginando_por = (_* "paginando por" _*) generativa:Generativa { return generativa }
Subsentencia_en_base_de_datos = (_* "en base de datos" _*) generativa:Generativa { return generativa }
Subsentencia_usando_adaptador = (_* "usando adaptador" _*) generativa:Generativa { return generativa }

Generativa_de_una_insercion_de_base_de_datos = _*
  Token_una_insercion
  insercion:Subsentencias_de_una_insercion
    { return insercion }
Subsentencia_de = _* "de" _* generativa:Generativa { return generativa }
Subsentencia_en_modelo = _* "en modelo" _* generativa:Generativa { return generativa }
Subsentencias_de_una_insercion = _*
  objetivo:("a un ítem"/"a varios ítems"/"a tabla"/"a columna"/"a base de datos"/"a script de base de datos")? _*
  modelo:Subsentencia_en_modelo?
  valor:(Subsentencia_con_valores/Subsentencia_con_valor)
  bd:Subsentencia_en_base_de_datos?
  adaptador:Subsentencia_usando_adaptador?
    { return `Castelog.metodos.una_insercion_de_base_de_datos(${modelo}, ${valor}, ${bd}, ${adaptador ? adaptador : "undefined"}, ${JSON.stringify(objetivo)})` }

Generativa_de_una_actualizacion_de_base_de_datos = _*
  Token_una_actualizacion _*
  actualizacion:Subsentencias_de_una_actualizacion
    { return actualizacion }
Subsentencias_de_una_actualizacion = _*
  objetivo:("a un ítem"/"a varios ítems"/"a tabla"/"a columna")? _*
  modelo:Subsentencia_en_modelo?
  registro:(Subsentencia_con_registro/Subsentencia_filtrando_por)?
  valor:(Subsentencia_con_valores/Subsentencia_con_valor)
  bd:Subsentencia_en_base_de_datos?
  adaptador:Subsentencia_usando_adaptador?
    { return `Castelog.metodos.una_actualizacion_de_base_de_datos(${modelo}, ${registro}, ${valor}, ${bd}, ${adaptador ? adaptador : "undefined"}, ${JSON.stringify(objetivo)})` }
Subsentencia_con_registro = _* "con registro" _* generativa:Generativa { return generativa }

Generativa_de_una_eliminacion_de_base_de_datos = _*
  Token_una_eliminacion _*
  eliminacion:Subsentencias_de_una_eliminacion
    { return eliminacion }
Subsentencias_de_una_eliminacion = _*
  objetivo:("a un ítem"/"a varios ítems"/"a tabla"/"a columna"/"a base de datos")? _*
  modelo:Subsentencia_en_modelo?
  registro:(Subsentencia_con_registro/Subsentencia_filtrando_por)?
  bd:Subsentencia_en_base_de_datos?
  adaptador:Subsentencia_usando_adaptador?
    { return `Castelog.metodos.una_eliminacion_de_base_de_datos(${modelo}, ${registro}, ${bd}, ${adaptador ? adaptador : "undefined"}, ${JSON.stringify(objetivo)})` }

Token_una_base_de_datos = "una base de datos" { return "undefined" }
Token_una_pool_de_bases_de_datos = "una pool de bases de datos" { return JSON.stringify("pool") }
Token_una_seleccion = "una selección" 
Token_una_insercion = "una inserción"
Token_una_actualizacion = "una actualización"
Token_una_eliminacion = "una eliminación"

Sentencia_de_cacheo = _* ("Cacheo" / "cacheo") _+
  cacheo:Subsentencias_de_cacheo
  creando:Subsentencia_creando_o_asignando?
    { return (creando ? creando : "") + cacheo }

Sentencia_de_leo_fichero = _* ("Leo fichero" / "leo fichero")
  lectura:Subsentencias_de_lectura_de_fichero
  creando:Subsentencia_creando_o_asignando?
    { return (creando ? creando : "") + lectura }

Sentencia_de_escribo_fichero = _* ("Escribo fichero" / "escribo fichero")
  escritura:Subsentencias_de_escritura_de_fichero
    { return escritura }

Sentencia_de_notifico = _* ( "Notifico" / "notifico" ) _*
  asincronamente:Token_asincronamente?
  mensaje:Subsentencia_con_mensaje
    { return `${ asincronamente ? " await " : "" }Castelog.metodos.una_notificacion(${mensaje})` }

Sentencia_de_pregunto = _* ( "Pregunto" / "pregunto" ) _*
  asincronamente:Token_asincronamente?
  pregunta:Subsentencia_de_pregunta
  creando:Subsentencia_creando_o_asignando?
    { return (creando ? creando : "") + ( asincronamente ? " await " : "" ) + pregunta }

Subsentencia_hasta_que = _* "hasta que" _* bloque:(Generativa) { return `(resultado => ${bloque})` }
Subsentencia_por_defecto = _* "por defecto" _* generativa:(Generativa) { return `${generativa}` }

Sentencia_de_confirmo = _* ( "Confirmo" / "confirmo" ) _*
  asincronamente:Token_asincronamente?
  mensaje:Subsentencia_con_mensaje
  creando:Subsentencia_creando_o_asignando?
    { return (creando ? creando : "") + ( asincronamente ? " await " : "" ) + `Castelog.metodos.una_confirmacion(${mensaje})` }

Subsentencia_con_mensaje = _* "con mensaje" _* generativa:Generativa { return generativa }

Etiqueta_de_variable = ( Etiqueta_de_variable_simple / Etiqueta_de_variable_compuesta )
Etiqueta_de_variable_simple = [A-Za-z_$] [A-Za-z0-9_$]* { return text() }
Etiqueta_de_variable_compuesta = "«" (Etiqueta_de_variable_simple / " ")+ "»" { return fromComplexIdToSimple(text()) }
Acceso_a_variable = (Acceso_a_variable_2 / Acceso_a_variable_1)
Acceso_a_variable_1 = 
  variable_1:Etiqueta_de_variable
  variable_n:Accesorio_a_variable*
    { return [variable_1].concat(variable_n).join("") }
Accesorio_a_variable = ( Accesorio_a_variable_por_etiqueta / Accesorio_a_variable_por_valor )
Accesorio_a_variable_por_etiqueta = _* SIMBOLO_DE_PUNTO_PARA_ACCESO_A_VARIABLE id:Etiqueta_de_variable { return "." + id }
Accesorio_a_variable_por_valor = SIMBOLO_ABRIR_LISTA _* id:Generativa _* SIMBOLO_CERRAR_LISTA { return "[ " + id + " ]" }
Accesorio_a_variable_llamable = acc:Accesorio_a_variable params:Parametros_llamados? { return acc + (params || "") }
Acceso_a_variable_2 = Generativa_de_una_global


Token_creo = ("Creo" / "creo")
Token_si = ("Si" / "si")
Token_pero_si = ("Pero si" / "pero si")
Token_y_si_no = ("Y si no" / "y si no"/"Aunque si no"/"aunque si no")
Token_mientras = ("Mientras" / "mientras")
Token_variable_o_constante = ("variable" / "constante") _* { return text().trim() }
Token_como_o_igual = (( _* "como" _* ) / ( _* "=" _* ))
Token_retorno = ("Retorno" / "retorno")
Token_donde = ("donde")
Token_con = ("con")
Token_asigno = ("Asigno" / "asigno")
Token_hago = ("Hago" / "hago")
Token_asincrona = ("asíncrona"/"~")
Token_imprimo = ("Imprimo" / "imprimo")
Token_debugo = ("Debugo" / "debugo")
Token_compruebo_que = ("Compruebo" / "compruebo") (_* "que")?
Token_lanzando = ("lanzando")
Token_intento = ("Intento" / "intento" / "Un intento" / "un intento")
Token_en_errores = ("En errores" / "en errores")
Token_finalmente = ("Finalmente" / "finalmente")
Token_cuando = ("cuando")
Token_si_no = ("si no")
Token_entonces = ("entonces")
Token_lanzo = ("Lanzo" / "lanzo")
Token_exporto_modulo = ("Exporto módulo" / "exporto módulo")
Token_un_nuevo = ("un nuevo" / "una nueva")
Token_una_clase = ("una clase")
Token_una_promesa = ("una promesa")
Token_un_hecho = ("un hecho")
Token_una_espera = ("una espera")
Token_de_metodo_estatico = ("Método estático" / "método estático")
Token_de_metodo_dinamico = ("Método" / "método")
Token_de_propiedad_estatica = ("Propiedad estática" / "propiedad estática")
Token_de_propiedad_dinamica = ("Propiedad" / "propiedad")
Token_asincrono = ("asíncrono"/"~")
Token_que_extiende_de = ("que extiende" (_* "de")?)
Token_en_proceso = ("En proceso" / "en proceso")
Token_continuo = ("Continúo" / "continúo") { return "continue" }
Token_interrumpo = ("Interrumpo" / "interrumpo") { return "break" }
Token_decremento = ("Decremento" / "decremento") { return " -= " }
Token_incremento = ("Incremento" / "incremento") { return " += " }
Token_en = ( _* "en" _* ) 
Token_desde = ("Desde" / "desde")
Token_hasta = "hasta"
Token_usando = "usando"
Token_asincronamente = ("asíncronamente"/"~")
Token_de_ruta = "de ruta"
Token_importo = ("Importo" / "importo")
Token_exporto = ("Exporto" / "exporto")
Token_modulo_tipo = ("módulo es6" / "módulo es5 fresco" / "módulo es5" / "módulo nativo" / "módulo universal estándar")
Token_tags_tipo = ( "script tag" / "style tag" )
Token_cacheado_en = ( "cacheado en" )
Token_un_modulo_importado = "un " tipo:Token_modulo_tipo " importado" { return tipo }
Token_un_modulo_exportado = "un " tipo:Token_modulo_tipo " exportado" { return tipo }

Generativa = generativa:(Generativa_con_operaciones / Generativa_sin_operaciones) { return generativa }

Generativa_sin_operaciones = operacion:(Generativa_entre_parentesis / Generativa_simple) { return operacion }

Generativa_con_operaciones = 
  prependices:Prependice_de_generativa*
  generativa:Generativa_sin_operaciones
  apendices:Apendice_de_generativa*
    { return reduceGenerative(prependices, generativa, apendices) }

Generativa_entre_parentesis = SIMBOLO_ABRIR_GRUPO _* generativa:Generativa _* SIMBOLO_CERRAR_GRUPO
    { return "( " + generativa + " )" }

Generativa_de_numero = (Generativa_de_numero_1 / Generativa_de_numero_2)
Generativa_de_numero_1 = [0-9]+ ("." [0-9]+ )? { return text() }
Generativa_de_numero_2 = SIMBOLO_ABRIR_NÚMERO (!(SIMBOLO_CERRAR_NÚMERO).)+ SIMBOLO_CERRAR_NÚMERO { return `Castelog.metodos.un_numero_textual(${JSON.stringify(text().trim().replace(/^inicionúmero/g,"").replace(/oknúmero$/g,""))})` }
Generativa_de_texto = (Generativa_de_texto_1 / Generativa_de_texto_2 / Generativa_de_texto_3 / Generativa_de_texto_4)
Generativa_de_texto_1 = "'" [^']* "'" { return text() }
Generativa_de_texto_2 = '"' [^"]* '"' { return text() }
Generativa_de_texto_3 = "`" [^`]* "`" { return text() }
Generativa_de_texto_4 = _* SIMBOLO_ABRIR_TEXTO contenido:Contenido_de_texto_1 SIMBOLO_CERRAR_TEXTO { return JSON.stringify(contenido.trim()) }

Contenido_de_texto_1 = (!(SIMBOLO_CERRAR_TEXTO).)* { return text() }

Generativa_de_un_objeto = ( Generativa_objeto_1 / Generativa_objeto_2 )
Generativa_objeto_1 = _* ("un objeto") generativa:Subsentencia_con_para_objeto? { return generativa }
Generativa_objeto_2 = _* SIMBOLO_ABRIR_BLOQUE _* items:Lista_de_propiedades_de_objeto? _* SIMBOLO_CERRAR_BLOQUE { return "{ " + (items ? items : "") + "\n}" }
Subsentencia_con_para_objeto = _* "con"? _* generativa:Generativa_objeto_2 { return generativa }

Generativa_de_un_array = ( Generativa_un_array_1 / Generativa_un_array_2 )
Generativa_un_array_1 = ("una lista") generativa:Subsentencia_con_para_array? { return generativa ? generativa : "[ ]" }
Generativa_un_array_2 = SIMBOLO_ABRIR_LISTA items:Lista_de_items_de_array? _* SIMBOLO_CERRAR_LISTA { return "[ " + (items ? items : "") + " ]" }
Subsentencia_con_para_array = _* "con"? _* generativa:Generativa_un_array_2 { return generativa }

Generativa_de_una_pregunta = 
  _* "una pregunta" _*
  pregunta:Subsentencia_de_pregunta
    { return pregunta; }

Subsentencia_de_pregunta = 
  mensaje:Subsentencia_con_mensaje
  defecto:Subsentencia_por_defecto?
  hasta:Subsentencia_hasta_que?
  silenciosa:(_* "silenciosamente")?
    { return `Castelog.metodos.una_pregunta(${ mensaje }, ${ defecto }, ${silenciosa ? "true" : "false"}, ${ hasta })`}

Generativa_de_un_valor_aleatorio = _* "un valor aleatorio de" _+
  lista:Generativa
    { return `Castelog.metodos.un_valor_aleatorio(${lista})` }

Generativa_de_un_texto_aleatorio = _* "un texto aleatorio de" _+ 
  longitud:Generativa _* "caracteres" 
  base:((_+ "basado en" _+) Generativa)?
    { return `Castelog.metodos.un_texto_aleatorio(${longitud}, ${base ? base[1] : "undefined"})` }

Token_es_mayor_o_igual_que = "es mayor o igual que" { return ">=" }
Token_es_menor_o_igual_que = "es menor o igual que" { return "<=" }
Token_es_mayor_que = "es mayor que" { return ">" }
Token_es_menor_que = "es menor que" { return "<" }
Token_es_igual_que = "es igual que" { return "=" }
Token_es_diferente_de = "es diferente de" { return "!=" }
Token_es_nulo = "es nulo" { return "=null" }
Token_contiene = "contiene" { return "has" }
Token_esta_contenido_en = "está contenido en" { return "in" }

Token_no_es_mayor_o_igual_que = "no es mayor o igual que" { return "<" }
Token_no_es_menor_o_igual_que = "no es menor o igual que" { return ">" }
Token_no_es_mayor_que = "no es mayor que" { return "<=" }
Token_no_es_menor_que = "no es menor que" { return ">=" }
Token_no_es_igual_que = "no es igual que" { return "!=" }
Token_no_es_diferente_de = "no es diferente de" { return "=" }
Token_no_es_nulo = "no es nulo" { return "=null" }
Token_no_contiene = "no contiene" { return "!has" }
Token_no_esta_contenido_en = "no está contenido en" { return "!in" }

Generativa_de_un_testeo = _* "un testeo"
  llamado:((_+ "llamado" _+ ) Generativa)? 
  (_+ "que en menos de" _+ )
  tiempo:Generativa
  unidad:( _* unidad_de_tiempo_para_milisegundos) _* "pase los tests" _+
  generativa:Generativa
  exito:Subsentencia_en_exito_como_funcion?
  error:Subsentencia_en_errores_como_funcion?
    { return `Castelog.metodos.un_testeo(${tiempo}${unidad ? unidad[1] : ''}, ${llamado ? llamado[1] : "undefined"}, ${generativa}, ${exito ? exito : 'undefined'}, ${error ? error : 'undefined'})` }

Subsentencia_en_exito_como_funcion = _* "en éxito" _*
  parametros:Subsentencia_con_para_parametros_definidos?
  exito:Bloque
    { return `${ !!parametros ? parametros : "()" } => {${exito}}`; }

Generativa_de_un_test = _* "un test llamado" _+ 
  nombre:Generativa 
  testeo:(( _* "para testeo" _+ ) Generativa )?
  bloque:Subsentencia_donde_sin_parentesis
  exito:Subsentencia_en_exito_como_funcion?
  error:Subsentencia_en_errores_como_funcion?
    { return `Castelog.metodos.un_test(${nombre}, async () => {\n${bloque}\n}, ${testeo ? testeo[1] : 'undefined'}, ${exito ? exito : 'undefined'}, ${error ? error : 'undefined'})` }

Generativa_de_una_aplicacion_sintactica_universal = _* "una aplicación sintáctica universal"
  configuracion:Subsentencia_configurada_con_para_generativa_unica?
  generativa:Subsentencia_con_para_generativa_unica
    { return `Castelog.metodos.una_aplicacion_sintactica_universal(${generativa}, ${configuracion})`; }

Generativa_de_un_punto_sintactico_universal = _* "un punto sintáctico universal"
  generativa:Subsentencia_con_para_generativa_unica
    { return `Castelog.metodos.un_punto_sintactico_universal(${generativa})`; }

Generativa_de_una_global = _* "una global llamada" _+
  nombre:Generativa
    { return `Castelog.variables.globales[${nombre}]` }

Generativa_de_un_codigo_en_texto = _* "un código en texto donde" _+
  codigo:Nuevo_bloque_en_texto
    { return codigo }

Generativa_de_un_codigo_en_js = _* "un código en js donde" _+
  codigo:Nuevo_bloque_en_js
    { return codigo }

Generativa_de_un_codigo_en_css = _* "un código en css" _+ ("con" _+)?
  codigo:Nuevo_bloque_en_css
    { return codigo }

Generativa_de_un_codigo_en_html = html:(Generativa_de_un_codigo_en_html_generico / Generativa_de_un_codigo_en_html5) { return html }
Generativa_de_un_codigo_en_html5 = _* "un código en html5" _+ ("con" _+)?
  codigo:Codigo_html_entre_parentesis
    { return JSON.stringify("<!DOCTYPE html>") + " + " + JSON.stringify(codigo) }
Generativa_de_un_codigo_en_html_generico = _* "un código en html" _+ ("con" _+)?
  codigo:Codigo_html_entre_parentesis
    { return JSON.stringify(codigo) }

Generativa_de_un_formateo_de_fecha = _* 
  tipo:("un formateo de texto a fecha" / "un formateo de fecha a texto") _*
  fecha:Subsentencia_a_partir_de
  formato:Subsentencia_con_formato?
    { return `Castelog.metodos.un_formateo_de_fecha(${fecha}, ${formato}, ${JSON.stringify(tipo)})` }

Subsentencia_con_formato = _* "con formato como" _+
  generativa:Generativa
    { return generativa }

Generativa_de_un_relleno_de_texto = _* "un relleno de texto" _*
  partir:Subsentencia_a_partir_de
  longitud:Subsentencia_con_longitud
  relleno:Subsentencia_con_relleno?
  principio:Subsentencia_por_el_principio_o_final?
    { return `Castelog.metodos.un_relleno_de_texto(${partir}, ${longitud}, ${relleno}, ${principio})` }

Subsentencia_con_longitud = _* "con longitud como" _+
  generativa:Generativa
    { return generativa }
Subsentencia_con_relleno = _* "con relleno como" _+
  generativa:Generativa
    { return generativa }
Subsentencia_por_el_principio_o_final = _* modo:( "por el principio" / "por el final" )
    { return modo === "por el principio" }

Generativa_de_un_dia_de_la_semana = _* "un día de la semana" _*
  base:Subsentencia_a_partir_de
    { return `Castelog.metodos.un_dia_de_la_semana(${base})` }

Generativa_de_un_nombre_de_mes = _* "un nombre de mes" _*
  base:Subsentencia_a_partir_de
    { return `Castelog.metodos.un_nombre_de_mes(${base})` }

Generativa_de_una_descripcion_del_entorno = _* "una descripción del entorno"
    { return "Castelog.metodos.una_descripcion_del_entorno()" }

Generativa_de_un_reseteo_de_directorio = _* "un reseteo de directorio" _+
  directorio:Generativa
    { return "Castelog.metodos.un_reseteo_de_directorio(" + directorio + " )" }

Bloque_en_texto = Bloque { return JSON.stringify(text().replace(/^[\n\t ]*\{|\}[\n\t ]*$/g, "")) }

Bloque_en_js = bloque:Bloque { return JSON.stringify(bloque) }

Generativa_de_una_confirmacion = 
  _* "una confirmación" _+ ( "con mensaje" _+ )?
  mensaje:Generativa
  pordefecto:( (_* "por defecto" _+) Generativa )?
    { return "Castelog.metodos.una_confirmacion(" + mensaje + ", " + (pordefecto ? pordefecto[1] : "false") + " )" }
  
Generativa_de_una_notificacion = 
  _* "una notificación" _+ ( "con mensaje" _+ )?
  mensaje:Generativa
    { return "Castelog.metodos.una_notificacion(" + mensaje + " )" }
  
Generativa_de_una_peticion_http = _* "una petición http"
  url:Subsentencia_con_url
  metodo:Subsentencia_con_metodo?
  cuerpo:Subsentencia_con_cuerpo?
  cabeceras:Subsentencia_con_cabeceras?
  cliente:Subsentencia_usando_cliente?
  errores:Subsentencia_en_errores_como_funcion?
    { return `Castelog.metodos.una_peticion_http(${url}, ${ metodo }, ${ cuerpo }, ${ cabeceras }, ${ cliente }, ${ errores })` }
Subsentencia_con_url = _* ("con url" / "con URL") _* generativa:Generativa { return generativa }
Subsentencia_con_metodo = _* "con método" _* generativa:Generativa { return generativa }
Subsentencia_con_cuerpo = _* "con cuerpo" _* generativa:Generativa { return generativa }
Subsentencia_con_cabeceras = _* "con cabeceras" _* generativa:Generativa { return generativa }
Subsentencia_usando_cliente = _* "usando cliente" _* generativa:Generativa { return generativa }

Generativa_de_un_cacheo = _* "un cacheo" _* cacheo:Subsentencias_de_cacheo { return cacheo }
Subsentencias_de_cacheo = _*
  clave:Subsentencia_con_clave
  valor:(Subsentencia_con_valor / Subsentencia_obtenido_con)?
  refrescado:Subsentencia_refrescado_si?
    { return `Castelog.metodos.un_cacheo(${clave}, ${valor}, ${refrescado})` }
Subsentencia_con_clave = _* "con clave" _* generativa:Generativa { return generativa }
Subsentencia_con_valor = _* "con valor" _* generativa:Generativa { return generativa }
Subsentencia_con_valores = _* "con valores" _* generativa:Generativa { return generativa }
Subsentencia_refrescado_si = _* "refrescado si" _* generativa:Generativa { return generativa }
Subsentencia_obtenido_con = _* "obtenido con" _* generativa:Generativa { return generativa }

Generativa_de_una_lectura_de_fichero = _* "una lectura de fichero" _*
  lectura:Subsentencias_de_lectura_de_fichero
    { return lectura }
Subsentencias_de_lectura_de_fichero = 
  ruta:Subsentencia_con_ruta
  codificacion:Subsentencia_con_codificacion?
  usando_so:Subsentencia_usando_sistema_operativo
    { return `Castelog.metodos.una_lectura_de_fichero(${ruta}, ${codificacion}, "fs", ${usando_so})` }
Subsentencia_con_ruta = _* ("con ruta") _*
  generativa:Generativa
    { return generativa }
Subsentencia_con_codificacion = _* ("con codificación") _*
  generativa:Generativa
    { return generativa }
Subsentencia_usando_sistema_operativo = so:(_* "usando sistema operativo")? { return so ? JSON.stringify("node.fs") : "undefined" }

Generativa_de_una_escritura_de_fichero = _* "una escritura de fichero" _*
  escritura:Subsentencias_de_escritura_de_fichero
    { return escritura }
Subsentencias_de_escritura_de_fichero =
  ruta:Subsentencia_con_ruta
  contenido:Subsentencia_con_contenido
  codificacion:Subsentencia_con_codificacion?
  usando_so:Subsentencia_usando_sistema_operativo
    { return `Castelog.metodos.una_escritura_de_fichero(${ruta}, ${contenido}, ${codificacion}, "fs", ${usando_so})` }
Subsentencia_con_contenido = _* ("con contenido") _*
  generativa:Generativa
    { return generativa }

Generativa_de_una_funcion = _*
  "una función"
  asincrona:( _* Token_asincrona )?
  parametros:Subsentencia_con_para_parametros_definidos?
  ( _* Token_donde )?
  bloque:Bloque?
  error:Subsentencia_en_errores?
    { return (asincrona ? "async " : "") + "function" + (parametros ? parametros : "()") + " {" + (bloque ? fromBlockAndCatchToCode(bloque, error, true, false) : "") + "\n}" }
Generativa_de_una_lambda = _*
  "una lambda"
  asincrona:( _* Token_asincrona )?
  parametros:Subsentencia_con_para_parametros_definidos?
  ( _* Token_donde )?
  bloque:Bloque?
  error:Subsentencia_en_errores?
    { return (asincrona ? "async " : "") + (parametros ? parametros : "()") + " => {" + (bloque ? fromBlockAndCatchToCode(bloque, error, true, false) : "") + "\n}" }
Generativa_de_variable_llamable =
  variable:Acceso_a_variable
  // Esto es incompatible con otras partes de la api:
  // ( _* Token_con )? _*
  llamada:( _* Parametros_llamados )?
    { return variable + (llamada ? llamada[1] : "") }
Generativa_de_cuando = _*
  Token_cuando _*
  condicion:Generativa _*
  Token_entonces _*
  valor1:Generativa _*
  Token_si_no _*
  valor2:Generativa
    { return "( " + condicion + " ? " + valor1 + " : " + valor2 + " )" }
Generativa_de_segun = _*
  Token_segun _* 
  sujeto:Generativa _*
  bloque:Bloque
    { return `(esto => {\n  ${bloque};\n})(${sujeto})` }
Token_segun = "Según" / "según" {}
Generativa_de_un_nuevo = _*
  Token_un_nuevo _*
  generativa:Generativa
    { return "new " + generativa }
Generativa_de_una_clase = _*
  Token_una_clase
  id:Subgenerativa_id_de_clase?
  ext:Subgenerativa_extension_de_clase?
  contenido:Subgenerativa_contenido_de_clase?
    { return "class " + (id ? id + " " : "") + (ext ? ext : "") + (contenido ? contenido : " {}") }
Generativa_de_una_promesa = _*
  Token_una_promesa
  asincrona:( _* Token_asincrona )?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  error:Subsentencia_en_errores?
    { return "new Promise(" + (asincrona ? "async " : "") + (parametros ? parametros : "(ok, fallo)") + " => {\n" + fromBlockAndCatchToCode(bloque, error, true, false) + "})"}
Generativa_de_un_hecho = _*
  Token_un_hecho
  asincrona:( _* Token_asincrono )?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  error:Subsentencia_en_errores?
    { return "( " + (asincrona ? "async " : "") + (parametros ? parametros : "()") + " => {\n" + fromBlockAndCatchToCode(bloque, error, true, false) + "})" + (parametros ? parametros : "()") }
Generativa_de_una_espera = _*
  Token_una_espera
  asincrona:( _* Token_asincrona )?
  (_* "de"  __)
  tiempo:Generativa
  unidad:( _* unidad_de_tiempo_para_milisegundos)
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis?
  error:Subsentencia_en_errores?
    { return "Castelog.metodos.una_espera_de(" + tiempo + unidad[1] + ", " + (asincrona ? "async " : "") + "() => {" + fromBlockAndCatchToCode(bloque, error, true, false) + "})"; }
unidad_de_tiempo_para_milisegundos = ("milisegundos" / "segundos")? { switch(text()) { case "segundos": return " * 1000"; default: return ""; } } 
Generativa_de_un_componente_vue2 = _*
  "un componente vue" ("2")?
  nombre:(( _* "con nombre" _* ) Generativa)
  plantilla:(( _* "con plantilla" _* ) Codigo_html_entre_parentesis )
  estilos:( ( _* "con estilos" _* ) Codigo_css_entre_parentesis )?
  logica:( ( _* "con lógica" (_* "donde" )? _* ) Bloque )?
    { return `Castelog.metodos.un_componente_vue2(${nombre ? nombre[1] : "null"}, ${generate_splitted_stringification(plantilla[1])}, ${logica ? wrapInVue2ComponentFactoryFunction(logica[1]) : 'null'}, ${estilos ? JSON.stringify(estilos[1], null, 2) : 'null'})` }
Generativa_de_una_aplicacion_vue2 = _*
  "una aplicación vue" ("2")?
  nombre:(( _* "con nombre" _* ) Generativa)
  rutas:( ( _* "con rutas" _* ) Generativa )?
  traducciones:( ( _* "con traducciones" _* ) Generativa )?
  plantilla:(( _* "con plantilla" _* ) Codigo_html_entre_parentesis )
  estilos:( ( _* "con estilos" _* ) Codigo_css_entre_parentesis )?
  logica:( ( _* "con lógica" (_* "donde" )? _* ) Bloque )?
  montada:( ( _* "montada en" _* ) Generativa )?
    { return generate_sentence_for_una_aplicacion_vue2(nombre, plantilla, logica, estilos, rutas, traducciones, montada); }

Generativa_de_una_comunicacion_con_usuario = _*
  tipo:("una comunicación de entrada de usuario" / "una comunicación de salida a usuario") _*
  componente:Subsentencia_con_componente
  atributos:Subsentencia_con_atributos?
  eventos:Subsentencia_con_eventos?
    { return `Castelog.metodos.${ tipo === "una comunicación de entrada de usuario" ? 'una_comunicacion_de_entrada_de_usuario' : 'una_comunicacion_de_salida_a_usuario' }(${componente}, ${atributos}, ${eventos})` }

Subsentencia_con_componente = _* "con componente como" _*
  generativa:Generativa
    { return generativa }
Subsentencia_con_atributos = _* "con atributos como" _*
  generativa:Generativa
    { return generativa }
Subsentencia_con_eventos = _* "con eventos como" _*
  generativa:Generativa
    { return generativa }

Generativa_de_una_plantilla =
  plantilla:( Generativa_de_plantilla_1 / Generativa_de_plantilla_2 )
  parametros:Subsentencia_de_parametrizada_con?
    { return parametros ? `${plantilla}(${parametros})` : `${plantilla}` }

Subsentencia_de_parametrizada_con = _* "parametrizada"
  parametros:Subsentencia_con?
    { return parametros }
  
Generativa_de_plantilla_2 = _*
  Token_una_plantilla
  contenido:Subsentencia_con?
    { return "Castelog.metodos.una_plantilla" + (contenido ? contenido : "()") }

Generativa_de_plantilla_1 = _*
  Token_abrir_plantilla
  contenido:Contenido_de_plantilla
  Token_cerrar_plantilla
    { return "Castelog.metodos.una_plantilla(" + reduce_plantilla(contenido) + " )" }

Intercalacion_de_plantilla = (Generativa_en_plantilla / Sentencias_en_plantilla)
Contenido_de_plantilla = tokens:(
    !( Token_cerrar_plantilla )
    ( Intercalacion_de_plantilla / Token_de_texto_de_plantilla ) 
  )*
    { return tokens ? tokens.map(t => t[1]) : [] }
Sentencias_en_plantilla = Token_abrir_sentencias_en_plantilla _* bloque:Lenguaje_inicial _* Token_cerrar_sentencias_en_plantilla { return { bloque } }
Generativa_en_plantilla = Token_abrir_generativa_en_plantilla _* generativa:Generativa _* Token_cerrar_generativa_en_plantilla { return { generativa } }

Token_de_texto_de_plantilla = ( !( Token_cerrar_plantilla / Token_abrir_generativa_en_plantilla / Token_abrir_sentencias_en_plantilla ) .)+ { return text() }
Token_una_plantilla = "una plantilla"
Token_abrir_plantilla = "<@"
Token_cerrar_plantilla = "@>"
Token_abrir_generativa_en_plantilla = "<:="
Token_cerrar_generativa_en_plantilla = ":>"
Token_abrir_sentencias_en_plantilla = "<:"
Token_cerrar_sentencias_en_plantilla = ":>"

Generativa_de_estoy_en_entorno = generativa:(Generativa_de_estoy_en_entorno_2 / Generativa_de_estoy_en_entorno_1) { return generativa }
Generativa_de_estoy_en_entorno_1 = ( "estoy en navegador" / "estoy en sistema" / "estoy en linux" / "estoy en windows" / "estoy en mac" / "estoy en chrome" / "estoy en firefox" / "estoy en opera" / "estoy en safari" / "estoy en android" / "estoy en ios" / "estoy en ordenador" / "estoy en tablet" / "estoy en móvil" ) { return `Castelog.metodos.estoy_en(${JSON.stringify(text())})` }
Generativa_de_estoy_en_entorno_2 = "estoy en entorno de" _+ generativa:Generativa { return `Castelog.metodos.estoy_en('estoy en entorno', ${generativa})` }

Generativa_de_un_comando_de_consola = _*
  paralelo:("un comando de consola en serie" / "un comando de consola en paralelo" / "un comando de consola") _+ "consistente en" _+
  comando:Generativa
  desde:( ( _* "desde directorio" _* ) Generativa )?
  configuraciones:Subsentencia_configurado_con?
    { return `Castelog.metodos.un_comando_de_consola(${comando}, Object.assign({}, ${desde ? ("{ cwd: " + desde[1] + " }") : '{ cwd: __dirname }'}, ${configuraciones ? configuraciones : "{ }"}), ${(paralelo.indexOf("paralelo") === -1) ? "false" : "true"})` }

Generativa_de_una_compilacion_estandar_de_parametros_de_consola = _*
  "una compilación estándar de parámetros de consola"
  parametros:Subsentencia_a_partir_de?
    { return `Castelog.metodos.una_compilacion_estandar_de_parametros_de_consola(${parametros})` }

Subsentencia_a_partir_de = _* "a partir de" _* generativa:Generativa { return generativa }

Generativa_de_un_servidor_http_o_https = (Generativa_un_servidor_https / Generativa_un_servidor_http)

Generativa_un_servidor_http = _*
  ("un servidor HTTP" / "un servidor http") _*
  configuraciones:Subsentencia_configurado_con?
  generativa:Subsentencia_a_partir_de
    { return `Castelog.metodos.un_servidor_http(${ generativa })` }

Generativa_un_servidor_https = _*
  ("un servidor HTTPS" / "un servidor https") _*
  configuraciones:Subsentencia_configurado_con
  generativa:Subsentencia_a_partir_de
    { return `Castelog.metodos.un_servidor_https(${ generativa })` }

Subsentencia_con_opciones = _* "con opciones" _+ generativa:Generativa { return generativa }

Generativa_de_un_socket_io_servidor_o_cliente = (Generativa_un_socket_io_servidor / Generativa_un_socket_io_cliente)
Generativa_un_socket_io_servidor = _*
  ("un servidor socket.io")
  https:( _+ "en https" )?
  servidor:(( _+ Token_a_partir_de _+) Generativa)?
  configuraciones:Subsentencia_configurado_con?
  eventos:((_* "con servidor que" _* ) Subsentencia_en_eventos_o_en_espacios_de_nombres)?
  eventos_socket:((_* "con socket que" _* ) Subsentencia_en_eventos_solo)?
    { return `Castelog.metodos.un_servidor_socket_io(${servidor ? servidor[1] : "undefined"}, ${eventos ? eventos[1] : "[ ]"}, ${eventos_socket ? eventos_socket[1] : "[ ]"}, ${configuraciones ? configuraciones : "undefined"}, ${https ? "{ }" : "undefined"})` } 

Generativa_un_socket_io_cliente = _*
  ("un cliente socket.io")
  configuraciones:Subsentencia_configurado_con?
  eventos:((_* "el cual" _* ) Subsentencia_en_eventos_solo)?
    { return `Castelog.metodos.un_cliente_socket_io(${eventos ? eventos[1] : "[ ]"}, ${configuraciones ? configuraciones : "{ }"})` }

Subsentencia_en_eventos_o_en_espacios_de_nombres = _* SIMBOLO_ABRIR_BLOQUE _* contenido:(Subsentencia_en_evento / Subsentencia_en_espacio_de_nombres)* _* SIMBOLO_CERRAR_BLOQUE { return "[ " + contenido.join(", ") + " ]" }

Subsentencia_en_espacio_de_nombres = _* ("en espacio de nombres" / "En espacio de nombres") _+ espacio:Generativa _* "ocurre que" _* eventos:Subsentencia_en_eventos_solo EOS { return "{ tipo: 'espacio de nombres', nombre: " + espacio + ", eventos: " + eventos + "\n}" }

Subsentencia_en_eventos_solo = _* SIMBOLO_ABRIR_BLOQUE _* eventos:Subsentencia_en_evento* _* SIMBOLO_CERRAR_BLOQUE { return "[ " + eventos.join(", ") + " ]" }
Subsentencia_en_evento = _*
  ("En evento" / "en evento") _*
  id:Generativa _+ ("está usando") _+
  evento:Generativa EOS
    { return "[ " + id + ", " + evento + " ]" }

Subsentencia_configurado_con = _*
  "configurado con" _*
  generativa:Generativa
    { return generativa }

Generativa_de_una_copia_de_ficheros = _* "una copia de ficheros" 
  asincrona:(_+ Token_asincrona)?
  recursiva:(_+ Token_recursiva)?
  origen:Subsentencia_con_origen
  destino:Subsentencia_con_destino
    { return `${asincrona ? "await " : ""}Castelos.metodos.una_copia_de_ficheros(${!!asincrona ? "true" : "false"}, ${!!recursiva ? "true" : "false"}, ${origen}, ${destino})` }

Subsentencia_con_origen = _* "con origen" _+ generativa:Generativa { return generativa }

Subsentencia_con_destino = _* "con destino" _+ generativa:Generativa { return generativa }

Token_recursiva = "recursiva" {}

Generativa_de_un_escaneo_de_puertos = _* "un escaneo de puertos"
  herramienta:((_+ "usando" _+) ("nmap"))
  opciones:( Subsentencia_con_sin_parentesis )? 
    { return `Castelog.metodos.un_escaneo_de_puertos(${JSON.stringify(herramienta[1])}, ${opciones})` }

Generativa_de_un_monitoreo_de_red = _* "un monitoreo de red"
  configurado:Subsentencia_configurado_con?
  eventos:Subsentencia_el_cual_en_eventos? 
    { return `Castelog.metodos.un_monitoreo_de_red(${configurado ? configurado : "undefined"}, ${eventos ? eventos : "[ ]"})` }

Subsentencia_el_cual_en_eventos = _* "el cual" _* eventos:Subsentencia_en_eventos_solo
    { return eventos }

Generativa_de_un_fichero_xml = _* "un fichero xml"
  ruta:( Subsentencia_con_ruta )
    { return `Castelog.metodos.un_fichero_xml(${ruta})` }

Generativa_de_un_servidor_de_control_remoto =
  servidor:(Generativa_de_un_servidor_activo_de_control_remoto / Generativa_de_un_servidor_pasivo_de_control_remoto)
    { return servidor }
Generativa_de_un_servidor_activo_de_control_remoto = _*
  "un servidor activo de control remoto"
  configuraciones:Subsentencia_configurado_con?
  eventos:Subsentencia_el_cual_en_eventos? 
    { return `Castelog.metodos.un_servidor_activo_de_control_remoto(${configuraciones ? configuraciones : "null"}, eventos, __dirname)` }
Generativa_de_un_servidor_pasivo_de_control_remoto = _*
  "un servidor pasivo de control remoto"
  configuraciones:Subsentencia_configurado_con?
  eventos:Subsentencia_el_cual_en_eventos? 
    { return `Castelog.metodos.un_servidor_pasivo_de_control_remoto(${configuraciones ? configuraciones : "null"}, eventos, __dirname)` }

Generativa_de_un_cliente_de_control_remoto =
  cliente:(Generativa_de_un_cliente_activo_de_control_remoto / Generativa_de_un_cliente_pasivo_de_control_remoto)
    { return cliente }
Generativa_de_un_cliente_activo_de_control_remoto = _*
  "un cliente activo de control remoto"
  configuraciones:Subsentencia_configurado_con?
  eventos:Subsentencia_el_cual_en_eventos? 
    { return `Castelog.metodos.un_cliente_activo_de_control_remoto(${configuraciones ? configuraciones : "null"}, eventos, (typeof __dirname === 'string') ? __dirname : undefined)` }
Generativa_de_un_cliente_pasivo_de_control_remoto = _*
  "un cliente pasivo de control remoto"
  configuraciones:Subsentencia_configurado_con?
  eventos:Subsentencia_el_cual_en_eventos? 
    { return `Castelog.metodos.un_cliente_pasivo_de_control_remoto(${configuraciones ? configuraciones : "null"}, eventos, (typeof __dirname === 'string') ? __dirname : undefined)` }

Generativa_de_un_diagrama_de_dependencias = _* "un diagrama de dependencias" _*
  asincronamente:Token_asincronamente?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  errores:Subsentencia_en_errores_como_funcion?
    { return `${asincronamente ? "await " : ""}Castelog.metodos.un_diagrama_de_dependencias(async ${parametros ? parametros : "(dependencias)"} => {\ntry {\n${bloque}\n} catch(error) {\n throw error;\n }\n}, ${errores})` }

Generativa_de_una_seleccion_de_elementos_del_dom = _* ("una selección de elementos del dom" / "una selección de elementos del DOM")
  partir:Subsentencia_a_partir_de?
  parametros:Subsentencia_con?
    { return `Castelog.metodos.una_seleccion_de_elementos_del_dom(${parametros}, ${partir ? partir : 'document.body'})` }

Generativa_de_una_seleccion_del_primer_elemento_del_dom = _* ("una selección del primer elemento del dom" / "una selección del primer elemento del DOM")
  partir:Subsentencia_a_partir_de?
  parametros:Subsentencia_con?
    { return `Castelog.metodos.una_seleccion_del_primer_elemento_del_dom(${parametros}, ${partir ? partir : 'document.body'})` }


Generativa_de_una_insercion_de_estilos_en_cascada = _* "una inserción de estilos en cascada" _*
  llamada:Subsentencia_llamado
  con:Subsentencia_con
    { return `Castelog.metodos.una_insercion_de_estilos_en_cascada(${llamada}, ${con})` }

Generativa_de_un_bloque_de_estilos_en_cascada = _* "un bloque de estilos en cascada" _*
  con:Subsentencia_con
    { return `Castelog.metodos.un_bloque_de_estilos_en_cascada(${con})` }

Generativa_de_una_insercion_de_elemento_del_dom = _* ("una inserción de elemento del dom" / "una inserción de elemento del DOM")
  nodo:Subsentencia_en_nodo?
  partir:Subsentencia_a_partir_de?
  con:Subsentencia_con?
    { return `Castelog.metodos.una_insercion_de_elemento_del_dom(${nodo}, ${partir}, ${con})` }

Subsentencia_en_nodo = _* "en nodo" _*
  nodo:Generativa
    { return nodo }

Generativa_de_un_elemento_html = _* ("un elemento html" / "un elemento HTML") _*
  con:Subsentencia_con
    { return `Castelog.metodos.un_elemento_html(${con})` }

Generativa_de_un_elemento_jquery = _* ("un elemento jquery" / "un elemento jQuery") _*
  con:Subsentencia_con
    { return `Castelog.metodos.un_elemento_jquery(${con})` }



Sentencia_de_diagrama_de_dependencias = sentencia:(
  Sentencia_de_defino_dependencia_de_paquete /
  Sentencia_de_defino_dependencia_de_clase /
  Sentencia_de_defino_dependencia_de_funcion /
  Sentencia_de_defino_dependencia_de_fabrica /
  Sentencia_de_defino_dependencia_de_hecho /
  Sentencia_de_defino_dependencia_de_variable /
  Sentencia_de_defino_dependencia_de_constante /
  Sentencia_de_defino_dependencia_de_componente_ui /
  Sentencia_de_defino_dependencia_de_aplicacion_ui /
  Sentencia_de_defino_dependencia_de_objeto )
    { return sentencia }

Sentencia_de_defino_dependencia_de_paquete = _* ( "Defino dependencia de paquete" / "defino dependencia de paquete" )
  paquete:Subsentencias_de_paquete
    { return `Castelog.metodos.defino_dependencia_de_paquete(dependencias, ${paquete});` }
Sentencia_de_defino_dependencia_de_clase = _* ( "Defino dependencia de clase" / "defino dependencia de clase" )
  clase:Subsentencias_de_clase
    { return `Castelog.metodos.defino_dependencia_de_clase(dependencias, ${clase});` }
Sentencia_de_defino_dependencia_de_funcion = _* ( "Defino dependencia de función" / "defino dependencia de función" )
  funcion:Subsentencias_de_funcion
    { return `Castelog.metodos.defino_dependencia_de_funcion(dependencias, ${funcion});` }
Sentencia_de_defino_dependencia_de_fabrica = _* ( "Defino dependencia de fábrica" / "defino dependencia de fábrica" )
  fabrica:Subsentencias_de_fabrica
    { return `Castelog.metodos.defino_dependencia_de_fabrica(dependencias, ${fabrica});` }
Sentencia_de_defino_dependencia_de_hecho = _* ( "Defino dependencia de hecho" / "defino dependencia de hecho" )
  hecho:Subsentencias_de_hecho
    { return `Castelog.metodos.defino_dependencia_de_hecho(dependencias, ${hecho});` }
Sentencia_de_defino_dependencia_de_variable = _* ( "Defino dependencia de variable" / "defino dependencia de variable" )
  variable:Subsentencias_de_variable
    { return `Castelog.metodos.defino_dependencia_de_variable(dependencias, ${variable});` }
Sentencia_de_defino_dependencia_de_constante = _* ( "Defino dependencia de constante" / "defino dependencia de constante" )
  constante:Subsentencias_de_constante
    { return `Castelog.metodos.defino_dependencia_de_constante(dependencias, ${constante});` }
Sentencia_de_defino_dependencia_de_componente_ui = _* ( "Defino dependencia de componente UI" / "defino dependencia de componente ui" )
  componente_ui:Subsentencias_de_componente_ui
    { return `Castelog.metodos.defino_dependencia_de_componente_ui(dependencias, ${componente_ui});` }
Sentencia_de_defino_dependencia_de_aplicacion_ui = _* ( "Defino dependencia de aplicación UI" / "defino dependencia de aplicación ui" )
  aplicacion_ui:Subsentencias_de_aplicacion_ui
    { return `Castelog.metodos.defino_dependencia_de_aplicacion_ui(dependencias, ${aplicacion_ui});` }
Sentencia_de_defino_dependencia_de_objeto = _* ( "Defino dependencia de objeto" / "defino dependencia de objeto" )
  objeto:Subsentencias_de_objeto
    { return `Castelog.metodos.defino_dependencia_de_objeto(dependencias, ${objeto});` }

Subsentencia_llamado_para_dependencias = _* ("llamado" / "llamada") _+
  algo:Generativa
    { return algo }
Subsentencia_en_ruta_para_dependencias = _* "en ruta" _+
  algo:Generativa
    { return algo }
Subsentencia_con_el_cual = _* ("con el cual" / "con la cual") _+
  algo:Bloque
    { return `() => { ${algo} }` }
Subsentencia_que_se_valida = _* "que se valida cuando" _+
  algo:Bloque
    { return `() => { ${algo} }` }
Subsentencia_que_tiene = _* "que tiene" _+
  algo:Subsentencia_para_propiedades_y_metodos_de_dependencias
    { return algo }
Subsentencia_que_se_codifica = _* "que se codifica como" _+
  algo:Bloque
    { return `() => { ${algo} }` }
Subsentencia_que_se_testea = _* "que se testea cuando" _+
  algo:Bloque
    { return `() => { ${algo} }` }
Subsentencia_que_exporta = _* "que exporta" _+
  algo:Generativa
    { return algo }
Subsentencia_que_se_describe_como = _* "que se describe como" _+
  algo:Generativa
    { return algo }
Subsentencia_que_se_asigna_a = _* "que se asigna a" _+
  algo:Generativa
    { return algo }
Subsentencia_que_se_crea_como = _* "que se crea como" _+
  algo:Generativa
    { return algo }
Subsentencia_que_en_errores = _* "que en errores" _+
  algo:Bloque
    { return `() => { ${algo} }` }
Subsentencia_que_equivale_a = _* "que equivale a" _+
  algo:Generativa
    { return algo }

Subsentencia_que_es_asincrono = _* ("que es asíncrono" / "que es síncrono")
    { return text().trim() }
Subsentencia_que_recibe = _* ("que recibe" / "donde al recibir") _+
  algo:Subsentencia_para_parametros_recibidos_de_dependencias
    { return algo }
Subsentencia_que_usa = _* "que usa" _+
  algo:Subsentencia_para_dependencias_usadas_de_dependencias
    { return algo }
Subsentencia_donde_para_pasos_u_otros = _* "donde" _*
  algo:Subsentencia_para_pasos
    { return algo }
Subsentencia_que_retorna = _* ("que retorna" / "donde al retornar") _+
  algo:Subsentencia_para_parametros_retornados_de_dependencias
    { return algo }

Subsentencia_para_propiedades_y_metodos_de_dependencias = _* SIMBOLO_ABRIR_BLOQUE _*
  algo:Subsentencia_para_propiedad_o_metodo_de_dependencias_varias _* SIMBOLO_CERRAR_BLOQUE
    { return algo }
Subsentencia_para_propiedad_o_metodo_de_dependencias_varias =
  propiedades:Subsentencia_para_propiedad_o_metodo_de_dependencias* 
    { return `[${ propiedades.join(", ") }]` }
Subsentencia_para_parametros_recibidos_de_dependencias = _* SIMBOLO_ABRIR_BLOQUE _*
  algo:Subsentencia_para_parametro_recibido_de_dependencias* _* SIMBOLO_CERRAR_BLOQUE
    { return `[${ algo.join(", ") }]` }
Subsentencia_para_dependencias_usadas_de_dependencias = _* SIMBOLO_ABRIR_BLOQUE _*
  algo:Subsentencia_para_uso_de_dependencia* _* SIMBOLO_CERRAR_BLOQUE
    { return `[${ algo.join(", ") }]` }
Subsentencia_para_pasos = _* SIMBOLO_ABRIR_BLOQUE _*
  algo:Subsentencia_para_bloques_de_pasos _* SIMBOLO_CERRAR_BLOQUE
    { return algo }
Subsentencia_para_parametros_retornados_de_dependencias = _* SIMBOLO_ABRIR_BLOQUE _*
  algo:Subsentencia_para_parametro_retornado_de_dependencias _* SIMBOLO_CERRAR_BLOQUE
    { return algo }

Subsentencia_para_bloques_de_pasos =
  composicion:( Subsentencia_para_bloque_de_paso / Subsentencia_para_propiedad_o_metodo_de_dependencias )*
    { return `[${composicion ? composicion.join(", ") : "" }]` }

Subsentencia_para_bloque_de_paso = _* ("Defino paso" / "defino paso") _+
  numero:ordinal_de_paso _+
  paso:hasta_el_inicio_de_bloque
  informacion:Subsentencia_de_nodo_recursivo
    { return `{\n  nodo_de_tipo: "paso",\n  numero: ${JSON.stringify(numero)},\n  paso: ${JSON.stringify(paso)},\n  ...(${informacion})\n}` }

hasta_el_inicio_de_bloque = (!(SIMBOLO_ABRIR_BLOQUE).)+ { return text() }
ordinal_de_paso = ([0-9]+ ".")+ { return text() }

Subsentencia_para_parametro_retornado_de_dependencias = retorno:(
  Subsentencia_para_propiedad_o_metodo_de_dependencias_varias /
  Subsentencia_de_nodo_recursivo )
    { return retorno }

Subsentencia_de_nodo_recursivo = _* SIMBOLO_ABRIR_BLOQUE _*
  objeto:Subsentencias_de_objeto _* SIMBOLO_CERRAR_BLOQUE
    { return objeto }
  

Subsentencia_para_propiedad_o_metodo_de_dependencias = _*
  tipo:( "Defino propiedad estática" / "Defino método estático" / "Defino propiedad" / "Defino método" / "defino propiedad estática" / "defino método estático" / "defino propiedad" / "defino método" ) _+
  nombre:Etiqueta_de_variable_simple
  informacion:Subsentencia_de_nodo_recursivo?
    { return `{\n nombre: ${JSON.stringify(nombre)},\n tipo: ${JSON.stringify(tipo)},\n informacion: ${informacion}\n }` }
Subsentencia_para_parametro_recibido_de_dependencias = _* ( "Defino parámetro" / "defino parámetro" ) _+
  nombre:Etiqueta_de_variable_simple
  tipo:(" (obligatorio)" / " (opcional)")? _+
  informacion:Subsentencia_de_nodo_recursivo?
    { return `{\n nombre: ${JSON.stringify(nombre)},\n tipo: ${JSON.stringify(tipo)},\n informacion: ${informacion}\n }` }
Subsentencia_para_uso_de_dependencia = _*
  tipo:( "paquetes" / "clases" / "funciones" / "fábricas" / "hechos" / "objetos" / "variables" / "constantes" / "componentes ui" / "componentes UI" / "aplicaciones ui" / "aplicaciones UI" )
  valores:( Lista_de_nombres_de_dependencias )?
    { return `{\n tipo: ${JSON.stringify(tipo)},\n valores: ${valores}\n }` }
Lista_de_nombres_de_dependencias =
  primero:Etiqueta_de_variable_simple
  continuacion:Continuacion_de_lista_de_nombres_de_dependencias*
    { return `[${[ primero ].concat(continuacion).join(", ")}]` }
Continuacion_de_lista_de_nombres_de_dependencias = _* "," _*
  siguiente:Etiqueta_de_variable_simple
    { return JSON.stringify(siguiente) }


Subsentencias_compuesto_por = _* "compuesto por" _+
  algo:Generativa
    { return generativa }
Subsentencia_construido_con = _* "construído con" _+
  algo:Generativa
    { return generativa }
Subsentencia_que_adjunta_estilos_como = _* "que adjunta estilos como" _+
  algo:Generativa
    { return generativa }

Subsentencias_con_rutas_como = _* "con rutas como" _+
  algo:Generativa
    { return generativa }
Subsentencia_con_traducciones_como = _* "con traducciones como" _+
  algo:Generativa
    { return generativa }

Subsentencias_de_dependencia_comunes =
  llamado:Subsentencia_llamado_para_dependencias?
  ruta:Subsentencia_en_ruta_para_dependencias?
  cual:Subsentencia_con_el_cual?
  valida:Subsentencia_que_se_valida?
  tiene:Subsentencia_que_tiene?
  codifica:Subsentencia_que_se_codifica?
  errores:Subsentencia_que_en_errores?
  testea:Subsentencia_que_se_testea?
  exporta:Subsentencia_que_exporta?
  describe:Subsentencia_que_se_describe_como?
  crea:Subsentencia_que_se_crea_como?
  asigna:Subsentencia_que_se_asigna_a?
  equivale:Subsentencia_que_equivale_a?
    { return `{\n llamado: ${llamado},\n ruta: ${ruta},\n cual: ${cual},\n valida: ${valida},\n tiene: ${tiene},\n codifica: ${codifica},\n testea: ${testea},\n exporta: ${exporta},\n describe: ${describe},\n asigna: ${asigna},\n crea: ${crea},\n errores: ${errores},\n equivale: ${equivale}\n}` }

Subsentencias_de_dependencia_funcionales = Subsentencias_de_dependencia_modales

Subsentencia_de_modalidades =
  modalidades:Subsentencia_que_permite_modalidad*
    { return `[${modalidades.join(", ")}].reduce((output, modalidad) => { output[modalidad.modalidad] = modalidad; return output; }, {})` }

Subsentencia_que_permite_modalidad = _* "que permite modalidad" _+
  modalidad:("por defecto" / Etiqueta_de_variable_simple) _* SIMBOLO_ABRIR_BLOQUE _*
  comunes:Subsentencias_de_dependencia_comunes
  firma:Subsentencias_de_dependencia_modales _* SIMBOLO_CERRAR_BLOQUE _*
    { return `{\n modalidad: ${JSON.stringify(modalidad)},\n ...Object.assign({}, ${comunes}, ${firma})\n }` }

Subsentencias_de_dependencia_modales = 
  asincrono:Subsentencia_que_es_asincrono?
  recibe:Subsentencia_que_recibe?
  usa:Subsentencia_que_usa?
  consiste:Subsentencia_donde_para_pasos_u_otros?
  retorna:Subsentencia_que_retorna?
    { return `{\n asincrono: ${asincrono},\n recibe: ${recibe},\n usa: ${usa},\n consiste: ${consiste},\n retorna: ${retorna} \n }` }

Subsentencias_de_dependencia_composicionales = 
  componentes:Subsentencias_compuesto_por?
  construccion:Subsentencia_construido_con?
  estilos:Subsentencia_que_adjunta_estilos_como?
    { return `{\n componentes: ${componentes},\n construccion: ${construccion},\n estilos: ${estilos}\n }` }

Subsentencias_de_dependencia_aplicacionales = 
  rutas:Subsentencias_con_rutas_como?
  traducciones:Subsentencia_con_traducciones_como?
    { return `{\n rutas: ${rutas},\n traducciones: ${traducciones}\n }` }

Subsentencias_de_paquete =
  comunes:Subsentencias_de_dependencia_comunes
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades})` }
Subsentencias_de_clase =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades})` }
Subsentencias_de_funcion =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades})` }
Subsentencias_de_fabrica =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades})` }
Subsentencias_de_hecho =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades})` }
Subsentencias_de_variable =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades})` }
Subsentencias_de_constante =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades})` }
Subsentencias_de_componente_ui =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
  composicionales:Subsentencias_de_dependencia_composicionales
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades}, ${composicionales})` }
Subsentencias_de_aplicacion_ui =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
  composicionales:Subsentencias_de_dependencia_composicionales
  aplicacionales:Subsentencias_de_dependencia_aplicacionales
  Subsentencias_de_dependencia_aplicacionales
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades}, ${composicionales}, ${aplicacionales})` }
Subsentencias_de_objeto =
  comunes:Subsentencias_de_dependencia_comunes 
  funcionales:Subsentencias_de_dependencia_funcionales
  modalidades:Subsentencia_de_modalidades
  composicionales:Subsentencias_de_dependencia_composicionales
  aplicacionales:Subsentencias_de_dependencia_aplicacionales
    { return `Object.assign({}, ${comunes}, ${funcionales}, ${modalidades}, ${composicionales}, ${aplicacionales})` }

Generativa_de_un_diagrama_conceptual = diagrama:(
  Diagrama_a_partir_de_objeto /
  Diagrama_a_partir_de_codigo )
    { return diagrama }

Diagrama_a_partir_de_objeto = _* "un diagrama conceptual" _* "a partir de" _* 
  objeto:Generativa
    { return `Castelog.metodos.un_diagrama_conceptual(${objeto})` }

Diagrama_a_partir_de_codigo = _* "un diagrama conceptual" _*
  asincronamente:Token_asincronamente?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  errores:Subsentencia_en_errores_como_funcion?
    { return `${asincronamente ? "await " : ""}Castelog.metodos.un_diagrama_conceptual(async ${parametros ? parametros : "(diagrama_de_castelog, contexto_de_diagrama_de_castelog)"} => {\ntry {\n${bloque}\n} catch(error) {\n throw error;\n }\n}, ${errores})` }

Sentencia_de_diagrama_conceptual = sentencia:(
  Sentencia_de_direccion_de_diagrama /
  Sentencia_de_defino_nodo_de_diagrama /
  Sentencia_de_defino_relacion_de_diagrama /
  Sentencia_de_defino_conjunto_de_diagrama /
  Sentencia_de_defino_clase_de_diagrama /
  Sentencia_de_defino_clasificacion_de_diagrama /
  Sentencia_de_defino_evento_de_diagrama /
  Sentencia_de_defino_estrategias_de_diagrama )
    { return sentencia }

Sentencia_de_direccion_de_diagrama = _* ( "En un diagrama conceptual de" / "en un diagrama conceptual de" ) _*
  generativa:("izquierda a derecha" / "derecha a izquierda" / "arriba a abajo" / "abajo a arriba") _*
    { return `await Castelog.metodos.defino_direccion_de_diagrama(diagrama_de_castelog, ${JSON.stringify(generativa)});` }
Sentencia_de_defino_nodo_de_diagrama = _* ("Defino nodo de diagrama con" / "defino nodo de diagrama con") _+
  generativa:Generativa
    { return `await Castelog.metodos.defino_nodo_de_diagrama(diagrama_de_castelog, ${generativa}, contexto_de_diagrama_de_castelog);` }
Sentencia_de_defino_relacion_de_diagrama = _* ("Defino relación de diagrama con" / "defino relación de diagrama con") _+
  generativa:Generativa
    { return `await Castelog.metodos.defino_relacion_de_diagrama(diagrama_de_castelog, ${generativa});` }
Sentencia_de_defino_conjunto_de_diagrama = Sentencia_de_defino_conjunto_de_diagrama_mediante_funcion
// Sentencia_de_defino_conjunto_de_diagrama = ( Sentencia_de_defino_conjunto_de_diagrama_mediante_funcion / Sentencia_de_defino_conjunto_de_diagrama_mediante_objeto )
Sentencia_de_defino_conjunto_de_diagrama_mediante_funcion = _* ("Defino conjunto de diagrama con nombre como" / "defino conjunto de diagrama con nombre como") _+
  generativa:Generativa _+
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
    { return `await Castelog.metodos.defino_conjunto_de_diagrama(diagrama_de_castelog, { tipo: "callback", nombre: ${generativa}, callback: async ${parametros ? parametros : "(diagrama_de_castelog, contexto_de_diagrama_de_castelog)"} => {\ntry {\n${bloque}\n} catch(error) { throw error; }\n}}, contexto_de_diagrama_de_castelog)` }
Sentencia_de_defino_conjunto_de_diagrama_mediante_objeto = _* ("Defino conjunto de diagrama con" / "defino conjunto de diagrama con") _+
  generativa:Generativa
    { return `await Castelog.metodos.defino_conjunto_de_diagrama(diagrama_de_castelog, ${generativa}, contexto_de_diagrama_de_castelog);` }
Sentencia_de_defino_clase_de_diagrama = _* ("Defino clase de diagrama con" / "defino clase de diagrama con") _+
  generativa:Generativa
    { return `await Castelog.metodos.defino_clase_de_diagrama(diagrama_de_castelog, ${generativa});` }
Sentencia_de_defino_clasificacion_de_diagrama = _* ("Defino clasificación de diagrama con" / "defino clasificación de diagrama con") _+
  generativa:Generativa
    { return `await Castelog.metodos.defino_clasificacion_de_diagrama(diagrama_de_castelog, ${generativa});` }
Sentencia_de_defino_evento_de_diagrama = _* ("Defino eventos de diagrama con" / "defino eventos de diagrama con") _+
  generativa:Generativa
    { return `await Castelog.metodos.defino_eventos_de_diagrama(diagrama_de_castelog, ${generativa});` }
Sentencia_de_defino_estrategias_de_diagrama = _* ("Defino estrategias de diagrama con" / "defino estrategias de diagrama con") _+
  generativa:Generativa
    { return `await Castelog.metodos.defino_estrategias_de_diagrama(diagrama_de_castelog, ${generativa});` }

Generativa_de_un_design_pattern = dp:(
  Generativa_de_un_singleton_design_pattern /
  Generativa_de_un_factory_method_design_pattern /
  Generativa_de_un_abstract_factory_design_pattern /
  Generativa_de_un_decorator_design_pattern /
  Generativa_de_un_proxy_design_pattern /
  Generativa_de_un_command_design_pattern /
  Generativa_de_un_prototype_design_pattern /
  Generativa_de_un_builder_design_pattern /
  Generativa_de_un_observer_design_pattern /
  Generativa_de_un_iterator_design_pattern /
  Generativa_de_un_interpreter_design_pattern /
  Generativa_de_un_bridge_design_pattern /
  Generativa_de_un_adapter_design_pattern /
  Generativa_de_un_composite_design_pattern /
  Generativa_de_un_facade_design_pattern /
  Generativa_de_un_flyweight_design_pattern /
  Generativa_de_un_chain_of_responsability_design_pattern /
  Generativa_de_un_mediator_design_pattern /
  Generativa_de_un_memento_design_pattern /
  Generativa_de_un_strategy_design_pattern /
  Generativa_de_un_state_design_pattern /
  Generativa_de_un_template_method_design_pattern /
  Generativa_de_un_visitor_design_pattern /
  Generativa_de_un_progressive_composition_design_pattern /
  Generativa_de_un_progressive_decoration_design_pattern /
  Generativa_de_un_hooks_design_pattern )
    { return dp; }

Generativa_de_un_singleton_design_pattern = _* "un singleton design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_getter_como)?
  con2:(Subsentencia_con_setter_como)
  con3:(Subsentencia_con_value_como)?
    { return `Castelog.metodos.un_singleton_design_pattern({\n  getter: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  setter: ${con0 ? con0 : "dp"} => { return ${con2}; },\n  value: ${con0 ? con0 : "dp"} => { return ${con3}; }\n})`; }
Generativa_de_un_factory_method_design_pattern = _* "un factory method design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_factory_como)?
  con2:(Subsentencia_con_classes_como)
  con3:(Subsentencia_con_products_como)?
    { return `Castelog.metodos.un_factory_method_design_pattern({\n  factory: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  classes: ${con0 ? con0 : "dp"} => { return ${con2}; },\n  products: ${con0 ? con0 : "dp"} => { return ${con3}; }\n})`; }
Generativa_de_un_abstract_factory_design_pattern = _* "un abstract factory design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_abstract_factory_como)
  con2:(Subsentencia_con_factories_como)
  con3:(Subsentencia_con_products_como)?
    { return `Castelog.metodos.un_abstract_factory_design_pattern({\n  abstractFactory: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  factories: ${con0 ? con0 : "dp"} => { return ${con2}; },\n    products: ${con0 ? con0 : "dp"} => { return ${con3}; }\n})`; }
Generativa_de_un_decorator_design_pattern = _* "un decorator design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_decorator_como)
  con2:(Subsentencia_con_decorables_como)
    { return `Castelog.metodos.un_decorator_design_pattern({\n  decorator: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  decorables: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_proxy_design_pattern = _* "un proxy design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_proxy_como)
  con2:(Subsentencia_con_proxified_como)
    { return `Castelog.metodos.un_proxy_design_pattern({\n  proxy: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  proxified: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_command_design_pattern = _* "un command design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_commander_como)
  con2:(Subsentencia_con_commands_como)
    { return `Castelog.metodos.un_command_design_pattern({\n  commander: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  commands: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_prototype_design_pattern = _* "un prototype design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_prototype_como)
  con2:(Subsentencia_con_original_como)
    { return `Castelog.metodos.un_prototype_design_pattern({\n  original: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  prototype: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_builder_design_pattern = _* "un builder design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_factory_como)
  con2:(Subsentencia_con_builders_como)
    { return `Castelog.metodos.un_builder_design_pattern({\n  factory: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  builders: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_observer_design_pattern = _* "un observer design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_observer_como)
  con2:(Subsentencia_con_observations_como)
    { return `Castelog.metodos.un_observer_design_pattern({\n  observer: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  observations: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_iterator_design_pattern = _* "un iterator design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_iterator_como)
  con2:(Subsentencia_con_iterables_como)
    { return `Castelog.metodos.un_iterator_design_pattern({\n  iterator: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  iterables: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_interpreter_design_pattern = _* "un interpreter design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_interpret_como)
  con2:(Subsentencia_con_interpretable_como)
    { return `Castelog.metodos.un_interpreter_design_pattern({\n  interpret: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  interpretable: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_bridge_design_pattern = _* "un bridge design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_original_como)
  con2:(Subsentencia_con_bridges_como)
    { return `Castelog.metodos.un_bridge_design_pattern({\n  original: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  bridges: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_adapter_design_pattern = _* "un adapter design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_adapter_como)
  con2:(Subsentencia_con_adaptations_como)
    { return `Castelog.metodos.un_adapter_design_pattern({\n  adapter: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  adaptations: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_composite_design_pattern = _* "un composite design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_composer_como)
  con2:(Subsentencia_con_composables_como)
  con3:(Subsentencia_con_composition_como)
    { return `Castelog.metodos.un_composite_design_pattern({\n  composer: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  composables: ${con0 ? con0 : "dp"} => { return ${con2}; },\n  composition: ${con0 ? con0 : "dp"} => { return ${con3}; }\n})`; }
Generativa_de_un_facade_design_pattern = _* "un facade design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_original_como)
  con2:(Subsentencia_con_facade_como)
    { return `Castelog.metodos.un_facade_design_pattern({\n  original: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  facade: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_flyweight_design_pattern = _* "un flyweight design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_flyweight_como)
  con2:(Subsentencia_con_data_como)
    { return `Castelog.metodos.un_flyweight_design_pattern({\n  flyweight: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  data: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_chain_of_responsability_design_pattern = _* "un chain of responsability design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_chain_como)
  con2:(Subsentencia_con_responsability_como)
    { return `Castelog.metodos.un_chain_of_responsability_design_pattern({\n  chain: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  responsability: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_mediator_design_pattern = _* "un mediator design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_mediator_como)
  con2:(Subsentencia_con_mediations_como)
  con3:(Subsentencia_con_data_como)
    { return `Castelog.metodos.un_mediator_design_pattern({\n  mediator: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  mediations: ${con0 ? con0 : "dp"} => { return ${con2}; },\n  data: ${con0 ? con0 : "dp"} => { return ${con3}; }\n})`; }
Generativa_de_un_memento_design_pattern = _* "un memento design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_memento_como)
  con2:(Subsentencia_con_memorizables_como)
  con3:(Subsentencia_con_commit_como)?
  con4:(Subsentencia_con_uncommit_como)?
  con5:(Subsentencia_con_state_como)?
    { return `Castelog.metodos.un_memento_design_pattern({\n  memorize: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  memorizable: ${con0 ? con0 : "dp"} => { return ${con2}; },\n  commit: ${con0 ? con0 : "dp"} => { return ${con3}; },\n  uncommit: ${con0 ? con0 : "dp"} => { return ${con4}; },\n  state: ${con0 ? con0 : "dp"} => { return ${con5}; }\n})`; }
Generativa_de_un_strategy_design_pattern = _* "un strategy design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_procedure_como)
  con2:(Subsentencia_con_strategies_como)
    { return `Castelog.metodos.un_strategy_design_pattern({\n  procedure: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  strategies: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_state_design_pattern = _* "un state design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_store_como)
  con2:(Subsentencia_con_state_como)
    { return `Castelog.metodos.un_state_design_pattern({\n  store: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  state: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_template_method_design_pattern = _* "un template method design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_template_como)
  con2:(Subsentencia_con_data_como)
    { return `Castelog.metodos.un_template_method_design_pattern({\n  template: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  data: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_visitor_design_pattern = _* "un visitor design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_visitor_como)
  con2:(Subsentencia_con_visitation_como)
    { return `Castelog.metodos.un_visitor_design_pattern({\n  visitor: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  visitation: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_progressive_composition_design_pattern = _* "un progressive composition design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_original_como)
  con2:(Subsentencia_con_components_como)
    { return `Castelog.metodos.un_progressive_composition_design_pattern({\n  original: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  components: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_progressive_decoration_design_pattern = _* "un progressive decoration design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_original_como)
  con2:(Subsentencia_con_decorators_como)
    { return `Castelog.metodos.un_progressive_decoration_design_pattern({\n  original: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  decorators: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }
Generativa_de_un_hooks_design_pattern = _* "un hooks design pattern" _+
  con0:(Subsentencia_llamado_con_etiqueta)?
  con1:(Subsentencia_con_hooks_como)
  con2:(Subsentencia_con_manager_como)
    { return `Castelog.metodos.un_hooks_design_pattern({\n  hooks: ${con0 ? con0 : "dp"} => { return ${con1}; },\n  manager: ${con0 ? con0 : "dp"} => { return ${con2}; }\n})`; }

Subsentencia_con_getter_como = _* "con getter como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_setter_como = _* "con setter como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_value_como = _* "con value como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_factory_como = _* "con factory como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_classes_como = _* "con classes como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_abstract_factory_como = _* "con abstractFactory como" _+ generativa:Generativa { return generativa }
Subsentencia_con_factories_como = _* "con factories como" _+ generativa:Generativa { return generativa }
Subsentencia_con_products_como = _* "con products como" _+ generativa:Generativa { return generativa }
Subsentencia_con_decorator_como = _* "con decorator como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_decorables_como = _* "con decorables como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_proxy_como = _* "con proxy como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_proxified_como = _* "con proxified como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_commander_como = _* "con commander como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_commands_como = _* "con commands como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_prototype_como = _* "con prototype como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_class_como = _* "con class como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_object_como = _* "con object como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_builders_como = _* "con builders como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_observer_como = _* "con observer como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_observations_como = _* "con observations como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_iterator_como = _* "con iterator como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_iterables_como = _* "con iterables como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_interpret_como = _* "con interpret como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_interpretable_como = _* "con interpretable como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_original_como = _* "con original como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_bridges_como = _* "con bridges como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_adapter_como = _* "con adapter como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_adaptations_como = _* "con adaptations como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_composer_como = _* "con composer como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_composables_como = _* "con composables como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_composition_como = _* "con composition como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_facade_como = _* "con facade como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_flyweight_como = _* "con flyweight como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_data_como = _* "con data como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_chain_como = _* "con chain como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_responsability_como = _* "con responsability como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_mediator_como = _* "con mediator como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_mediations_como = _* "con mediations como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_memento_como = _* "con memento como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_memorizables_como = _* "con memorizables como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_commit_como = _* "con commit como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_uncommit_como = _* "con uncommit como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_state_como = _* "con state como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_procedure_como = _* "con procedure como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_strategies_como = _* "con strategies como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_store_como = _* "con store como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_template_como = _* "con template como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_visitor_como = _* "con visitor como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_visitation_como = _* "con visitation como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_components_como = _* "con components como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_decorators_como = _* "con decorators como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_hooks_como = _* "con hooks como" _+ generativa:Generativa { return generativa; }
Subsentencia_con_manager_como = _* "con manager como" _+ generativa:Generativa { return generativa; }

Generativa_de_un_proxy = _* "un proxy" _*
  partir:Subsentencia_a_partir_de?
  proxificado:Subsentencia_proxificado_con
    { return `(new Proxy(${partir ? partir : "{}"}, ${proxificado}))` }

Subsentencia_proxificado_con = _* "proxificado con" _*
  proxificador:Generativa
    { return proxificador }

Generativa_de_una_proxificacion = _* "una proxificación" _*
  partir:Subsentencia_a_partir_de?
    { return `Castelog.metodos.una_proxificacion(${partir ? partir : "{}"})` }

Sentencia_de_siempre_que_proxificacion = _* ("Siempre que proxificación" / "siempre que proxificación") _*
  proxificacion:Generativa
  subsentencia1:Subsentencias_de_siempre_que_proxificacion_x1
  subsentencias:Subsentencias_de_siempre_que_proxificacion_x2
    { return subsentencias(proxificacion, subsentencia1) }

Subsentencias_de_siempre_que_proxificacion_x2 = subsentencia:(
  Subsentencias_de_siempre_que_proxifican_tipo_donde /
  Subsentencias_de_siempre_que_proxifican_tipo_deja_de_en_su_lugar )
    { return subsentencia }

Subsentencias_de_siempre_que_proxifican_tipo_donde =
  asincronamente:Token_asincronamente?
  parametros:Subsentencia_con_para_parametros_definidos?
  bloque:Bloque
  creando:Subsentencia_creando_o_asignando?
    { return  (proxificacion, accion) => `${creando ? creando : ''}Castelog.metodos.siempre_que_proxificacion(${proxificacion}, ${accion}, ${asincronamente ? 'async' : ''} (${parametros ? parametros : "evento_de_proxificacion"}) => {\n${bloque}\n});` }

Subsentencias_de_siempre_que_proxifican_tipo_deja_de_en_su_lugar = 
  deja_de:Subsentencia_deja_de
  en_su_lugar:Subsentencia_en_su_lugar?
    { return (proxificacion, accion) => `Castelog.metodos.siempre_que_proxificacion(${proxificacion}, ${accion}, {\n  deja_de: ${deja_de},\n  en_su_lugar: ${en_su_lugar}\n});`}

Subsentencia_deja_de = _* "deja de" _* 
  generativa:Generativa
    { return generativa }

Subsentencia_en_su_lugar = _* "en su lugar" _* 
  generativa:Generativa
    { return generativa }

Subsentencias_de_siempre_que_proxificacion_x1 = subsentencia:(
  Subsentencia_de_accede_a_cualquier_propiedad /
  Subsentencia_de_asigna_cualquier_propiedad /
  Subsentencia_de_accede_a_propiedad /
  Subsentencia_de_asigna_propiedad /
  Subsentencia_de_se_llama )
    { return subsentencia }
Subsentencia_de_accede_a_cualquier_propiedad = _* "accede a cualquier propiedad"
    { return `"accede a cualquier propiedad"` }
Subsentencia_de_asigna_cualquier_propiedad = _* "asigna cualquier propiedad"
    { return `"asigna cualquier propiedad"` }
Subsentencia_de_accede_a_propiedad = _* "accede a propiedad" _*
  propiedad:Generativa
    { return `"accede a propiedad", ${propiedad}` }
Subsentencia_de_asigna_propiedad = _* "asigna propiedad" _*
  propiedad:Generativa
    { return `"asigna propiedad", ${propiedad}` }
Subsentencia_de_se_llama = _* "se llama"
    { return `"se llama"` }

Generativa_de_un_resultado_de_proxificacion = _* "un resultado de proxificación"
  con:Subsentencia_con?
    { return `Castelog.metodos.un_resultado_de_proxificacion(${con ? con : ""})` }

Generativa_de_una_interfaz_vacia = _* "una interfaz vacía" 
  con:Subsentencia_con
    { return `Castelog.metodos.una_interfaz_vacia(${con})` }

Generativa_de_sabes_pues = Subgenerativa_de_sabes_pues_1

Generativa_de_una_funcion_literaria = _* "una función literaria donde {" _*
  bloque:Bloque_de_codigo_literalog
  partir:Subsentencia_a_partir_de_para_funcion_literaria
  reductor:Subsentencia_con_reductor_como?
  error:Subsentencia_en_errores?
    { return "Castelog.metodos.una_funcion_literaria(async function() { " + (bloque ? fromBlockAndCatchToCode(bloque, error, true, false) : "") + "}, " + partir + ", " + (reductor ? reductor : "Castelog.variables.noop") + ")" }

Subsentencia_con_reductor_como = _* "con reductor como" _*
  generativa:Generativa
    { return generativa }

Subsentencia_a_partir_de_para_funcion_literaria = _* "} a partir de" _*
  generativa:Generativa
    { return generativa }

Generativa_de_una_funcion_mixta = _* "una función mixta" _*
  configuraciones:Subsentencia_con?
  partir:Subsentencia_a_partir_de
    { return `Castelog.metodos.una_funcion_mixta(${partir}, ${configuraciones ? configuraciones : "[]"})` }

Bloque_de_codigo_literalog = _* 
  bloque:(((!Subsentencia_a_partir_de) _*) Codigo_literalog)
    { return bloque[1] }

Generativa_de_una_reduccion_recursiva = _* "una reducción recursiva" _*
  base:Subsentencia_basada_en
  partir:Subsentencia_a_partir_de?
  reduccion:Subsentencia_mediante
    { return `Castelog.metodos.una_reduccion_recursiva(${base}, ${reduccion}, ${partir})` }

Subsentencia_mediante = _* "mediante" _*
  generativa:Generativa
    { return generativa }

Subsentencia_basada_en = _* "basada en" _*
  generativa:Generativa
    { return generativa }

Subgenerativa_de_sabes_pues_1 = _* "¿" _* ("sabes" / "Sabes") _+
  sabes:Generativa _* "?" _* ("pues:" / "Pues:") _+
  pues:Generativa
    { return `(esto => ${pues})(${sabes})`}

Generativa_de_una_propiedad_para = _* "una propiedad" _+
  propiedad:Generativa _* "a partir de" _+
  objeto:Generativa
  defecto:((_* "en su defecto" _+) Generativa)?
    { return `Castelog.metodos.una_propiedad_para(${propiedad}, ${objeto}, ${defecto ? defecto : "undefined"})` }

Generativa_de_una_red_de_servidores_http_rest_automaticos = _* ("una red de servidores HTTP REST automáticos" / "una red de servidores http rest automáticos") _+ "en ruta" _+
  ruta:Generativa
  bloque:Subsentencia_donde_sin_parentesis_para_red_de_servidores
  error:Subsentencia_en_errores?
    { return `Castelog.metodos.una_red_de_servidores_http_rest_automaticos(${ruta}, async ($red_de_servidores_rest) => { ${fromBlockAndCatchToCode(bloque, error, true, false) } })`; }

Subsentencia_llamado = _* "llamado" _* generativa:Generativa { return generativa }
Subsentencia_llamado_con_etiqueta = _* "llamado" _* etiqueta:Etiqueta_de_variable_simple { return etiqueta }

Subsentencia_desde = _* "desde" _* generativa:Generativa { return generativa }

Generativa_de_un_conjunto_de_claves_del_objeto = _*
  "un conjunto de claves del objeto" _* 
  generativa:Generativa
    { return `Object.keys(${generativa})` }

Generativa_de_un_conjunto_de_valores_del_objeto = _*
  "un conjunto de valores del objeto" _* 
  generativa:Generativa
    { return `Object.values(${generativa})` }

Codigo_html_solo_text = (Codigo_html_humanizado / Codigo_html_solo_text_puro)
Codigo_html_solo_text_puro = Codigo_html { return text() }
Codigo_css_solo_text = (Codigo_css_humanizado/Codigo_css_solo_text_puro) { return text() }
Codigo_css_solo_text_puro = Codigo_css { return text() }
Codigo_html_humanizado = Regla_html_humanizada
Regla_html_humanizada = _* ("compuesta" / "compuesto") _* SIMBOLO_ABRIR_BLOQUE _*
  subreglas:Subregla_html_humanizada* _* SIMBOLO_CERRAR_BLOQUE
    { return subreglas }
Subregla_html_humanizada = _* "por un elemento" _*
  nombre:Nombre_para_html 
  propiedades:Subregla_html_humanizada_con_propiedades?
  contenidos:Subregla_html_humanizada_con_texto_o_compuesto?
    { return { element: nombre, attributes: propiedades, contents: contenidos } }
Subregla_html_humanizada_con_propiedades = _* "con propiedad" _*
  propiedad:Nombre_para_html _* "como" _*
  valor:Generativa
    { return { attribute: propiedad, value: valor } }
Nombre_para_html = [A-Za-z$_] [A-Za-z0-9$_]* { return text() }
Subregla_html_humanizada_con_texto_o_compuesto = Subregla_html_humanizada_con_texto / Subregla_html_humanizada_compuesto
Subregla_html_humanizada_compuesto = Regla_html_humanizada
Subregla_html_humanizada_con_texto = _* "con texto como" _*
  generativa:Generativa
    { return { type: "text", text: generativa } }
Codigo_css_humanizado = "not available yet" {}
Codigo_html_entre_parentesis = _* SIMBOLO_ABRIR_BLOQUE _*
  html:Codigo_html_solo_text _* SIMBOLO_CERRAR_BLOQUE
    { return html }
Codigo_css_entre_parentesis = _*
  usando:(Subsentencia_usando_2 _*)? SIMBOLO_ABRIR_BLOQUE _*
  css:Codigo_css_solo_text _* SIMBOLO_CERRAR_BLOQUE 
    { return JSON.stringify(css) + ", " + (usando ? JSON.stringify("{ " + usando[0] + " }") : "null") }
Subsentencia_usando_2 = _* "usando" _* parametros:Parametros_definidos_sin_parentesis { return parametros }

Token_eol_ok = ( ___+ __* ( "Ok" / "OK" ) ) {}

Codigo_js = bloque:Lenguaje_inicial_sin_salto_final { return bloque }

Subgenerativa_id_de_clase = _* etiqueta:(!("que extiende "/"con "/"donde ") Etiqueta_de_variable) { return etiqueta[1] }
Subgenerativa_extension_de_clase = _* Token_que_extiende_de _* generativa:Generativa { return "extends " + generativa }
Subgenerativa_contenido_de_clase = (_* (Token_con / Token_donde) )? _* SIMBOLO_ABRIR_BLOQUE _* componentes:Subgenerativa_componentes_de_clase _* SIMBOLO_CERRAR_BLOQUE { return "{ " + componentes + "\n}" } 

Subgenerativa_componentes_de_clase = componentes:Subgenerativa_componente_de_clase* { return componentes.join("\n")}
Subgenerativa_componente_de_clase = Metodo_estatico / Metodo_constructor / Metodo_dinamico / Propiedad_estatica / Propiedad_dinamica
Metodo_estatico = _* Token_de_metodo_estatico
  asincrono:(_* Token_asincrono)? _*
  etiqueta:Etiqueta_de_variable
  parametros:Subsentencia_con_para_parametros_definidos?
  bloque:Subsentencia_donde
  error:Subsentencia_en_errores? EOS
    { return "static " + (asincrono ? "async " : "") + etiqueta + ( !!parametros ? parametros : "()" ) + ( bloque ? error ? "{ " + fromBlockAndCatchToCode(bloque, error, true, true) + " }" : bloque : "{ }" ) }
Metodo_constructor = _* Token_de_metodo_dinamico _*
  etiqueta:"constructor"
  parametros:Subsentencia_con_para_parametros_definidos?
  derivado:Subsentencia_derivado_con_parametros_llamados?
  bloque:Subsentencia_donde_sin_parentesis
  error:Subsentencia_en_errores? EOS
    { return etiqueta + ( !!parametros ? parametros : "()" ) + ( bloque ? error ? ("{ " + fromBlockAndCatchToCode(bloque, error, true, false, (!!derivado ? derivado : "")) + " }") : ("{ " + (!!derivado ? derivado : "") + bloque + " }") : ("{ " + (!!derivado ? derivado : "") + " }") ) }
Metodo_dinamico = _* Token_de_metodo_dinamico
  asincrono:(_* Token_asincrono)? _*
  etiqueta:Etiqueta_de_variable
  parametros:Subsentencia_con_para_parametros_definidos?
  bloque:Subsentencia_donde
  error:Subsentencia_en_errores? EOS
    { return (asincrono ? "async " : "") + etiqueta + ( !!parametros ? parametros : "()" ) + ( bloque ? error ? "{ " + fromBlockAndCatchToCode(bloque, error, true, true) + " }" : bloque : "{ }" ) }
Propiedad_estatica = _* Token_de_propiedad_estatica _*
  etiqueta:Etiqueta_de_variable
  bloque:Subsentencia_donde
  error:Subsentencia_en_errores? EOS
    { return "static get " + etiqueta + "()" + ( bloque ? error ? "{ " + fromBlockAndCatchToCode(bloque, error, true, true) + " }" : bloque : "{ }" ) }
Propiedad_dinamica = _* Token_de_propiedad_dinamica _*
  etiqueta:Etiqueta_de_variable
  bloque:Subsentencia_donde
  error:Subsentencia_en_errores? EOS
    { return "get " + etiqueta + "()" + ( bloque ? error ? "{ " + fromBlockAndCatchToCode(bloque, error, true, true) + " }" : bloque : "{ }" ) }

Subsentencia_con_para_parametros_definidos = (_* "con" __)? _* parametros:Parametros_definidos { return parametros }
Subsentencia_derivado_con_parametros_llamados =
  _* "derivado con" _*
  parametros:Parametros_llamados
    { return "super" + parametros + ";\n" }

Subsentencia_con = (_* "con" __)? _* parametros:Parametros_llamados { return parametros }
Subsentencia_con_para_generativa_unica = (_* "con" __) _* parametros:Generativa { return parametros }
Subsentencia_configurada_con_para_generativa_unica = (_* "configurada con" __) _* parametros:Generativa { return parametros }
Subsentencia_donde = bloque:Subsentencia_donde_sin_parentesis { return "{ " + bloque + "\n}" }
Subsentencia_donde_sin_parentesis = (_* "donde" __)? _* bloque:Bloque { return bloque }
Subsentencia_donde_sin_parentesis_para_red_de_servidores = (_* "donde" __)? _* bloque:Bloque_para_red_de_servidores { return bloque }

Bloque_para_red_de_servidores = _* SIMBOLO_ABRIR_BLOQUE _* bloque:Sentencias_de_red_de_servidores _* SIMBOLO_CERRAR_BLOQUE { return bloque }

SIMBOLO_ABRIR_BLOQUE = ((_* "{" _* ) / (_* "iniciobloque" _ )) {}
SIMBOLO_CERRAR_BLOQUE = ((_* "}") / (_* "okbloque" &(_/EOF) )) {}

SIMBOLO_ABRIR_TEXTO = (_* "iniciotexto" _)
SIMBOLO_CERRAR_TEXTO = (_* "oktexto" &(_/EOF) )

SIMBOLO_ABRIR_NÚMERO = (_* "inicionúmero" _)
SIMBOLO_CERRAR_NÚMERO = (_* "oknúmero" &(_/EOF) )

SIMBOLO_ABRIR_LISTA = ((_* "[" _* )/(_* "iniciolista" _))
SIMBOLO_CERRAR_LISTA = ((_* "]" _* )/(_* "oklista" &(_/EOF) ))

SIMBOLO_ABRIR_GRUPO = ((_* "(" _* )/(_* "iniciogrupo" _))
SIMBOLO_CERRAR_GRUPO = ((_* ")" _* )/(_* "okgrupo" &(_/EOF) ))

SIMBOLO_DE_COMA = ((_* ",")/(_* "coma" _*))
SIMBOLO_DE_PUNTO = ("."/(_* "punto" (_+/EOF) ))
SIMBOLO_DE_PUNTO_PARA_ACCESO_A_VARIABLE = ("."/(_* "punto" _+ ))

Sentencias_de_red_de_servidores = 
  configuraciones:Sentencias_de_configuracion_de_servidores
  instalaciones:Sentencias_de_instalacion_de_servidores
  ficheros_de_servidor:Sentencias_de_agregacion_de_ficheros_y_directorios_en_servidor
  inicios:Sentencias_de_inicio_de_servidores
  ficheros_de_aplicacion:Sentencias_de_agregacion_de_ficheros_y_directorios_en_aplicacion
  proyectos:Sentencias_de_agregacion_de_proyectos
  ficheros_de_proyecto:Sentencias_de_agregacion_de_ficheros_y_directorios_en_proyecto
  tablas:Sentencias_de_agregacion_de_tablas
  procesos:Sentencias_de_agregacion_de_procesos
  datos:Sentencias_de_agregacion_de_datos
  hooks:Sentencias_de_agregacion_de_hooks
  recompilacion:Sentencia_de_recompilacion_de_aplicacion
    { return [].concat(configuraciones, instalaciones, ficheros_de_servidor, inicios, ficheros_de_aplicacion, proyectos, ficheros_de_proyecto, tablas, procesos, datos, hooks, recompilacion).filter(i => typeof i === 'string').join("\n") }

Sentencias_de_configuracion_de_servidores = ( Sentencia_de_configuracion_de_servidor / Sentencia_en_este_punto )*
Sentencias_de_instalacion_de_servidores = ( Sentencia_de_instalacion_de_servidor / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_ficheros_y_directorios_en_servidor = ( Sentencia_de_agregacion_de_ficheros_y_directorios_en_servidor / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_ficheros_y_directorios_en_aplicacion = ( Sentencia_de_agregacion_de_ficheros_y_directorios_en_aplicacion / Sentencia_en_este_punto )*
Sentencias_de_inicio_de_servidores = ( Sentencia_de_inicio_de_servidores / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_proyectos = ( Sentencia_de_agregacion_de_proyecto / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_ficheros_y_directorios_en_proyecto = ( Sentencia_de_agregacion_de_ficheros_y_directorios_en_proyecto / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_tablas = ( Sentencia_de_agregacion_de_tabla / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_procesos = ( Sentencia_de_agregacion_de_proceso / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_datos = ( Sentencia_de_agregacion_de_dato / Sentencia_en_este_punto )*
Sentencias_de_agregacion_de_hooks = ( Sentencias_de_agregacion_de_hook / Sentencia_en_este_punto )*
Sentencia_de_recompilacion_de_aplicacion = ( Sentencia_de_recompilacion_de_aplicacion_1 / Sentencia_en_este_punto )*

Sentencia_de_recompilacion_de_aplicacion_1 = _* ("Recompilo aplicación estática" / "recompilo aplicación estática") EOS
    { return 'await $red_de_servidores_rest.execute({\n  comando: "recompileStaticApplication" });' }

Sentencia_de_configuracion_de_servidor = _* "Establezco configuración con" _+
  configuracion:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addConfigurations", \n  ...${configuracion} });` }

Sentencia_de_instalacion_de_servidor = _* ( "Instalo un servidor en" / "instalo un servidor en" ) _+
  directorio:Generativa _+ 
  noReseteado:("sin resetear" _+)? "configurado con" _*
  configuracion:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addServer", \n  resetear: ${noReseteado ? "false" : "true"}, \n  directorio: ${directorio},\n  configuracion: ${configuracion} });` }

Sentencia_de_agregacion_de_ficheros_y_directorios_en_servidor = _* 
  tipo:( "Agrego fichero en servidor" / "agrego fichero en servidor" / "Agrego directorio en servidor" / "agrego directorio en servidor" ) _+
  servidor:Generativa _+ "con origen" _+
  origen:Generativa _+ "con destino" _+
  destino:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addFileToServer",\n  servidor: ${servidor},\n  tipo: ${tipo.indexOf("fichero") !== -1 ? JSON.stringify("fichero") : JSON.stringify("directorio")},\n  origen: ${origen},\n  destino: ${destino}\n});` }

Sentencia_de_agregacion_de_ficheros_y_directorios_en_aplicacion = _* 
  tipo:( "Agrego fichero en aplicación" / "agrego fichero en aplicación" / "Agrego directorio en aplicación" / "agrego directorio en aplicación" ) _+ "con origen" _+
  origen:Generativa _+ "con destino" _+
  destino:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addFileToApplication",\n  tipo: ${tipo.indexOf("fichero") !== -1 ? JSON.stringify("fichero") : JSON.stringify("directorio")},\n  origen: ${origen},\n  destino: ${destino}\n});` }

Sentencia_de_agregacion_de_ficheros_y_directorios_en_proyecto = _* 
  tipo:( "Agrego fichero en proyecto" / "agrego fichero en proyecto" / "Agrego directorio en proyecto" / "agrego directorio en proyecto" ) _+
  proyecto:Generativa _+ "con origen" _+
  origen:Generativa _+ "con destino" _+
  destino:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addFileToProject",\n  proyecto: ${proyecto},\n  tipo: ${tipo.indexOf("fichero") !== -1 ? JSON.stringify("fichero") : JSON.stringify("directorio")},\n  origen: ${origen},\n  destino: ${destino}\n});` }

Sentencia_de_inicio_de_servidores = _* ( "Inicio servidores" / "inicio servidores" ) _+
  servidores:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "startServers", \n  servidores: ${servidores} });` }

Sentencia_de_agregacion_de_proyecto = _* ( "Agrego un proyecto llamado" / "agrego un proyecto llamado" ) _+ 
  proyecto:Generativa _+ "en servidor" _+
  servidor:Generativa _+ 
  autentificador:Subsentencia_de_autentificado_por _+ "configurado con" _+
  configuraciones:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addProject", \n  proyecto: ${proyecto},\n  servidor: ${servidor},\n  autentificador: ${autentificador},\n  configuraciones: ${configuraciones} });` }

Subsentencia_de_autentificado_por = ( Subsentencia_de_autentificado_por_si_mismo / Subsentencia_de_autentificado_por_proyecto )
Subsentencia_de_autentificado_por_si_mismo = "autentificado por sí mismo" { return null }
Subsentencia_de_autentificado_por_proyecto = "autentificado por proyecto" _+  proyecto:Generativa { return proyecto }

Sentencia_de_agregacion_de_tabla = _* ( "Agrego una tabla llamada" / "agrego una tabla llamada" ) _+ 
  tabla:Generativa _+ "en proyecto" _+
  proyecto:Generativa _+ "configurada con" _+
  configuraciones:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addTable", \n  tabla: ${tabla},\n  proyecto: ${proyecto},\n  configuraciones: ${configuraciones} });` }

Sentencia_en_este_punto = _* ( "En este punto" / "En este punto" ) _*
  bloque:Bloque EOS
    { return bloque }

Sentencia_de_agregacion_de_proceso = _* ( "Agrego un proceso llamado" / "agrego un proceso llamado" ) _+
  nombre:Generativa _+ "con ruta" _+
  ruta:Generativa _+ "en proyectos" _+
  proyectos:Generativa _+ "basado en" _+
  proceso:Generativa EOS
    { return `await $red_de_servidores_rest.execute({\n  comando: "addProcess", \n  nombre: ${nombre},\n  proyectos: ${proyectos},\n  ruta: ${ruta},\n  proceso: ${proceso} });` }

Sentencia_de_agregacion_de_dato = _* ( "Agrego datos en proyecto" / "agrego datos en proyecto" ) _+
  proyecto:Generativa _+ "en tabla" _+
  tabla:Generativa _+ "a partir de" _+
  datos:Generativa
  salida:( _+ Subsentencia_creando_o_asignando )? EOS
    { return `${ salida ? salida[1] : '' }await $red_de_servidores_rest.execute({\n  comando: "addData", \n  proyecto: ${proyecto},\n  tabla: ${tabla},\n  datos: ${datos} });` }

Sentencias_de_agregacion_de_hook = _* ( "Agrego hook de aplicación" / "agrego hook de aplicación" ) _+ "en" _+
  secuencia:Generativa _+ "basado en" _+
  hook:Generativa
  salida:( _+ Subsentencia_creando_o_asignando )? EOS
    { return `${ salida ? salida[1] : '' }await $red_de_servidores_rest.execute({\n  comando: "addHook", \n  secuencia: ${secuencia},\n  hook: ${hook} });` }

Parametros_definidos = parametros:Parametros_definidos_sin_parentesis
    { return "( " + parametros + " )" }
Parametros_definidos_sin_parentesis = SIMBOLO_ABRIR_GRUPO _* parametros:Lista_de_parametros_definidos? _* SIMBOLO_CERRAR_GRUPO
    { return parametros ? parametros : "" }

Subsentencia_o_en_su_defecto = _* "o en su defecto" _*
  generativa:Generativa
    { return " = " + generativa }

Lista_de_parametros_definidos = 
  param_1:(Parametro_definido_1 / Parametro_definido_incluyo)
  param_n:Parametro_definido_n*
  param_e:Parametro_definido_lo_demas_en?
    { return [param_1].concat(param_n || []).concat(param_e || []).join(",\n") }
Parametro_definido_1 =
  parametro:Etiqueta_de_variable
  defecto:( Subsentencia_o_en_su_defecto )?
    { return parametro + ( defecto ? defecto : "" ) }
Parametro_definido_n = SIMBOLO_DE_COMA _* parametro:Parametro_definido_1 { return parametro }
Parametro_definido_lo_demas_en =
  SIMBOLO_DE_COMA? _* "..." _* "lo demás en" _*
  acceso:Acceso_a_variable
    { return "..." + acceso }

Parametros_llamados = SIMBOLO_ABRIR_GRUPO _* parametros:Lista_de_parametros_llamados? _* SIMBOLO_CERRAR_GRUPO
    { return "( " + (parametros ? parametros : "") + " )" }
Parametros_llamados_sin_devolver_parentesis = SIMBOLO_ABRIR_GRUPO _* parametros:Lista_de_parametros_llamados? _* SIMBOLO_CERRAR_GRUPO
    { return (parametros ? parametros : "") }

Lista_de_parametros_llamados = _*
  param_1:(Parametro_llamado_1 / Parametro_llamado_incluyo)
  param_n:Parametro_llamado_n* 
    { return [param_1].concat(param_n || []).join(",\n") }
Parametro_llamado_1 = parametro:Generativa { return parametro }
Parametro_llamado_n = SIMBOLO_DE_COMA _* parametro:(Parametro_llamado_incluyo / Parametro_llamado_1) { return parametro }
Parametro_llamado_incluyo = 
  SIMBOLO_DE_COMA? _* "..." _* ( "incluyo" / "Incluyo" ) _*
  generativa:Generativa
    { return "\n...(" + generativa + " )" }
Parametro_definido_incluyo = 
  SIMBOLO_DE_COMA? _* "..." _* ( "incluyo" / "Incluyo" ) _*
  generativa:Generativa
    { return "..." + generativa }

Lista_de_propiedades_de_objeto = (Lista_de_propiedades_de_objeto_sintaxis_2 / Lista_de_propiedades_de_objeto_sintaxis_1)
Lista_de_propiedades_de_objeto_sintaxis_1 = _* 
  prop_1:(Propiedad_de_objeto)
  prop_n:Propiedad_de_objeto_n_sintaxis_1*
    { return [prop_1].concat(prop_n || []).join(",\n") }
Lista_de_propiedades_de_objeto_sintaxis_2 = _* 
  prop_1:Propiedad_de_objeto_formal
  prop_n:Propiedad_de_objeto_n_sintaxis_2*
    { return [prop_1].concat(prop_n || []).join(",\n") }
Propiedad_de_objeto = ( Propiedad_de_objeto_1_sintaxis_1 / Parametro_llamado_incluyo / Propiedad_de_objeto_1_sintaxis_3 )
Propiedad_de_objeto_formal = ( Propiedad_de_objeto_1_sintaxis_2 / Metodo_de_objeto_1_sintaxis_1 / Parametro_llamado_incluyo )
Propiedad_de_objeto_1_sintaxis_1 = _*
  id:(Etiqueta_de_variable/Generativa_de_texto/Espacio_de_generativa_dinamica) (_* ":" _*)
  valor:Generativa
    { return id + ":" + valor }
Metodo_de_objeto_1_sintaxis_1 = _* ("Método " / "método ")
  asincrono:(Token_asincrono _*)?
  id:(Etiqueta_de_variable/Generativa_de_texto/Espacio_de_generativa_dinamica)
  parametros:Subsentencia_con_para_parametros_definidos? ( _* Token_donde )?
  bloque:Bloque?
  error:Subsentencia_en_errores? EOS
    { return (asincrono ? "async " : "") + id + (parametros ? parametros : "()") + " {" + (bloque ? fromBlockAndCatchToCode(bloque, error, true, false) : "") + "\n}" }

Propiedad_de_objeto_1_sintaxis_2 = _* ( "Propiedad " / "propiedad " / "Método " / "método " )
  id:(Etiqueta_de_variable/Generativa_de_texto/Espacio_de_generativa_dinamica) " como "
  valor:Generativa EOS
    { return id + ":" + valor }
Propiedad_de_objeto_1_sintaxis_3 = _* etiqueta:Etiqueta_de_variable { return etiqueta }
Propiedad_de_objeto_n_sintaxis_1 = SIMBOLO_DE_COMA prop:( Propiedad_de_objeto ) { return prop }
Propiedad_de_objeto_n_sintaxis_2 = prop:( Propiedad_de_objeto_formal ) { return prop }

Espacio_de_generativa_dinamica = ( Espacio_de_generativa_dinamica_1 / Espacio_de_generativa_dinamica_2 )
Espacio_de_generativa_dinamica_1 = _* SIMBOLO_ABRIR_BLOQUE _* generativa:Generativa _* SIMBOLO_CERRAR_BLOQUE { return "[ " + generativa + " ]" }
Espacio_de_generativa_dinamica_2 = _* SIMBOLO_ABRIR_LISTA _* generativa:Generativa _* SIMBOLO_CERRAR_LISTA { return "[ " + generativa + " ]" }

Lista_de_items_de_array = ( Lista_de_items_de_array_sintaxis_2 / Lista_de_items_de_array_sintaxis_1 )

Lista_de_items_de_array_sintaxis_1 = _*
  item_1:(Item_de_array_sintaxis_1_item_1 / Parametro_llamado_incluyo)
  item_n:Item_de_array_sintaxis_1_item_n*
    { return [item_1].concat(item_n || []).join(",\n") }
Item_de_array_sintaxis_1_item_1 = _*
  valor:Generativa
    { return valor }
Item_de_array_sintaxis_1_item_n = SIMBOLO_DE_COMA item:(Item_de_array_sintaxis_1_item_1 / Parametro_llamado_incluyo) { return item }

Lista_de_items_de_array_sintaxis_2 = _*
  item_1:(Item_de_array_sintaxis_2_item_1 / Parametro_llamado_incluyo)
  item_n:Item_de_array_sintaxis_2_item_n*
    { return [item_1].concat(item_n || []).join(",\n") }
Item_de_array_sintaxis_2_item_1 = _* ("Ítem " / "ítem ")
  valor:Generativa
  EOS
    { return valor }
Item_de_array_sintaxis_2_item_n = item:(Item_de_array_sintaxis_2_item_1 / Parametro_llamado_incluyo) { return item }

Prependice_de_generativa = (Prependice_de_negacion / Prependice_de_asincronamente)
Prependice_de_negacion = "no" _* { return "(!(${generativa}))" }
Prependice_de_asincronamente = Token_asincronamente _* { return "(await ${generativa})"; }

Apendice_de_generativa = apendice:(
  Hook_para_apendice_preferente /
  Apendice_de_suma /
  Apendice_de_resta /
  Apendice_de_multiplicacion /
  Apendice_de_division /
  Apendice_de_modulo /
  Apendice_de_mapeado_por_su_propiedad /
  Apendice_de_mapeado /
  Apendice_de_filtrado /
  Apendice_de_reducido /
  Apendice_de_modificado /
  Apendice_de_extendido_por /
  Apendice_de_concatenado_por /
  Apendice_de_siendo /
  Apendices_negables / 
  Apendice_de_conjuncion /
  Apendice_de_disjuncion /
  Apendice_de_numerizacion /
  Apendice_de_retornando /
  Apendice_de_acceso_a_variable_llamable /
  Apendice_de_textualizacion /
  Hook_para_apendice )
    { return apendice }

Apendices_negables =
  negacion:(_* "no")?
  apendice:Apendice_negable
    { return (negacion ? "(!(" + apendice + "))" : apendice) }

Apendice_negable = apendice:(
  Hook_para_apendice_negable_preferente /
  Apendice_de_es_mayor_o_igual_que /
  Apendice_de_es_menor_o_igual_que /
  Apendice_de_es_mayor_que /
  Apendice_de_es_menor_que /
  Apendice_de_es_igual_que /
  Apendice_de_es_diferente_que /
  Apendice_de_contiene_valor / 
  Apendice_de_contiene_clave / 
  Apendice_de_esta_contenido / 
  Apendice_de_es_tipo_numero_normal /
  Apendice_de_es_tipo_numero /
  Apendice_de_es_tipo_texto /
  Apendice_de_es_tipo_objeto /
  Apendice_de_es_tipo_lista /
  Apendice_de_es_tipo_funcion /
  Apendice_de_es_tipo_indefinido /
  Apendice_de_es_instancia_de /
  Apendice_de_es_tipo_booleano /
  Hook_para_apendice_negable )
    { return apendice }

Apendice_de_suma = _* "+" _* generativa:Generativa
    { return "${generativa} + " + generativa }
Apendice_de_resta = _* "-" _* generativa:Generativa
    { return "${generativa} - " + generativa }
Apendice_de_multiplicacion = _* "*" _* generativa:Generativa
    { return "${generativa} * " + generativa }
Apendice_de_division = _* "/" _* generativa:Generativa
    { return "${generativa} / " + generativa }
Apendice_de_modulo = _* "%" _* generativa:Generativa
    { return "${generativa} % " + generativa }
Apendice_de_mapeado_por_su_propiedad = _* "mapeado por su propiedad" _* prop:Generativa
    { return "((list, column) => {const output = []; const listItems = Object.values(list); for(let index=0; index<listItems.length; index++) { const row = listItems[index]; output.push(row[column]); } return output; })(${generativa}, " + prop + " )" }

Apendice_de_mapeado = ( Apendice_de_mapeado_donde / Apendice_de_mapeado_por )
Apendice_de_mapeado_donde = _* "mapeado"
  asincronamente:Token_asincronamente?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_mapeado_por(${generativa}, " + `${parametros ? parametros : "(item, output, key, index, original)"} => {\n${bloque}\n}, null, ${errores})` }
Apendice_de_mapeado_por = _* "mapeado" _*
  asincronamente:Token_asincronamente?
  por:Subsentencia_por
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_mapeado_por(${generativa}, " + `${por}, null, ${errores})` }

Apendice_de_filtrado = ( Apendice_de_filtrado_donde / Apendice_de_filtrado_por )
Apendice_de_filtrado_donde = _* "filtrado"
  asincronamente:Token_asincronamente?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_filtrado_por(${generativa}, " + `${parametros ? parametros : "(item, output, key, index, original)"} => {\n${bloque}\n}, null, ${errores})` }
Apendice_de_filtrado_por = _* "filtrado" _*
  asincronamente:Token_asincronamente?
  por:Subsentencia_por
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_filtrado_por(${generativa}, " + `${por}, null, ${errores})` }

Apendice_de_reducido = ( Apendice_de_reducido_donde / Apendice_de_reducido_por )
Apendice_de_reducido_donde = _* "reducido"
  asincronamente:Token_asincronamente?
  desde:Subsentencia_desde?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_reducido_por(${generativa}, " + `${parametros ? parametros : "(item, output, key, index, original)"} => {\n${bloque}\n}, ${desde}, ${errores})` }
Apendice_de_reducido_por = _* "reducido" _*
  asincronamente:Token_asincronamente?
  desde:Subsentencia_desde?
  por:Subsentencia_por
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_reducido_por(${generativa}, " + `${por}, ${desde}, ${errores})` }

Apendice_de_modificado = ( Apendice_de_modificado_donde / Apendice_de_modificado_por )
Apendice_de_modificado_donde = _* "modificado"
  asincronamente:Token_asincronamente?
  parametros:Subsentencia_con?
  bloque:Subsentencia_donde_sin_parentesis
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_modificado_por(${generativa}, " + `${parametros ? parametros : "(item, output, key, index, original)"} => {\n${bloque}\n}, ${desde}, ${errores})` }
Apendice_de_modificado_por = _* "modificado" _*
  asincronamente:Token_asincronamente?
  por:Subsentencia_por
  errores:Subsentencia_en_errores_como_funcion?
    { return (asincronamente ? "await " : "") + "Castelog.metodos.un_modificado_por(${generativa}, " + `${bloque}, ${desde}, ${errores})` }

Subsentencia_por = _* "por" _* reducer:Generativa { return reducer }

Apendice_de_extendido_por = _* "extendido por" _* extension_1:Generativa extension_n:Subsentencia_de_tambien_extendido_por?
    { return "Object.assign(${generativa}, " + extension_1 + ( extension_n ? (', ' + extension_n) : '' ) + " )" }
Apendice_de_concatenado_por = _* "concatenado por" _* extension_1:Generativa extension_n:Subsentencia_de_tambien_concatenado_por?
    { return "(${generativa}).concat(" + extension_1 + ( extension_n ? (', ' + extension_n) : '' ) + " )" }
Apendice_de_conjuncion = _* "y" _+ generativa:Generativa
    { return "${generativa} && " + generativa + "" }
Apendice_de_disjuncion = _* "o" _+ generativa:Generativa
    { return "${generativa} || " + generativa + "" }
Apendice_de_numerizacion = _* "numerizado"
    { return "parseFloat(${generativa})" }
Apendice_de_textualizacion = _* "textualizado"
    { return "JSON.stringify(${generativa}, null, 2)" }
Apendice_de_acceso_a_variable_llamable = accesorio:Accesorio_a_variable_llamable
    { return "${generativa}" + accesorio }
Apendice_de_siendo = _* "siendo" _* siendo:(Caracteristicas_de_siendo / Bloque_de_siendo)
    { return `Castelog.metodos.siendo(\${generativa}, [${siendo}])` }

Subsentencia_de_tambien_extendido_por = sentencias:Subsentencia_de_tambien_extendido_por_1+ 
    { return sentencias.join(", ") }
Subsentencia_de_tambien_extendido_por_1 = _* "también extendido por" _+ extension:Generativa
    { return extension }

Subsentencia_de_tambien_concatenado_por = sentencias:Subsentencia_de_tambien_concatenado_por_1+ 
    { return sentencias.join(", ") }
Subsentencia_de_tambien_concatenado_por_1 = _* "también concatenado por" _+ concatenacion:Generativa
    { return concatenacion }

Bloque_de_siendo = _* SIMBOLO_ABRIR_BLOQUE _* caracteristicas:Caracteristicas_de_siendo? _* SIMBOLO_CERRAR_BLOQUE
    { return caracteristicas }

Caracteristicas_de_siendo = caracteristicas:Caracteristica_de_siendo+
    { return caracteristicas.join(",\n") }
Caracteristica_de_siendo = ( Caracteristica_de_siendo_3 / Caracteristica_de_siendo_2 / Caracteristica_de_siendo_1 )
Caracteristica_de_siendo_1 = _*
  asincronamente:Token_asincronamente? _*
  atributo:Atributo_1_de_siendo
  parametros:Parametros_de_atributo_de_siendo?
    { return generate_siendo_attribute_expression(asincronamente ? true : false, atributo, parametros) }

Caracteristica_de_siendo_2 = _*
  atributo:Atributo_2_de_siendo
    { return `${atributo}` }

Caracteristica_de_siendo_3 = _*
  atributo:Atributo_3_de_siendo
  { return `...${atributo}` }

Atributo_3_de_siendo = _* "@@@" atributo:Generativa { return atributo }
Atributo_2_de_siendo = _* "@@" atributo:Generativa { return atributo }
Atributo_1_de_siendo = _* "@" atributo:Etiqueta_de_variable_simple { return JSON.stringify(atributo) }

Parametros_de_atributo_de_siendo = ( Parametros_de_atributo_de_siendo_1 / Parametros_de_atributo_de_siendo_2 )
Parametros_de_atributo_de_siendo_1 = _* parametro:Parametros_llamados_sin_devolver_parentesis { return parametro }
Parametros_de_atributo_de_siendo_2 = _* parametro:Generativa { return parametro }

Apendice_de_retornando = _* "retornando" _+
  parametro:Etiqueta_de_variable_simple _+ "como" _+
  transformacion:Generativa
    { return { before: "((" + parametro + ") => " + transformacion + ")(", after: SIMBOLO_CERRAR_GRUPO } }

Apendice_de_es_mayor_o_igual_que = _* "es mayor o igual que" _* generativa:Generativa
    { return "${generativa} >= " + generativa }
Apendice_de_es_menor_o_igual_que = _* "es menor o igual que" _* generativa:Generativa
    { return "${generativa} <= " + generativa }
Apendice_de_es_mayor_que = _* "es mayor que" _* generativa:Generativa
    { return "${generativa} > " + generativa }
Apendice_de_es_menor_que = _* "es menor que" _* generativa:Generativa
    { return "${generativa} < " + generativa }
Apendice_de_es_igual_que = _* "es igual que" _* generativa:Generativa
    { return "${generativa} === " + generativa }
Apendice_de_es_diferente_que = _* "es diferente que" _* generativa:Generativa
    { return "${generativa} !== " + generativa }
Apendice_de_contiene_valor = _* "contiene valor" _* generativa:Generativa
    { return "${generativa}.indexOf(" + generativa + ") !== -1" }
Apendice_de_contiene_clave = _* "contiene clave" _* generativa:Generativa
    { return generativa + " in ${generativa}" }
Apendice_de_esta_contenido = _* ("está contenido" / "está contenida") clave:(_+ ("como clave" / "como valor"))? _+ "en" _+ generativa:Generativa
    { return clave ? (clave[1] === "como clave") ? ('((item, list) => item in list)(${generativa}, ' + generativa + ')') : (clave[1] === "como valor") ? ('((item, list) => Object.values(list).indexOf(item) !== -1)(${generativa}, ' + generativa + ')') : ('((item, list) => list.indexOf(item) !== -1)(${generativa}, ' + generativa + ')') : ('((item, list) => list.indexOf(item) !== -1)(${generativa}, ' + generativa + ')') }
Apendice_de_es_tipo_numero_normal = _* "es tipo número normal" 
    { return "((o) => (typeof o === 'number') && (!isNaN(o)) && (o !== Infinity))(${generativa})" }
Apendice_de_es_tipo_numero = _* "es tipo número" 
    { return "typeof ${generativa} === 'number'" }
Apendice_de_es_tipo_texto = _* "es tipo texto" 
    { return "typeof ${generativa} === 'string'" }
Apendice_de_es_tipo_objeto = _* "es tipo objeto" 
    { return "typeof ${generativa} === 'object'" }
Apendice_de_es_tipo_lista = _* "es tipo lista" 
    { return "Array.isArray(${generativa})" }
Apendice_de_es_tipo_funcion = _* "es tipo función" 
    { return "typeof ${generativa} === 'function'" }
Apendice_de_es_tipo_indefinido = _* "es tipo indefinido" 
    { return "typeof ${generativa} === 'undefined'" }
Apendice_de_es_tipo_booleano = _* "es tipo booleano" 
    { return "typeof ${generativa} === 'boolean'" }
Apendice_de_es_instancia_de = _* "es instancia de" _*
  generativa:Generativa
    { return "${generativa} instanceof " + generativa }

Subsentencia_lanzando = _* "lanzando" _* generativa:Generativa { return generativa }

Generativa_de_un_manifiesto_web = _* "un manifiesto web con" _*
  generativa:Generativa
    { return `JSON.stringify(Object.assign({}, ${JSON.stringify(DEFAULT_WEBMANIFEST_CONTENTS, 2, null)}, ${generativa}), null, 2)` }

Sentencia_de_exporto_un_manifiesto_web = _* ("Exporto" / "exporto") _*
  manifiesto:Generativa_de_un_manifiesto_web
  fichero:Subsentencia_en_fichero
    { return `require("fs").writeFileSync(${fichero}, ${manifiesto}, "utf8");` }

Subsentencia_en_fichero = _* "en fichero" _*
  fichero:Generativa
    { return fichero }




















Hook_para_generativa_preferente = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: GENERATIVA PREFERENTE }~@
  )
    { return token }
Hook_para_generativa = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: GENERATIVA }~@
  )
    { return token }
Hook_para_sentencia_preferente = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: SENTENCIA PREFERENTE }~@
  )
    { return token }
Hook_para_sentencia = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: SENTENCIA }~@
  )
    { return token }
Hook_para_apendice_preferente = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: APÉNDICE PREFERENTE }~@
  )
    { return token }
Hook_para_apendice = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: APÉNDICE }~@
  )
    { return token }
Hook_para_prependice_preferente = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: PREPÉNDICE PREFERENTE }~@
  )
    { return token }
Hook_para_prependice = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: PREPÉNDICE }~@
  )
    { return token }
Hook_para_apendice_negable_preferente = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: APÉNDICE NEGABLE PREFERENTE }~@
  )
    { return token }
Hook_para_apendice_negable = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: APÉNDICE NEGABLE }~@
  )
    { return token }
Hook_para_comentario = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: COMENTARIO }~@
  )
    { return token }
Hook_para_comentario_preferente = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: COMENTARIO PREFERENTE }~@
  )
    { return token }
Hook_para_sentencia_completa = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: SENTENCIA COMPLETA }~@
  )
    { return token }
Hook_para_sentencia_completa_preferente = token:(
  (!(.).)+
  // @~{ Hooks del Parser de Castelog: SENTENCIA COMPLETA PREFERENTE }~@
  )
    { return token }

// @~{ Hooks del Parser de Castelog: CONTENIDOS DE SINTAXIS }~@