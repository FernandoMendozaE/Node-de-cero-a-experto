const express = require("express");
const app = express();

const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");

// helpers
hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Fernando"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Escuchando peticiones en el puerto 3000");
});
