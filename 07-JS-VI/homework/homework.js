// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase()+nombre.slice(1); //charAt(0): obtiene el primer caracter, toUpperCase(): convierte letra en mayuscula
}                                                        //slice(1): retorna lo que queda del nombre, ej: "juan"->"uan"

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb(); //esta vacio porque normalmente puede recibir un parametro
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  cb(total); // cuando se refiere a pasarle el total a cb es darle el parametro dentro de parentesis (x)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //for (let i = 0; i < array.length; i++) {  //MANERA ALTERNATIVA DE HACERLO
    //cb(array[i]);
  //}
  array.forEach(function(elemento, indice){
    cb(elemento);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var na = array.map(function(elemento){ //.map() ayuda a que todo salga com osi fuera un solo array
    return cb(elemento);
  });
  return na;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  function narr(elemento) {
    if (elemento.charAt(0)==='a') {
      return elemento;
    }
  }
  var na = array.filter(narr);
  return na;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
