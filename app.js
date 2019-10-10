const axios = require('axios');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const encodeUrl = encodeURI(argv.direccion);

console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK'}
      });
    
     instance.get()
        .then(resp => {
          console.log(resp.data.Results[0]);
          
        })
        .catch( err =>{
          console.log('Error!!', err);
          
        })

      

