// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
// console.log(argv);
const porHacer = require("./por-hacer/por-hacer");
console.log("Prueba");
let comando = argv._[0];

switch (comando) {
  case "crear":
    console.log("Crear por hacer");
    break;

  case "listar":
    console.log("Mostrar todas las tareas por hacer");
    break;

  case "actualizar":
    console.log("Actualiza una tarea por hacer");
    break;

  default:
    console.log("comando no es conocido.");
    break;
}
