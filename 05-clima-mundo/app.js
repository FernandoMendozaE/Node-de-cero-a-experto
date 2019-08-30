

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

// console.log(argv.direccion);

// encodeURI permite eliminar espacio para la URL
