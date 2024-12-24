import { group } from "../utils/group.js";
import { descFactoresPrimos } from "../utils/num-defactor.js";
import { multiply } from "../utils/multiply.js";
import { flatten } from "../utils/flatten.js";

export function mcm(n1, n2) {
  const n1Primos = group(descFactoresPrimos(n1));
  const n2Primos = group(descFactoresPrimos(n2));

  const resMcm = {};

  const n1PrimosKeys = Object.keys(n1Primos);
  const n2PrimosKeys = Object.keys(n2Primos);

  // Agregar los factores primos de n1
  for (let i = 0; i < n1PrimosKeys.length; i++) {
    const currentKey = n1PrimosKeys[i];
    const currentValue = n1Primos[currentKey];
    resMcm[currentKey] = [];

    for (let j = 0; j < currentValue.length; j++) {
      resMcm[currentKey].push(currentValue[j]);
    }
  }

  // Agregar los factores primos de n2, eligiendo el máximo número de veces para cada primo
  for (let i = 0; i < n2PrimosKeys.length; i++) {
    const currentKey = n2PrimosKeys[i];
    const currentValue = n2Primos[currentKey];

    if (!resMcm[currentKey]) {
      resMcm[currentKey] = [];
    }

    for (let j = 0; j < currentValue.length; j++) {
      if (currentValue.length > resMcm[currentKey].length) {
        resMcm[currentKey] = currentValue;
      }
    }
  }

  const resMcmValues = Object.values(resMcm);

  const flattenedValues = flatten(resMcmValues);

  return multiply(flattenedValues);
}

console.log(mcm(84, 450));
