export function flatten(arr) {
  let arrFlattened = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    for (let j = 0; j < current.length; j++) {
      arrFlattened.push(current[j]);
    }
  }
  return arrFlattened;
}

// Usamos mcm para calcular el mínimo común múltiplo de dos números
const n1 = 84; // Ejemplo de número 1
const n2 = 450; // Ejemplo de número 2
const values = { result: [mcm(n1, n2)] }; // Creamos un objeto con los resultados

// Aplanamos los valores del objeto
console.log(flatten(Object.values(values)));
