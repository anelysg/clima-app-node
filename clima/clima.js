const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ff079ad3d2563b0728a2de3964fcb5c0&units=metric`)

    return resp.data.main.temp

}

module.exports = {

    getClima

}