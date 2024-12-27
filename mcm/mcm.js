import { group } from "../utils/group.js";
import { descFactoresPrimos } from "../utils/num-defactor.js";
import { multiply } from "../utils/multiply.js";
import { flatten } from "../utils/flatten.js";

export function mcm(n1, n2) {
  const n1Primos = group(descFactoresPrimos(n1));
  const n2Primos = group(descFactoresPrimos(n2));

  const resMcm = {};

  // Busco las claves de los objetos en n1Primos y n2Primos es decir:
  // '{2:}'
  const n1PrimosKeys = Object.keys(n1Primos);
  const n2PrimosKeys = Object.keys(n2Primos);

  // Agregar los factores primos de n1
  // Iteramos todos los elementos del objeto n1PrimosKey.
  for (let i = 0; i < n1PrimosKeys.length; i++) {
    // Creamos la constante currentKey añadiendole
    // todos los elementos de n1PrimosKeys iterados actualmente.
    const currentKey = n1PrimosKeys[i];
    // creamos currentValue para añadir todos los valores de los objetos de n1Primos.
    const currentValue = n1Primos[currentKey];
    // Añadimos todos las claves a la variable resultante,
    // en este caso 'resMcm'.
    resMcm[currentKey] = [];
    console.log(resMcm);
    // iteramos unicamente el currentValue el cual tiene los valores
    // de los objetos
    for (let j = 0; j < currentValue.length; j++) {
      // Añadimos en la variable resultante con la clave, el currentValue iterado.
      resMcm[currentKey].push(currentValue[j]);
      console.log(resMcm);
    }
  }

  // Agregar los factores primos de n2, eligiendo el máximo número de veces para cada primo

  // Iteramos n2PrimosKeys, variable que contiene las claves de n2Primos.
  for (let i = 0; i < n2PrimosKeys.length; i++) {
    // Inicializamos la variable currentKey añadiendole las keys iteradas '[i]'
    const currentKey = n2PrimosKeys[i];
    // Inicializamos la variable currentValue donde le añadimos todos los valores
    // de los objetos de n2Primos.
    const currentValue = n2Primos[currentKey];
    // Cremaos un condicional el cual en el segundo objeto (n2Primos)
    // si la clave no esta en la variable resultante me la creas.
    if (!resMcm[currentKey]) {
      resMcm[currentKey] = [];
    }
    // Itero unicamente la variable currentValue la cual debemos recordar que
    // contiene los valores del objeto n2Primos.
    for (let j = 0; j < currentValue.length; j++) {
      // Dentro del bucle creo un condicional el cual dónde con el '.length'
      // i la cantidad de veces que aparece el factor primo en `currentValue`
      // (representada por `currentValue.length`) es mayor que la cantidad almacenada
      // en `resMcm[currentKey].length`
      // (es decir, el exponente actual en el resultado).
      if (currentValue.length > resMcm[currentKey].length) {
        // Entonces si cumple la condición actualizamos el resultado.
        resMcm[currentKey] = currentValue; // ---> Ya que buscamos el exponenete del factor
        //--- primo |más elevado|
      }
    }
  }

  const resMcmValues = Object.values(resMcm);

  const flattenedValues = flatten(resMcmValues);

  return multiply(flattenedValues);
}

console.log(mcm(84, 450));
