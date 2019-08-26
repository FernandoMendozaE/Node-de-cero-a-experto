// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const colors = require("colors");
// console.log(argv);
const porHacer = require("./por-hacer/por-hacer");
let comando = argv._[0];

console.log('Prueba 2')

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case "listar":
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log("=======Por Hacer=======".green);
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("=======================".green);
    }
    break;

  case "actualizar":
    let actualizado = porHacer.actulizar(argv.descripcion, argv.completado);
    // console.log("Actualiza una tarea por hacer");
    break;

  default:
    console.log("comando no es conocido.");
    break;
}
