const axios = require('axios')


const getClima = async(lat, lng) => {

const appID = "438bb6e763a1efc0d729770ca5186754"  

const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appID}&units=metric`)

//https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22

return resp.data.main.temp
}

module.exports = {
    getClima
}