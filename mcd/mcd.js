import { group } from "../utils/group.js";
import { descFactoresPrimos } from "../utils/num-defactor.js";
import { multiply } from "../utils/multiply.js";
import { flatten } from "../utils/flatten.js";

export function mcd(n1, n2) {
  const n1Primos = group(descFactoresPrimos(n1));
  const n2Primos = group(descFactoresPrimos(n2));

  const n1PrimosKeys = Object.keys(n1Primos);
  const n2PrimosKeys = Object.keys(n2Primos);

  const resMcd = {};

  // Itero todas las claves de n1Primos.
  for (let i1 = 0; i1 < n1PrimosKeys.length; i1++) {
    // Inicializo una constante llamada currentKey dónde
    // almaceno las keys iteradas de n1PrimosKey
    const currentKey = n1PrimosKeys[i1];
    // Creo otro loop para iterar las claves de n2Primos.
    for (let i2 = 0; i2 < n2PrimosKeys.length; i2++) {
      // inicializo una constante llamada currentKey2 dónde
      // almaceno todos las keys iteradas de n2PrimosKey
      const currentKey2 = n2PrimosKeys[i2];
      // Creo un condicional para comprobar que tanto currentKey(n1) y
      // currentKey2(n2) sean iguales.
      if (currentKey === currentKey2) {
        // Almacenar el menor exponente de los factores primos comunes
        // Creamos otro condicional donde el valor de n1Primos[currentKey]--> [3];
        // es menor que n2Primos[currentKey2]-->[3, 3];
        if (n1Primos[currentKey] < n2Primos[currentKey2]) {
          console.log(n1Primos[currentKey]);
          console.log(n2Primos[currentKey2]);
          // si se cumple la condición la variable resultante se actualiza
          // al valor de n1Primos[currentKey]
          resMcd[currentKey] = n1Primos[currentKey];
          console.log(resMcd[currentKey]);
        } else {
          // Si no se cumple la condición la vaariable resultante
          // se actualizará con el valor de n2Primos[currentKey2]
          resMcd[currentKey] = n2Primos[currentKey2];
        }
        break;
      }
    }
  }

  const resMcdValues = Object.values(resMcd);

  const flattenedValues = flatten(resMcdValues);

  return multiply(flattenedValues);
}

console.log(mcd(84, 405));
