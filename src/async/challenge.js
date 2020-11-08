//Reto de la api con async await
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try{
    //peticion1 api/personajes
    const data = await fetchData(url_api)
    //peticion2 api/nombre
    const character = await fetchData(`${API}${data.results[0].id}`);
    //peticion3 api/dimension
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);//1
    console.log(character.name);//2
    console.log(origin.dimension);//3
  }catch(error){
    console.error(error);
  }
}

console.log('Before');
anotherFunction(API);
console.log('After');
