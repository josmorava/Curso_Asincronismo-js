//Trabajando con Async/Await, funcion para hacer que nuestrp código corra de una manera sincrona.
const doSomethignAsync = () => {
  return new Promise ((resolve, reject) =>{
    (true)
    ? setTimeout(() => resolve('Do Somethign Async'), 3000)
    : reject(new Error('Test Error'))
  });
}

const doSomethign = async () => {
  const something = await doSomethignAsync();
  console.log(something);
  //llamando una funcion que espera el resultado de otra, mientras esperamos a que se resuelva. 
}

console.log('Before');
doSomethign();
console.log('After');

//como capturar errores
const anotherFunction = async () => {
  try {
    const something = await doSomethignAsync();
    console.log(something);
  } catch (error){
    console.log(error)
  }
}
console.log('Before1')
anotherFunction();
console.log('After1');