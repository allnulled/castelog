
require("fs").writeFileSync("/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/test/scripts_de_sintaxis/600.20.ok.json", JSON.stringify(Object.assign({}, {"$schema":"https://json.schemastore.org/web-manifest-combined.json","name":"Nueva app","short_name":"Nueva app","start_url":".","display":"standalone","background_color":"#EFEFEF","description":"Descripción de la aplicación aquí.","icons":[{"src":"images/homescreen.48.png","sizes":"48x48","type":"image/png"},{"src":"images/homescreen.72.png","sizes":"72x72","type":"image/png"},{"src":"images/homescreen.96.png","sizes":"96x96","type":"image/png"},{"src":"images/homescreen.144.png","sizes":"144x144","type":"image/png"},{"src":"images/homescreen.168.png","sizes":"168x168","type":"image/png"},{"src":"images/homescreen.192.png","sizes":"192x192","type":"image/png"}],"related_applications":[{"platform":"play","url":"https://play.google.com/store/apps/details?id="}]}, { $schema:"https://json.schemastore.org/web-manifest-combined.json",
name:"La nueva app",
short_name:"Nueva app",
start_url:".",
display:"standalone",
background_color:"#EFEFEF",
description:"Descripción de la aplicación aquí.",
icons:[ { src:"images/homescreen.48.png",
sizes:"48x48",
type:"image/png"
},
{ src:"images/homescreen.72.png",
sizes:"72x72",
type:"image/png"
},
{ src:"images/homescreen.96.png",
sizes:"96x96",
type:"image/png"
},
{ src:"images/homescreen.144.png",
sizes:"144x144",
type:"image/png"
},
{ src:"images/homescreen.168.png",
sizes:"168x168",
type:"image/png"
},
{ src:"images/homescreen.192.png",
sizes:"192x192",
type:"image/png"
} ],
related_applications:[ { platform:"play",
url:"https://play.google.com/store/apps/details?id="
} ]
}), null, 2), "utf8");