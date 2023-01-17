{

}

Sintaxis_de_calox = Sentencia_de_definicion_de_sintaxis*

Sentencia_de_definicion_de_sintaxis = _* ("Defino sintaxis" / "defino sintaxis")
  hook_id:Subsentencia_de_tipo
  syntax_name:Subsentencia_con_nombre
  syntax_content:Subsentencia_con_sintaxis
  syntax_prescript:Subsentencia_con_prescript?
  syntax_detalles:Subsentencia_con_detalles? EOS
    { return { hook_id, syntax_name, syntax_content, syntax_prescript } }

Subsentencia_de_tipo = _* "de tipo" _* nombre:Nombre_de_sintaxis {return nombre}
Subsentencia_con_nombre = _* "con nombre como" _* nombre:Nombre_de_sintaxis {return nombre}
Subsentencia_con_sintaxis = _* "con sintaxis como" _* bloque:Bloque_de_codigo {return bloque}
Subsentencia_con_prescript = _* "con prescript como" _* bloque:Bloque_de_codigo {return bloque}
Subsentencia_con_detalles = _* "con detalles como" _* bloque:Bloque_de_codigo {return bloque}

Palabra = [a-zA-Z$_] [a-zA-Z0-9$_]+ { return text() }
Tipo_de_sintaxis = palabra:Palabra {return palabra}
Nombre_de_sintaxis = palabra:Palabra {return palabra}
Bloque_de_codigo = "{" bloque:Hasta_cierre_de_bloque_de_codigo { return bloque }
Hasta_cierre_de_bloque_de_codigo = contenido:Contenido_hasta_cierre_de_bloque_de_codigo "\n}" { return contenido }
Contenido_hasta_cierre_de_bloque_de_codigo = (!("\n}").)* { return text() }

_ = (__ / ___)
__ "espacio" = (" " / "\t")
___ "salto" = ("\r\n"/"\r" / "\n")
EOS "fin_de_sentencia" = "."
