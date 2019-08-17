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
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
];

let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  console.log(empleadoDB);
};

getEmpleado(1)
