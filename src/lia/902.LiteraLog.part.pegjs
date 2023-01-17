Codigo_literalog = _*
  sentencias:Sentencias_literalog
    { return JSON.stringify(sentencias, null, 2) }

Sentencias_literalog = _*
  sentencias:Sentencia_completa_literalog*
    { return { sentencias } }

Sentencia_completa_literalog = _*
  sentencia:( Sentencia_literalog_pregunta / Sentencia_literalog_normal_completa )
    { return { tipo: "sentencia completa", sentencia } }

Sentencia_literalog_normal_completa = _*
  sentencia:Sentencia_literalog_normal_continuada _* "."
    { return sentencia }

Sentencia_literalog_normal_continuada = _*
  sentencias:Sentencia_literalog_normal+
    { return { tipo: "sentencia normal continuada", sentencias } }
Sentencia_literalog_normal = _*
  sujeto:Sujeto_literalog
  predicados:Predicados_literalog?
    { return { tipo: "sentencia normal", sujeto, predicados } }

Sentencia_literalog_pregunta = _* "¿"
  pregunta:Pregunta_literalog_cualquiera "?"
    { return { tipo: "sentencia de pregunta", pregunta } }

Pregunta_literalog_cualquiera = pregunta:(
  Pregunta_literalog_que_es /
  Pregunta_literalog_que_tiene /
  Pregunta_literalog_que_sabe /
  Pregunta_literalog_que_haces_cuando )
    { return pregunta }

Sujeto_literalog = _*
  motes:Motes_seguidos_literalog
    { return { sujeto: motes } }

Motes_seguidos_literalog = _*
  mote1:Mote_literalog
  mote2:( _+ Mote_literalog )*
    { return [].concat([ mote1 ]).concat(mote2 ? mote2.map(p => p[1]) : []) }

Mote_literalog = [A-Za-z_ÁÉÍÓÚÀÈÌÒÙáéíóúàèìòùÄËÏÖÜäëïöüâêîôûÑñ] [A-Za-z0-9_ÁÉÍÓÚÀÈÌÒÙáéíóúàèìòùÄËÏÖÜäëïöüâêîôûÑñ]*
  { return text() }

Generativa_literalog = generativa:(
  Predicado_literalog /
  Sentencia_literalog_normal )
    { return generativa }

Predicados_literalog = _*
  lista:Lista_de_predicados_literalog
    { return lista }

Lista_de_predicados_literalog = _*
  predicado1:Predicado_literalog?
  predicado2:( (_* "," _*) Predicado_literalog)*
    { return [].concat([ predicado1 ]).concat(predicado2 ? predicado2.map(p => p[1]) : []) }

Predicado_literalog = predicado:(
  Conjunto_de_generativa_literalog /
  Conjunto_de_bloque_literalog /
  Conjunto_de_objeto_literalog /
  Conjunto_de_lista_literalog /
  Conjunto_de_parametros_literalog /
  Conjunto_de_texto_literalog )
    { return predicado }

Pregunta_literalog_que_es = _* "Qué es "
  sujeto:Sujeto_literalog
    { return { tipo: "pregunta", sobre: "qué es", sujeto } }
Pregunta_literalog_que_tiene = _* "Qué tiene "
  sujeto:Sujeto_literalog
    { return { tipo: "pregunta", sobre: "qué tiene", sujeto } }
Pregunta_literalog_que_sabe = _* "Qué sabe "
  sujeto:Sujeto_literalog
    { return { tipo: "pregunta", sobre: "qué sabe", sujeto } }
Pregunta_literalog_que_haces_cuando = _* "Qué haces cuando "
  sujeto:Sujeto_literalog
    { return { tipo: "pregunta", sobre: "qué haces cuando", sujeto } }

Conjunto_de_parametros_literalog = _* "(" _*
  parametros:Lista_de_generativas_literalog _* ")"
    { return { tipo: "parámetros", conjunto: parametros } }

Conjunto_de_generativa_literalog = _* "<" _*
  generativa:Generativa _* ">"
    { return { tipo: "generativa", conjunto: generativa } }

Conjunto_de_texto_literalog = _*
  generativa:Generativa_de_texto
    { return { tipo: "texto", conjunto: generativa } }

Conjunto_de_bloque_literalog = _* "<<" _*
  bloque:Bloque _* ">>"
    { return { tipo: "bloque", conjunto: bloque } }

Conjunto_de_objeto_literalog = _* "{" _*
  propiedades:Lista_de_propiedades_de_objeto_literalog _* "}"
    { return { tipo: "objeto", conjunto: propiedades } }

Conjunto_de_lista_literalog = _* "[" _*
  predicados:Sentencias_literalog _* "]"
    { return { tipo: "lista", conjunto: predicados } }

Lista_de_generativas_literalog = _*
  item1:Item_de_lista_de_generativas_literalog?
  item2:( (_* "," _*) Item_de_lista_de_generativas_literalog)*
    { return [].concat([ item1 ]).concat(item2 ? item2.map(p => p[1]) : []) }

Item_de_lista_de_generativas_literalog = _*
  generativa:Generativa_literalog
    { return generativa }

Lista_de_propiedades_de_objeto_literalog = _*
  propiedad1:Propiedad_de_objeto_literalog?
  propiedad2:( (_* "," _*) Propiedad_de_objeto_literalog)*
    { return [].concat([ propiedad1 ]).concat(propiedad2 ? propiedad2.map(p => p[1]) : []) }

Propiedad_de_objeto_literalog = _*
  propiedad:Sujeto_literalog _* ":" _*
  valor:Generativa_literalog
    { return { propiedad, valor } }
