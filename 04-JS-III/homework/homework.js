// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[(array.length-1)];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  //var ida = [];
  for (let i = 0; i < array.length; i++) {
    array[i]=array[i]+1;
  } 
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str;
  for (let i = 0; i < palabras.length; i++) {
    //const element = array[index];
    //str = str + ' ' + palabras[i];
    if (i===0) {
      str = palabras[i];
    } else if (i>0){
      str = str + ' ' + palabras[i];
    }
  } return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.indexOf(elemento)>=0) { //El metodo indexOf() nos dira en que posicion del array esta el elemento que buscamos, partiendo desde el espacio 0 del arrray
    return true;
  }else if (array.indexOf(elemento)===-1) { //En caso que el elemento no exista en el array el metodo indexOf() nos retorna el valor de -1
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  } return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var prom;
  var x;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i];
    x = i;
  } 
  prom = suma / (x+1);
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var x = 0;
  for (let i = 0; i < numeros.length; i++) {
    //const element = array[index];
    if (i===0) {
      if (numeros[i]>numeros[i+1]) {
        x = numeros[i];
      }else if (numeros[i]<numeros[i+1]) {
        x = numeros[i+1];
      }else if (numeros[i]===numeros[i+1]) {
        x = numeros[i+1];
      }
    }else {
      if (x>numeros[i]) {
        x = x;
      }else if (x<numeros[i]) {
        x = numeros[i];
      }else if (x===numeros[i]) {
        x = numeros[i];
      }
    }
  } return x;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var nad = 0;
  if (arguments.length<1) { // Hay que tener en cuenta que arguments son los parametros que recibe la funcion y pueden ser tratados como un array
    return nad;             //Por lo que si el tamaño del array es 0, es decir no contiene nada retornamos 0
  }
  var total = 1;
  for (let i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total; 
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var num = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18) {
      num++;
    }
  } return num;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var wk = 'Es fin de semana';
  var we = 'Es dia Laboral'; 
  switch (numeroDeDia) {
    case 1:
      return wk;
      break;
    case 2:
      return we;
      break;
      case 3:
        return we;
        break;
        case 4:
          return we;
          break;
          case 5: 
          return we;
          break;
          case 6:
            return we;
            break;
            case 7:
              return wk;
              break;
    default:
      break;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var str = n.toString();
  var array = Array.from(str);
  if (array[0]==9) {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var y ;
  for (let i = 0; i < arreglo.length-1; i++) { //Se coloca "i<arreglo.length-1" porque en el ELSE estamos pidiendo siempre un espacio más del que esta actualmente el arreglo
    if (i===0) {                               //por lo tanto si confirmamos que el penultimo elemento es igual al ultimo no necesitamos más iteraciones
      if (arreglo[i]===arreglo[i+1]) {         //P.D. : Tener en cuenta que no es posible comparar el ultimo elemento del arreglo con la nada ya que es el ultimo (NOS DA ERROR)
        y = true;
      }else if (arreglo[i]>arreglo[i+1] || arreglo[i]<arreglo[i+1]) {
        y = false;
      }
    }
  } return y;  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var comp = ['Enero','Marzo','Noviembre'];
  var nuvarr = [];
  var err = 'No se encontraron los meses pedidos';
  for (let i = 0; i < array.length; i++) {
    if (array[i]==='Enero') {
      nuvarr.push(array[i]);
    }else if (array[i]==='Marzo') {

      //if (nuvarr.length===1) {
        //if (nuvarr[0]==='Noviembre') {
          //nuvarr.unshift(array[i]);
        //}else {
          //nuvarr.push(array[i]);
        //}
      //}else if (nuvarr.length===2) {
       // nuvarr.pop();
        nuvarr.push(array[i]);
        //nuvarr.push('Noviembre');
     // }else if (nuvarr.length===0) {
       // nuvarr.unshift(array[i]);
      //}

    }else if (array[i]==='Noviembre') {
      nuvarr.push(array[i]);
    }
  }
  if (nuvarr.length===3) {
    return nuvarr;
  }else {
    return err;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
      arr.push(array[i]);
    }
  } return arr;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i = 0;
  var arr = [];
  var err = 'Se interrumpió la ejecución';
  do {
    numero = numero + 2;
    arr[i] = numero;
    if (numero===i) {
      return err;
      break;
    }
    i++;
  } while (i<10);
  return arr;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  //var i = 0;
  var arr = [];
  for (let i = 0; i < 10; i++) {
    if (i<5) {
      numero = numero + 2;
    arr[i] = numero;
    }
    if (i===5) {
      continue;
    }else if (i>5){
    numero = numero + 2;
    arr[i-1] = numero; //arr[i-1] porque a saltarnos el espacio 4 del array (0,1,2...) debemos llenarlo con algun elemento para que no nos marque undefined
    }
  } 
  return arr;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
