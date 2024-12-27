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
    for (let i2 = 0; i2 < n2PrimosKeys.length; i2++) {
      const currentKey2 = n2PrimosKeys[i2];
      if (currentKey === currentKey2) {
        // Almacenar el menor exponente de los factores primos comunes
        if (n1Primos[currentKey] < n2Primos[currentKey2]) {
          resMcd[currentKey] = n1Primos[currentKey];
        } else {
          resMcd[currentKey] = n2Primos[currentKey2];
        }
        break;
      }
    }
  }

  // Obtener los valores de los factores comunes
  const resMcdValues = Object.values(resMcd);

  // Aplanar los valores (si es necesario) y multiplicar para obtener el MCD
  const flattenedValues = flatten(resMcdValues);

  return multiply(flattenedValues);
}

console.log(mcd(84, 450)); // Debería imprimir 6