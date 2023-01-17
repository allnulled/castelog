Codigo_literalog = _*
  sentencias:Sentencias_literalog _*
    { return formatear_ast_literalog(sentencias) }

Sentencias_literalog = _*
  sentencias:Sentencia_completa_literalog*
    { return sentencias ? sentencias : [] }

Sentencias_literalog_comadas = _*
  sentencias:Sentencia_completa_literalog*
    { return sentencias ? sentencias : [] }

Sentencia_completa_literalog = _*
  v:Variable_llamable_continuable_literalog _* EOS
    { return { tipo: "sentencia de variable llamable continuable", variable: v } }

Variable_literalog = _*
  r1:Nombre_de_variable_literalog
  r2:Accesos_de_variable_literalog*
    { return [].concat([ r1 ]).concat(r2 ? r2 : []) }

Variable_llamable_continuable_literalog = _*
  continuaciones:Variable_llamable_literalog+
    { return continuaciones }

Variable_llamable_literalog = _*
  base:Variable_literalog
  llamada:Generativa_literalog?
    { return { base, llamada: llamada ? llamada : undefined } }

Nombre_de_variable_literalog = [A-Za-z_ÁÉÍÓÚÀÈÌÒÙáéíóúàèìòùÄËÏÖÜäëïöüâêîôûÑñ] [A-Za-z0-9_ÁÉÍÓÚÀÈÌÒÙáéíóúàèìòùÄËÏÖÜäëïöüâêîôûÑñ]*
    { return text() }

Referencia_de_variable_literalog = _* "{" _*
  generativa:Generativa_literalog _* "}"
    { return { referencia: generativa } }

Nombre_de_variable_literalog_prespaciado = _+
  nombre:Nombre_de_variable_literalog
    { return nombre }

Accesos_de_variable_literalog =
  a:( Nombre_de_variable_literalog_prespaciado / Referencia_de_variable_literalog )
    { return a }

Accesos_de_variable_literalog_sin_prespaciar =
  a:( Nombre_de_variable_literalog / Referencia_de_variable_literalog )
    { return a }

Generativa_literalog = generativa:(
  Texto_literalog /
  Funcion_nativa_literalog /
  Generativa_nativa_literalog /
  Lista_literalog /
  Objeto_literalog /
  Bloque_literalog /
  Llamada_literalog /
  Variable_llamable_continuable_literalog )
    { return { tipo: "generativa", ...generativa } }

Generativa_nativa_literalog = _* "<" _*
  generativa:Generativa _* ">"
    { return { subtipo: "generativa nativa", valor: generativa } }

Funcion_nativa_literalog = _* ( "~"? _* "<<" ) _*
  bloque:Lenguaje_inicial _* ">>"
    { return { subtipo: "función nativa", valor: bloque } }

Lista_literalog = _* "[" _*
  bloque:Items_de_lista_literalog _* "]"
    { return { subtipo: "lista", valor: bloque } }

Bloque_literalog = _* ( "*" _* "~"? _* "{" ) _*
  bloque:Sentencias_literalog_comadas _* "}"
    { return { subtipo: "bloque", valor: bloque } }

Objeto_literalog = _* "{" _*
  objeto:Propiedades_de_objeto_literalog _* "}"
    { return { subtipo: "objeto", valor: objeto } }

Llamada_literalog = _* ( "~"? _* "(" ) _*
  argumentos:Argumentos_de_llamada_literalog _* ")"
    { return { subtipo: "llamada", argumentos: argumentos } }
  
Texto_literalog = _*
  texto:Generativa_de_texto
    { return { subtipo: "texto", texto } }

Items_de_lista_literalog = 
  items:( Items_de_lista_literalog_v1 / Items_de_lista_literalog_v2 )?
    { return items ? items : [] }

Items_de_lista_literalog_v2 = _*
  i1:Item_de_lista_literalog_v2_i1
  i2:Item_de_lista_literalog_v2_i2*
    { return [].concat([i1]).concat(i2) }

Item_de_lista_literalog_v2_i1 = _*
  generativa:Generativa_literalog
    { return generativa }

Item_de_lista_literalog_v2_i2 = _* (","/"/") _*
  generativa:Generativa_literalog
    { return generativa }

Items_de_lista_literalog_v1 = _*
  items:Item_de_lista_literalog_v1*
    { return items ? items : [] }

Item_de_lista_literalog_v1 = _* "-" _*
  generativa:Generativa_literalog _* "."
    { return generativa }

Propiedades_de_objeto_literalog = 
  propiedades:( Propiedades_de_objeto_literalog_v1 / Propiedades_de_objeto_literalog_v2 )?
    { return propiedades ? propiedades : [] }

Propiedades_de_objeto_literalog_v1 = _*
  items:Propiedad_de_objeto_literalog_v1+
    { return items ? items : [] }

Propiedad_de_objeto_literalog_v1 = _* "-" _*
  propiedad:Propiedad_de_objeto_listeralog _* "."
    { return propiedad }

Propiedad_de_objeto_listeralog = _*
  propiedad:Variable_literalog _* ":" _*
  generativa:Generativa_literalog
    { return { propiedad, valor: generativa } }

Propiedades_de_objeto_literalog_v2 = _*
  i1:Propiedades_de_objeto_literalog_v2_i1
  i2:Propiedades_de_objeto_literalog_v2_i2*
    { return [].concat([i1]).concat(i2) }

Propiedades_de_objeto_literalog_v2_i1 = _* 
  generativa:Propiedad_de_objeto_listeralog
    { return generativa }

Propiedades_de_objeto_literalog_v2_i2 = _* (","/"/") _*
  generativa:Propiedad_de_objeto_listeralog
    { return generativa }

Argumentos_de_llamada_literalog = 
  argumentos:( Argumentos_de_llamada_literalog_v1 / Argumentos_de_llamada_literalog_v2 )?
    { return argumentos ? argumentos : [] }

Argumentos_de_llamada_literalog_v1 = _*
  items:Argumento_de_llamada_literalog_v1+
    { return items ? items : [] }

Argumentos_de_llamada_literalog_v2 = _*
  i1:Argumento_de_llamada_literalog_v2_i1
  i2:Argumento_de_llamada_literalog_v2_i2*
    { return [].concat([i1]).concat(i2) }

Argumento_de_llamada_literalog_v1 = _* "-" _*
  generativa:Generativa_literalog _* "."
    { return generativa }

Argumento_de_llamada_literalog_v2_i1 = _* 
  generativa:Generativa_literalog
    { return generativa }

Argumento_de_llamada_literalog_v2_i2 = _* (","/"/") _*
  generativa:Generativa_literalog
    { return generativa }