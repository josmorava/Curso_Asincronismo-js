//Construccion de promesas
const somethingWillHappen = () => {
  return new Promise((resolve, reject) =>{
    if(true) {
      resolve('Hey!');
    }else {
      reject('Wooops!');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))//si todo bien
  .catch(error => console.error(error));//si todo mal

  const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) => {
      if(true){
        setTimeout(()=>{
          resolve('True');
        }, 2000)
      } else {
        const error = new Error('Whooops!')
        reject(error);
      }
    })
  }
somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err)) 

//Como correr varias promesas al mismo tiempo retornando un arreglo con los resultados de las respuestas de cada una
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
  console.log('Array of results', response);
})
.catch(err => {
  console.error(err);
})