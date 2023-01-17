
const App = Castelog.metodos.un_componente_vue2("App", "<div class=\"App\">\n        <a :href=\"url\">{{ nombre }} (versión {{ version }})</a>\n    </div>", function(component) {return {data:function() {return {nombre:"Aplicación X", version:"1.0.0", url:"http://www.example.com"};}};}, ".App {}\n", null);
const app = new App();
app.$mount(document.body.children[0]);