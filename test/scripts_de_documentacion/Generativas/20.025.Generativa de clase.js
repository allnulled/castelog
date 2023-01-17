
const Ser = class  {};
const Animal = class extends Ser {};
const Humano = class extends Animal{static get especie(){return "Homo sapiens sapiens";}
static respirar(oxigeno, otros){return "dióxido de carbono";}
get pensamiento(){return "pensamientos";}
beber(agua){return "orina";}
constructor(nombre){super();
this.nombre = nombre;}};
const humano = new Humano("Primer humano");
const humana = new Humano("Primera humana");
if(!(humano.nombre === "Primer humano")) throw new Error("Error en fichero [-] en posición [606-663=14:53-15:57] cuando: " + "Compruebo que humano.nombre es igual que \"Primer humano\"")
if(!(humana.nombre === "Primera humana")) throw new Error("Error en fichero [-] en posición [664-722=15:58-16:58] cuando: " + "Compruebo que humana.nombre es igual que \"Primera humana\"")