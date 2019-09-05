const hbs = require("hbs");

// helpers
hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("capitalizar", texto => {
  let palabras = texto.split(" ");
  // console.log("palabras", palabras);
  palabras.forEach((palabra, idx) => {
    // charAt --> Obtener primer caracter de un array
    // slice --> obtener todos los caracteres despues de InputDeviceInfo
    // join --> unir todo los arreglos
    palabras[idx] =
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });
  return palabras.join(" ");
});