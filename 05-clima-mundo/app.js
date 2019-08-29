const axios = require("axios");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

// console.log(argv.direccion);

// encodeURI permite eliminar espacio para la URL
let encodedUrl = encodeURI(argv.direccion);

axios
  .get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyASEYwuLS1HDI3YAZ6w2gzVmZ8M-wUOG2M`
  )
  .then(function(resp) {
    let location = resp.data.results[0];
    let direccion = resp.data.results[0].formatted_address;
    let coors = resp.data.results[0].geometry.location;

    console.log("Dirección:", direccion);
    console.log("lat:", coors.lat);
    console.log("lng:", coors.lng);
    // JSON convierte un [] en objeto parametros undefined=remplaza, 2=espaciado
    //console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.status);
  })
  .catch(function(error) {
    // handle error
    console.log("ERROR!!!", error);
  });
