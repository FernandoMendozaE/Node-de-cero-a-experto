const fs = require("fs");
let listadoPorHacer = [];
/**
 * Método encargado de guardar en un archivo Json
 */

const guardarDB = () => {
  // conversión de array a json
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("No se puedo grabar", err);
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }

  // console.log(listadoPorHacer);
};

const crear = descripcion => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);

  guardarDB();
  return porHacer;
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actulizar = (descripcion, completado = true) => {
  cargarDB();

  let index = listadoPorHacer.findIndex(
    tarea => tarea.descripcion === descripcion
  );
  console.log(index);

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actulizar
};
