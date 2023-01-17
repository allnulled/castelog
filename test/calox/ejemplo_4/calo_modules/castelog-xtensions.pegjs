{

}

Sintaxis_de_calox = Sentencia_de_definicion_de_sintaxis*

Sentencia_de_definicion_de_sintaxis = _* ("Defino sintaxis" / "defino sintaxis")
  nombre:Subsentencia_con_nombre
  sintaxis:Subsentencia_con_sintaxis
  prescript:Subsentencia_con_prescript EOS
    { return { hook_id, syntax_name, syntax_content, syntax_prescript } }

Subsentencia_con_nombre = _* "con nombre como" _* Nombre_de_sintaxis
Subsentencia_con_sintaxis = _* "con sintaxis como" _* Bloque_de_codigo
Subsentencia_con_prescript = _* "con prescript como" _* Bloque_de_codigo

Nombre_de_sintaxis = [a-zA-Z$_] [a-zA-Z0-9$_]+ { return text() }
Bloque_de_codigo = "{" bloque:Hasta_cierre_de_bloque_de_codigo { return bloque }
Hasta_cierre_de_bloque_de_codigo = contenido:Contenido_hasta_cierre_de_bloque_de_codigo "\n}" { return contenido }
Contenido_hasta_cierre_de_bloque_de_codigo = (!("\n}").)* { return text() }

_ = (__ / ___)
__ "espacio" = (" " / "\t")
___ "salto" = ("\r\n"/"\r" / "\n")
EOS "fin_de_sentencia" = "."
