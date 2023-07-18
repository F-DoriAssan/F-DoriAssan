//Importamos los modulos a utilizar
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

//Modelo de datos
const userProjects = require("./userData/projecthelper.js");

//Configuro el motor  de vistas con su directorio
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares de express para manejo de errores
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method")); 
app.use(express.static(path.join(__dirname, "public"))); 

//Índice predeterminado/Ruta de inicio 
//No necesitamos agregar una barra invertida al representar las páginas de vista
app.get("/", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse it into JavaScript Object
    const projects = await JSON.parse(data);
    res.render("homepage", { projects });
  } catch (e) {
    console.log(e);
  }
});

// Experience Ruta
app.get("/experience", (req, res) => {
  res.render("experience");
});

// project Ruta
app.get("/project", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userProjects);
    //Parse delJavaScript Object
    const projects = await JSON.parse(data);
    res.render("project", { projects });
  } catch (e) {
    console.log(e);
  }
});

//Start del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on the port: ${port}`);
});
