

# Castelog

*Castelog es un lenguaje de **programación en castellano**.*

> ¡Atención! Este proyecto está únicamente gestionado por un tipo que no tiene ni para medicinas, ni para comida de gato, y que lleva mucho tiempo sin ingresos. Voy a matar a peña, aviso.

**CASTELOG** es una unión de las palabras: **CASTE**llano y **LÓG**ica.

**Castelog** compila a **JavaScript**, igual que lo podría hacer **CoffeeScript** u otros.

----

## Instalación

Para instalar Castelog necesitarás **npm** y **node.js** instalados. Después, desde la consola solo tienes que hacer:

```sh
npm install --global castelog
```

----

## Uso

Para compilar ficheros Castelog a JavaScript simplemente tienes que hacer:

```sh
calo fichero.calo
```

----



## Sintaxis

Como concepto:

> Una **sintaxis** es un conjunto de reglas simbólicas dentro del lenguaje.

El lenguaje principalmente permite programar mediante scripts compuestos de **sentencias**.

La sintaxis del lenguaje se puede descomponer en las siguientes categorías más destacables:

  - Sentencias del lenguaje
  - Generativas del lenguaje
  - Apéndices del generativa
  - Prepéndices del generativa
  - Sentencias especiales del lenguaje

A continuación se enumeran y ejemplifican en este mismo orden.


----



### Sintaxis de: sentencia de asigno

Sirve para asignar valores a espacios de memoria variables.

```calo
Creo variable x como {}.
Asigno x como {}.
Compruebo que x es tipo objeto.
```

----

### Sintaxis de: sentencia de compruebo

Sirve para comprobar que se cumplen cosas, y en su defecto lanzar errores.

```calo
Compruebo que 8 es tipo número.
Compruebo que "texto" es tipo texto.
Compruebo que 5 es igual que 5.
```

----

### Sintaxis de: sentencia de creo

Sirve para crear constantes o variables en el ámbito funcional actual.

```calo
Creo x como 0.
Creo variable y como 1.
Creo constante z como 2.
Compruebo que "" + x + y + z es igual que "012".
Compruebo que x + y + z es igual que 3.
```

----

### Sintaxis de: sentencia de desde

Sirve para repetir las instrucciones de un bloque de código desde un valor variable hasta otro valor variable.

```calo
Creo variable x como 0.
Desde 0 hasta 10 usando indice imprimo indice.
Desde 0 hasta 10 incremento x.
Desde 0 hasta 10 incremento x.
Compruebo que x es igual que 20.
```

----

### Sintaxis de: sentencia de elimino propiedad

Sirve para eliminar variables. En JavaScript, la palabra `delete`.

```calo
Creo x como { nombre: "Castelog" }.
Elimino propiedad x.nombre.
Compruebo que x.nombre es tipo indefinido.
```

----

### Sintaxis de: sentencia de en proceso

Sirve para encapsular código bajo un nombre, para luego poder *interrumpir* ese código.

```calo
Creo variable x como 0.
En proceso uno {
    Creo variable y como 9.
    Si y es menor que 10 interrumpo proceso uno;
    Y si no lanzo un nuevo Error("Error imposible").
    Asigno x como undefined.
}.
Compruebo que x es igual que 0.
```

----

### Sintaxis de: sentencia de exporto

Sirve para exportar módulos. Hay distintas sintaxis para distintas formas de exportación modular.

```calo
si false {

@Sección de notación para EcmaScript 5:
Exporto como módulo es5 {}.
# module.exports = {}

@Sección de notación para EcmaScript 6:
Exporto como módulo es6 {}.
 # export default {}

@Sección de notación para sistema de módulos de Castelog:
Exporto módulo universal estándar llamado "un.modulo.concreto" a partir de {}.

}.
```

----

### Sintaxis de: sentencia de hago

Sirve para sentencias que simplemente llaman a una función.

```calo
Hago console.log("Hola!").
```

----

### Sintaxis de: sentencia de importo api nativa

Sirve para importar la API nativa de Castelog en el script. Esta API incluirá:

  - Axios
  - Vue2
  - SimplestDB
  - EJS
  - D3
  - I18next + Vue-I18next
  - Socket.io (servidor y cliente)

Además de estas APIs de terceros, se importará la API propia de Castelog.

```calo

```

----

### Sintaxis de: sentencia de importo

Sirve para importar módulos. Existen varias sintaxis para distintas formas de importación modular.

```calo
si false {

@Sección de notación para EcmaScript 6:
importo módulo es6 de ruta "./un_fichero.js" creando constante MOD_01.
# import "./un_fichero.js"

@Sección de notación para EcmaScript 5:
importo módulo es5 de ruta "./un_fichero.js" creando constante MOD_02.
# require("./un_fichero.js");

@Sección de notación para sistema de módulos de Castelog:
importo módulo universal estándar de ruta "./un_fichero.js" creando constante MOD_03.

}.
```

----

### Sintaxis de: sentencia de imprimo

Sirve para imprimir por consola.

```calo
Imprimo "hola!".
```

----

### Sintaxis de: sentencia de incremento

Sirve para incrementar una variable. En caso de números, se sumará. En caso de textos, se apendizará. Existe también la sintaxis de decrementación, que en textos no tendría lugar.

```calo
Creo variable x como 0.
Incremento x en 2.
Incremento x.
Compruebo que x es igual que 3.
```

----

### Sintaxis de: sentencia de intento

Sirve para cazar los errores de un cacho de código.

```calo
Creo variable x como 0.
Intento {
    Incremento x en 2.
} En errores {
    Incremento x en 1.
}.
Compruebo que x es igual que 2.
```

----

### Sintaxis de: sentencia de interrumpo

Sirve para interrumpir procesos. En JavaScript, es la palabra `break`.

```calo
Creo variable x como 0.
En proceso dos {
    Incremento x en 2.
    Interrumpo proceso dos.
    Incremento x en 1.
}.
Compruebo que x es igual que 2.
```

----

### Sintaxis de: sentencia de itero

Sirve para iterar sobre objetos o listas.

```calo
Creo variable sumatorio1 como "".
Creo variable sumatorio2 como "".
Creo x como un objeto con {
    Propiedad a como "aa".
    Propiedad b como "bb".
}.
Itero como objeto x usando propiedad donde {
    Incremento sumatorio1 en propiedad.
    Incremento sumatorio2 en x[propiedad].
}.
Compruebo que sumatorio1 es igual que "ab".
Compruebo que sumatorio2 es igual que "aabb".
Creo variable sumatorio3 como 0.
Creo y como una lista con [
    1,
    2,
    3
].
Itero como lista y usando valor donde {
    Incremento sumatorio3 en valor.
}.
Compruebo que sumatorio3 es igual que 6.
```

----

### Sintaxis de: sentencia de lanzo

Sirve para lanzar un error.

```calo
Creo variable x como 0.
Intento {
    Incremento x en 1.
    Lanzo un nuevo Error("Error obligado").
    Incremento x en 2.
} En errores {
    Incremento x en 10.
}.
Compruebo que x es igual que 11.
```

----

### Sintaxis de: sentencia de hasta

Sirve para repetir cachos de código hasta que se cumpla cierta condición.

```calo
Creo variable x como 0.
Hasta que x es mayor que 10 {
    Incremento x en 1.
}.
Compruebo que x es igual que 11.
```

----

### Sintaxis de: sentencia de mientras

Sirve para repetir cachos de código mientras se cumpla cierta condición.

```calo
Creo variable x como 0.
Mientras x es menor que 10 {
    Incremento x en 2.
}.
Compruebo que x es igual que 10.
```

----

### Sintaxis de: sentencia de pendizo

Sirve para *apendizar* o *prependizar* valores en una lista.

```calo
Creo x como una lista.
Apendizo 0 en lista x.
Apendizo 1 en lista x.
Apendizo 2 en lista x.
Prependizo 0-1 en lista x.
Prependizo 0-2 en lista x.
Prependizo 0-3 en lista x.
Compruebo que x.length es igual que 3.
Compruebo que x[0] es igual que 0-3.
```

----

### Sintaxis de: sentencia de retorno

Sirve para retornar un valor dentro de una función. También sirve en un hecho, promesa, etc. que al fin y al cabo son a su vez funciones.

```calo
Creo f como una función donde retorno 1.
Compruebo que f() es igual que 1.
```

----

### Sintaxis de: sentencia de si

Sirve para ejecutar código de forma condicional, y anidar condiciones.

La fórmula es: **Si / Pero si (repetible) / Y si no**

```calo
# Sin paréntesis:

Creo x como 2.
Creo r como 0.
Si x es igual que 0 asigno r como 1;
Pero si x es igual que 1 asigno r como 2;
Pero si x es igual que 2 asigno r como 3;
Y si no asigno r como 4.
Compruebo que r es igual que 3.

# Con paréntesis:

Creo w como 2.
Creo rr como 0.
Si w es igual que 0 { Asigno rr como 1. }
Pero si w es igual que 1 { Asigno rr como 2. }
Pero si w es igual que 2 { Asigno rr como 3. }
Y si no { Asigno rr como 4. }.
Compruebo que rr es igual que 3.
```

----

### Sintaxis de: sentencias de bases de datos

Sirven para seleccionar, insertar, actualizar y eliminar datos de una base de datos.

Actualmente, esta sintaxis solo sirve para simplificar transacciones con `SimplestDB`.

```calo
Importo API nativa.

Selecciono
    en modelo "animal" 
    filtrando con una función con (animal) donde retorno animal.nombre no es tipo indefinido
    ordenando por [ "nombre", "apellido", "edad" ]
    agrupando por [ "edad" ]
    paginando por [ 1, 20 ]
    en base de datos "animales"
    creando constante todos_los_animales_con_nombre.
Inserto
    en modelo "animal"
    con valor { nombre: "Rata", apellido: "ratifolia", edad: 30 }
    en base de datos "animales".
Actualizo 
    en modelo "animal"
    de registro 1
    con valor { es_primero: true }
    en base de datos "animales".
Elimino
    en modelo "animal"
    de registro 2.
```

----

### Sintaxis de: sentencias de cacheo

Sirve para tomar y dejar valores de un sistema de cacheo.

Actualmente, esta sintaxis solo funciona para el sistema de cacheo de `SimplestDB`.

```calo
Importo API nativa.

Creo x como 1.
Cacheo
    con clave "datoX"
    con valor "Contenido del dato X0"
    refrescado si x es menor que 2
    creando datoX.
Compruebo que datoX es igual que "Contenido del dato X0".
```

----

### Sintaxis de: sentencias de diálogo de usuario

Sirven para interactuar con el usuario. Actualmente, hay: notificaciones, preguntas y confirmaciones.

Nótese que son sintaxis que funcionarán tanto en navegador, usando los diálogos nativos, como en Node.js, que usará la entrada y salida de la consola.

```calo
Importo API nativa.

Notifico con mensaje "Hola!".
Pregunto con mensaje "¿Cómo te llamas?" creando nombre.
Confirmo con mensaje "¿De verdad?" creando confirmacion.
```

----

### Sintaxis de: sentencia de desacoplo

Sirve para crear constantes o variables a partir de las propiedades o métodos de un objeto dado, todo en 1 sola expresión. También permite cambiar el nombre de la constante o variable que se crea de dicha propiedad o método.

```calo
Creo objeto como { x: "x", y: "y", z: "z" }.
Creo objeto2 como { a: "a", b: "b", c: "c" }.

Desacoplo constantes x, y, z a partir de objeto.
Desacoplo variables a, b, c como ce a partir de objeto2.

Compruebo que x es igual que "x".
Compruebo que y es igual que "y".
Compruebo que z es igual que "z".
Compruebo que a es igual que "a".
Compruebo que b es igual que "b".
Compruebo que ce es igual que "c".
```

----

### Sintaxis de: sentencias de derivo

Sirve para llamar al método constructor de la clase padre (método `super(...)`) dentro del método constructor de una clase hijo.

```calo
Creo Padre como una clase con {
    Método constructor con (a) donde {
        Asigno this.datos como [].
        Apendizo a en lista this.datos.
    }.
}.

Creo HijoUno como una clase que extiende Padre con {
    Método constructor con (b) derivado con (0) donde {
        Apendizo b en lista this.datos.
    }.
}.

Creo HijoDos como una clase que extiende Padre con {
    Método constructor con (c) donde {
        Derivo con (0).
        Apendizo c en lista this.datos.
    }.
}.

Creo HijoTres como una clase que extiende Padre con {
    Método constructor con (d) donde {
        Derivo.
        Apendizo d en lista this.datos.
    }.
}.

Creo hijoUno como un nuevo HijoUno(1).
Creo hijoDos como un nuevo HijoDos(2).
Creo hijoTres como un nuevo HijoTres(3).

Compruebo que hijoUno.datos[0] es igual que 0.
Compruebo que hijoDos.datos[0] es igual que 0.
Compruebo que hijoTres.datos[0] es igual que undefined.

Compruebo que hijoUno.datos[1] es igual que 1.
Compruebo que hijoDos.datos[1] es igual que 2.
Compruebo que hijoTres.datos[1] es igual que 3.
```

----



### Sintaxis de: generativa de array

Sirve para crear listas de valores.

```calo
Creo x como [].
Creo y como [0,1,2].
Creo z como una lista con [3,4,5].
Compruebo que x.length es igual que 0.
Compruebo que y.length es igual que 3.
Compruebo que z.length es igual que 3.
```

----

### Sintaxis de: generativa de clase

Sirve para crear clases. Tiene una sintaxis cerrada en su interior, donde pueden definirse:

  - Propiedades estáticas o dinámicas
  - Métodos estáticos o dinámicos

```calo
Creo Ser como una clase.
Creo Animal como una clase que extiende Ser.
Creo Humano como una clase que extiende Animal donde {
    Propiedad estática especie donde retorno "Homo sapiens sapiens".
    Método estático respirar con (oxigeno, otros) donde retorno "dióxido de carbono".
    Propiedad pensamiento donde retorno "pensamientos".
    Método beber con (agua) donde retorno "orina".
    Método constructor con (nombre) donde {
        Hago super().
        Asigno this.nombre como nombre.
    }.
}.
Creo humano como un nuevo Humano("Primer humano").
Creo humana como una nueva Humano("Primera humana").
Compruebo que humano.nombre es igual que "Primer humano".
Compruebo que humana.nombre es igual que "Primera humana".
```

----

### Sintaxis de: generativa de cuando

Sirve para presentar un valor encapsulado en un condicional previo. En JavaScript, es el `a ? b : c`.

```calo
Creo variable x como 10.
Creo variable y como 20.
Creo variable z como x + y.
Compruebo que cuando x es igual que 10
    entonces z es igual que 30
    si no z es igual que 20.
```

----

### Sintaxis de: generativa de bases de datos

Sirven para lo mismo que las sentencias de bases de datos, pero aquí usadas como generativas.

```calo
Importo API nativa.

Creo todos_los_animales_con_nombre como una selección
    en modelo "animal" 
    filtrando con una función con (animal) donde retorno animal.nombre no es tipo indefinido
    ordenando por [ "nombre", "apellido", "edad" ]
    agrupando por [ "edad" ]
    paginando por [ 1, 20 ]
    en base de datos "animales".
Hago una inserción
    en modelo "animal"
    con valor { nombre: "Rata", apellido: "ratifolia", edad: 30 }
    en base de datos "animales".
Hago una actualización
    en modelo "animal"
    de registro 1
    con valor { es_primero: true }
    en base de datos "animales".
Hago una eliminación
    en modelo "animal"
    de registro 2.
```

----

### Sintaxis de: generativa de cacheo

Sirven para lo mismo que las sentencias de cacheo, pero aquí usadas como generativas.

```calo
Importo API nativa.

Creo x como 1.
Creo datoX como un cacheo
    con clave "datoX"
    con valor "Contenido del dato X0"
    refrescado si x es menor que 2.
Compruebo que datoX es igual que "Contenido del dato X0".
```

----

### Sintaxis de: generativa de componente vue2

Sirve para crear un componente Vue2. Solo en navegador.

```calo
# Importo API nativa.

Creo App como un componente vue2 con nombre "App" con plantilla {
    <div class="App">
        <a :href="url">{{ nombre }} (versión {{ version }})</a>
    </div>
} con estilos {
    .App {}
} con lógica {
    Retorno un objeto con {
        Método data como una función donde retorno {
            Propiedad nombre como "Aplicación X".
            Propiedad version como "1.0.0".
            Propiedad url como "http://www.example.com".
        }.
    }.
}.
Creo app como una nueva App().
Hago app.$mount(document.body.children[0]).
```

----

### Sintaxis de: generativa de confirmación

Sirve para que el usuario confirme un mensaje. Es uno de los diálogos de usuario, pero en generativa. Devuelve un booleano.

```calo
Importo API nativa.

Creo respuesta como una confirmación con mensaje "¿Estás seguro?".
```

----

### Sintaxis de: generativa de detección de entorno

Sirve para detectar el entorno en el que se ejecuta el código, principalmente: dispositivo, sistema operativo y navegador.

```calo
Importo API nativa.

Creo entornos como una lista.
Si estoy en navegador apendizo "navegador" en lista entornos.
Si estoy en sistema apendizo "sistema" en lista entornos.
Si estoy en linux apendizo "linux" en lista entornos.
Si estoy en windows apendizo "windows" en lista entornos.
Si estoy en mac apendizo "mac" en lista entornos.
Si estoy en chrome apendizo "chrome" en lista entornos.
Si estoy en firefox apendizo "firefox" en lista entornos.
Si estoy en opera apendizo "opera" en lista entornos.
Si estoy en safari apendizo "safari" en lista entornos.
Si estoy en android apendizo "android" en lista entornos.
Si estoy en ios apendizo "ios" en lista entornos.
Si estoy en ordenador apendizo "ordenador" en lista entornos.
Si estoy en tablet apendizo "tablet" en lista entornos.
Si estoy en móvil apendizo "móvil" en lista entornos.
```

----

### Sintaxis de: generativa de elemento html

Sirve para crear elementos HTML (o `HTMLElement`). Solo en navegador.

```calo
Importo API nativa.

Creo elemento como un elemento html con ("<a class='ejemplo'>Esto es un ejemplo de elemento HTML</a>").
Hago document.body.appendChild(elemento).
```

----

### Sintaxis de: generativa de notificación

Sirve para que al usuario se le notifique un mensaje. Es uno de los diálogos de usuario, pero en generativa.

```calo
Importo API nativa.

Hago una notificación con mensaje "Hola!".
```

----

### Sintaxis de: generativa de petición http

Sirve para enviar peticiones HTTP. Usa `axios`.

```calo
Importo API nativa.

Hago un hecho asíncrono donde {
    Imprimo asíncronamente una petición http
        con url "localhost"
        con método "GET"
        con cuerpo ""
        con cabeceras {}
        con cliente Castelog.variables.cliente_http
        en errores retorno 500.
}.
```

----

### Sintaxis de: generativa de plantilla

Sirve para crear plantillas de texto. Devuelve una función. Usa `ejs`, pero con los símbolos para introducir código cambiados a `<:` y `:>`.

Hay dos sintaxis.

```calo
Importo API nativa.

Creo plantilla1 como una plantilla con ("Esto es una plantilla con ID <:= config.id :>.", { id: 503 }).
Creo texto1 como plantilla1({ id: 503 }).
Compruebo que texto1 es igual que "Esto es una plantilla con ID 503.".

Creo plantilla2 como <@Esto es una plantilla de texto con ID <:=config.id:> con sintaxis específica.@>.
Creo texto2 como plantilla2({ id: 504 }).
Compruebo que texto2 es igual que "Esto es una plantilla de texto con ID 504 con sintaxis específica.".
```

----

### Sintaxis de: generativa de pregunta

Sirve para que el usuario escriba una respuesta. Es uno de los diálogos de usuario, pero en generativa. Devuelve un texto, o null.

```calo

```

----

### Sintaxis de: generativa de sistema de ficheros

Sirve para escribir y leer ficheros.

Para guardar compatibilidad con navegadores, puede usar `SimplestDB` o `Node.js`.

```calo
# Para Node.js:

Creo x como una escritura de fichero
    con ruta "./fichero.txt"
    con codificación "utf8"
    con contenido "{}"
    usando sistema operativo.

Creo x como una lectura de fichero
    con ruta "./fichero.txt"
    con codificación "utf8"
    usando sistema operativo.

# Para SimplestDB:

Creo x como una escritura de fichero
    con ruta "./fichero.txt"
    con codificación "utf8"
    con contenido "{}".

Creo x como una lectura de fichero
    con ruta "./fichero.txt"
    con codificación "utf8".
```

----

### Sintaxis de: generativa de espera

Sirve para iniciar una espera de tiempo.

```calo
Creo variable x como 100.
Hago una espera de 2 segundos donde asigno x como 200.
Compruebo que x es igual que 100.
Hago una espera de 3 segundos donde compruebo que x es igual que 200.
```

----

### Sintaxis de: generativa de función

Sirve para crear una función.

```calo
Creo x como una función con (dato) donde retorno dato.
Compruebo que x() es igual que 500.
```

----

### Sintaxis de: generativa de hecho

Sirve para crear y llamar una función, todo seguido.

```calo
Creo mensaje como "Mensaje fáctico".
Compruebo que "Mensaje fáctico" es igual que un hecho con (mensaje) donde retorno mensaje.
```

----

### Sintaxis de: generativa de nueva

Sirve para crear una nueva instancia de alguna clase.

```calo
Creo Paisaje como una clase donde {
    Método constructor con (objetos o en su defecto []) donde {
        Itero como lista objetos creando objeto donde {
            Apendizo objeto en lista this.objetos.
        }.
    }.
}.
Creo paisajeUno como un nuevo Paisaje([ "árbol", "sol", "mar", "montaña", "nubes" ]).
Creo paisajeDos como un nuevo Paisaje([ "edificios", "calles", "personas", "sol", "nubes" ]).

Compruebo que paisajeUno.objetos contiene valor "árbol".
Compruebo que paisajeUno.objetos contiene valor "sol".
Compruebo que paisajeUno.objetos contiene valor "mar".
Compruebo que paisajeUno.objetos contiene valor "montaña".
Compruebo que paisajeUno.objetos contiene valor "nubes".

Compruebo que paisajeDos.objetos contiene valor "edificios".
Compruebo que paisajeDos.objetos contiene valor "calles".
Compruebo que paisajeDos.objetos contiene valor "personas".
Compruebo que paisajeDos.objetos contiene valor "sol".
Compruebo que paisajeDos.objetos contiene valor "nubes".
```

----

### Sintaxis de: generativa de número

Sirve para crear un valor de número.

```calo
Compruebo que 0 es igual que 2 - 2.
```

----

### Sintaxis de: generativa de objeto

Sirve para crear un objeto.

```calo
Compruebo que { nombre: "Castelog" } es tipo objeto.
Compruebo que un objeto con { nombre: "Castelog" } es tipo objeto.
Compruebo que un objeto con { Propiedad nombre como "Castelog". } es tipo objeto.
Compruebo que un objeto con { Método llamar como 0. } es tipo objeto.
```

----

### Sintaxis de: generativa de promesa

Sirve para crear una promesa o `Promise`.

```calo

```

----

### Sintaxis de: generativa de texto

Sirve para crear texto.

```calo

```

----

### Sintaxis de: generativa de un comando de consola

Sirve para ejecutar un comando por consola.

```calo

```

----

### Sintaxis de: generativa de un conjunto de claves del objeto

Sirve para extraer las claves de un objeto, en una lista.

```calo

```

----

### Sintaxis de: generativa de un conjunto de valores del objeto

Sirve para extraer los valores de un objeto, en una lista.

```calo

```

----

### Sintaxis de: generativa de variable llamable

```calo

```

----



### Sintaxis de: prependice de asíncronamente

Sirve para especificar que queremos esperar a que termine la promesa o `Promise` que sigue, antes de continuar con la siguiente sentencia. En JavaScript, es el `await`. Esto quiere decir que esta instrucción debe ir dentro de funciones asíncronas para que no salte un error sintáctico.

```calo

```

----

### Sintaxis de: prependice de negación

Sirve para negar la generativa que sigue. En JavaScript, es el `!`. 

```calo

```

----



### Sintaxis de: apéndice de acceso a variable llamable

```calo

```

----

### Sintaxis de: apéndice de conjunción

```calo

```

----

### Sintaxis de: apéndice de disjunción

```calo

```

----

### Sintaxis de: apéndice de división

```calo

```

----

### Sintaxis de: apéndice de filtrado

```calo

```

----

### Sintaxis de: apéndice de mapeado

```calo

```

----

### Sintaxis de: apéndice de módulo

```calo

```

----

### Sintaxis de: apéndice de multiplicación

```calo

```

----

### Sintaxis de: apéndice de numerización

```calo

```

----

### Sintaxis de: apéndice de reducido

```calo

```

----

### Sintaxis de: apéndice de resta

```calo

```

----

### Sintaxis de: apéndice de suma

```calo

```

----

### Sintaxis de: apéndice de textualización

```calo

```

----

### Sintaxis de: apéndices negables

```calo

```