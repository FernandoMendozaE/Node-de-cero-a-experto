const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  // res.send("Hola Fernando");
  let salida = {
    nombre: "Fernando",
    edad: 25,
    url: req.url
  };
  res.send(salida);
});

app.get("/data", (req, res) => {
  res.send("Hola Data");
});

app.listen(3000, () => {
  console.log("Escuchando peticiones en el puerto 3000");
});
