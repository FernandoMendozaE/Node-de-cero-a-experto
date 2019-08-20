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

let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
  } else {
    callback(null, salarioDB);
  }
};

let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  // console.log(empleadoDB);
  if (!empleadoDB) {
    callback(`El empleado con el ID ${id} no existe`);
  } else {
    callback(null, empleadoDB);
  }
};

getEmpleado(2, (err, empleado) => {
  if (err) {
    return console.log(err);
  }

  getSalario(empleado, (err, salario) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El salario de ${empleado.nombre} es ${salario.salario}`);
  });
});
