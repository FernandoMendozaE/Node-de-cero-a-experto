let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // getNombre: function () {
    // Nueva funcionalidad de EMC6
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
};
// console.log(deadpool.getNombre());

// Cambiar nombre variable
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);