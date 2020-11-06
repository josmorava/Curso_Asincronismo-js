//Solucion del reto de la api con promesas
const fetchData = require('../utils/fetchData.js')
const API = 'https://rickandmortyapi.com/api/character/ ';

fetchData(API) //peticion del personaje
  .then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then (data => { //nombre
    console.log(data.name)
    return fetchData(data.origin.url)
  })
  .then(data => { //dimension
    console.log(data.dimension)
  })
  .catch(err => console.error(err))