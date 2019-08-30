const axios = require("axios");

const getClima = async (lat, lng) => {
  let resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f36bf5f10843b95bd002c0b2d709dbcd`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
