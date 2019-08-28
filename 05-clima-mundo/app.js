const axios = require("axios");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

console.log(argv.direccion);

// encodeURI permite eliminar espacio para la URL
let encodedUrl = encodeURI(argv.direccion);

axios
  .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyASEYwuLS1HDI3YAZ6w2gzVmZ8M-wUOG2M`)
  .then(function (response) {
    // handle success
    console.log(JSON.stringify(response.data, undefined, 2));
    // console.log(response.status);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
