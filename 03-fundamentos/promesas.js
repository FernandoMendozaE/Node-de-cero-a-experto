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

let salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
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

let getSalario = empleado => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
      reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
      resolve(salarioDB);
    }
  });
};

getEmpleado(1).then(
  empleado => {
    // console.log("Emoleado de BD", empleado);
    getSalario(empleado).then(
      salario => {
        console.log(`El saliro de ${empleado.nombre} es ${salario.salario}$`);
      },
      err => console.log(err)
    );
  },
  err => console.log(err)
);
