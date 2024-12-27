import { group } from "./utils/group.js";
import { descFactoresPrimos } from "./utils/num-defactor.js";
import { multiply } from "./utils/multiply.js";
import { flatten } from "./utils/flatten.js";

export function mcd(n1, n2) {
  const n1Primos = group(descFactoresPrimos(n1));
  const n2Primos = group(descFactoresPrimos(n2));

  const resMcd = {};

  const n1PrimosKeys = Object.keys(n1Primos);
  const n2PrimosKeys = Object.keys(n2Primos);

  // Agregar los factores primos de n1
  for (let iter1 = 0; iter1 < n1PrimosKeys.length; iter1++) {
    const currentKey1 = n1PrimosKeys[iter1];
    const currentValue1 = n1Primos[currentKey1];

    for (let j1 = 0; j1 < currentValue1.length; j1++) {
      if (currentKey1) {
        resMcd[currentKey1].push(currentValue1[j1]);
      }
    }

    for (let iter2 = 0; iter2 < n2PrimosKeys.length; iter2++) {
      const currentKey2 = n2PrimosKeys[iter2];
      const currentValue2 = n2Primos[currentKey2];

      if (currentKey1 === currentKey2) {
        resMcd[currentKey2] = [];
      }

      for (let j2 = 0; j2 < currentValue2.length; j2++) {
        resMcd[currentKey2].push(currentValue2[j2]);
        console.log(resMcd);
      }

      if (currentValue1.length > currentValue2.length) {
        resMcd[currentKey2] = currentValue2;
      }
    }
  }

  const resMcdValues = Object.values(resMcd);

  const flattenedValues = flatten(resMcdValues);

  return multiply(flattenedValues);
}
console.log(mcd(84, 450));






for (let j = 0; j < currentValue.length; j++) {
  // Iteramos sobre cada elemento del array `currentValue`, 
  // que contiene las repeticiones del factor primo actual en el número n2.
  // Aunque no usamos directamente `j` dentro del bucle, esto garantiza
  // que procesamos correctamente `currentValue`.

  // Verificamos si la cantidad de veces que aparece el factor primo en `currentValue`
  // (representada por `currentValue.length`) es mayor que la cantidad almacenada
  // en `resMcm[currentKey].length` (es decir, el exponente actual en el resultado).
  if (currentValue.length > resMcm[currentKey].length) {
    // Si el exponente del factor primo en `currentValue` es mayor, actualizamos
    // `resMcm[currentKey]` con el valor de `currentValue`. Esto asegura que en
    // el resultado del MCM siempre tengamos el mayor exponente de este factor primo.
    resMcm[currentKey] = currentValue;
  }
}



// Factores primos contados para ambos números
const factoresN1 = { 2: 2, 3: 1, 7: 1 };
const factoresN2 = { 2: 2, 3: 3 };

// Obtener las claves de los factores primos
const clavesN1 = Object.keys(factoresN1); // [2, 3, 7]
const clavesN2 = Object.keys(factoresN2); // [2, 3]

// Encontrar factores comunes
const factoresComunes = [];
for (let i = 0; i < clavesN1.length; i++) {
  const factor = clavesN1[i];
  for (let j = 0; j < clavesN2.length; j++) {
    if (factor === clavesN2[j]) {
      factoresComunes.push(factor); // Agregar el factor común al resultado
      break; // Terminar la comparación para este factor
    }
  }
}

console.log(factoresComunes); // [2, 3]








import { group } from "./utils/group.js";
import { descFactoresPrimos } from "./utils/num-defactor.js";
import { multiply } from "./utils/multiply.js";
import { flatten } from "./utils/flatten.js";

export function mcd(n1, n2) {
  // Obtener los factores primos agrupados de cada número
  const n1Primos = group(descFactoresPrimos(n1));
  const n2Primos = group(descFactoresPrimos(n2));

  // Obtener las claves (factores primos) de cada conjunto de factores
  const n1PrimosKeys = Object.keys(n1Primos);
  const n2PrimosKeys = Object.keys(n2Primos);

  // Objeto para almacenar los factores comunes y sus menores exponentes
  const resMcd = {};

  // Encontrar los factores comunes y sus menores exponentes
  for (let i1 = 0; i1 < n1PrimosKeys.length; i1++) {
    const currentKey = n1PrimosKeys[i1];
    if (n2PrimosKeys.includes(currentKey)) {
      resMcd[currentKey] = Math.min(n1Primos[currentKey], n2Primos[currentKey]);
    }
  }

  // Obtener los valores de los factores comunes
  const resMcdValues = Object.values(resMcd);

  // Aplanar los valores (si es necesario) y multiplicar para obtener el MCD
  const flattenedValues = flatten(resMcdValues);

  return multiply(flattenedValues);
}

console.log(mcd(84, 450));