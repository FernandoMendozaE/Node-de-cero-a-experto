const fs = require("fs");
let listadoPorHacer = [];

const crear = descripcion => {
  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  return porHacer;
};

module.exports = {
  crear
};
