let empleados = [
  {
    id: 1,
    nombre: "Fernando"
  },
  {
    id: 2,
    nombre: "Melisa"
  },
  {
    id: 3,
    nombre: "Juan"
  }
];

let salario = [
  {
    id: 1,
    slario: 1000
  },
  {
    id: 2,
    slario: 2000
  }
];

let getEmpleado = id => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

getEmpleado(10).then(
  empleado => {
    console.log("Emoleado de BD", empleado);
  },
  err => {
    console.log(err);
  }
);
