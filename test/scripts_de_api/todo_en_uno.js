
const fs = require("fs");
fs.writeFileSync( __dirname + "/ok.json",
'{"más datos": "que nada"}',
"utf8" );
const x = { a:0,
b:1,
c:0
};
ok = 10;
console.log(x);
delete x.a;
console.log(x);
delete x.b;
console.log(x);
for(const prop in global) {
console.log(prop + ": " + typeof( global[ prop ] ));}

const mensaje = "Ok!!!";
console.log(mensaje);
x.c += 5;