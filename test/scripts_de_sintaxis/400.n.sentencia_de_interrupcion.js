
let valor = 1;
iterar_sobre_valores:
while(valor < 10) {
valor += 1;
if(valor === 2) {
break iterar_sobre_valores;
}
}
valor = 1;
iterar_sobre_valores:
while(valor < 10) {
valor += 1;
if((!(valor === 8))) {
continue iterar_sobre_valores;
}
else {
break;
}
}