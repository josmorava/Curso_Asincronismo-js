//Reto de la api de Rick and Morty
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
  let xhttp = new XMLHttpRequest();
  //LLamado a una url
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function(event) {
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText))
      }else{
        const error = new Error('Error' + url_api);
        return callback(error, null);
      }
    }
  }
  xhttp.send(); //Funcion que dfa vida a las llamadas de la api
}
fetchData(API, function(error1, data1){
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function(error2,data2){
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, function(error3, data3){
      if(error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})
//Forma de encadenar callbacks para traer información precisa de un personaje, no se pueden traer de una sola llamada ya que la API no lo permite - Esto se conoce como calback hell!

//Peticiones a la api, y obetener los datos necesarios mediante callbacks
