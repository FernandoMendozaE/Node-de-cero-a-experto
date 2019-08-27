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

  // buscar un elemento id (para caso prueba sera descripción)
  let index = listadoPorHacer.findIndex(
    tarea => tarea.descripcion === descripcion
  );
  // console.log(index);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = descripcion => {
  cargarDB();
  // filtar datos
  let nuevoListado = listadoPorHacer.filter(
    tarea => tarea.descripcion !== descripcion
  );

  if (listadoPorHacer.length === nuevoListado.length) {
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    guardarDB();
    return true;
  }
};

module.exports = {
  crear,
  getListado,
  actulizar,
  borrar
};
