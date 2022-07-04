let ArregloOne: number[] = new Array(6);
let ArregloTwo: number[] = new Array(6);
let ArregloSuma: number[] = new Array(6);
let index: number;
let resultado: number;

for (let index: number = 0; index < 6; index++) {
  ArregloOne[index] = Number(
    prompt(`Ingrese el número en la posición: ${index} de la primer lista:`)
  );
  ArregloTwo[index] = Number(
    prompt(`Ingrese el número en la posición: ${index} de la segunda lista:`)
  );

  let suma: number = ArregloOne[index] + ArregloTwo[index]; //en cada vuelta, suma el valor de los dos vectores

  resultado = suma; //guarda el resultado de la suma.
  ArregloSuma[index] = resultado;
}
for (index = 0; index < 6; index++) {
  console.log(`La suma del valor "${
    ArregloOne[index]
  }"(primer lista, posición ${[index]}) y 
    del valor "${ArregloTwo[index]}"(segunda lista, posición ${[index]})) es: ${
    ArregloSuma[index]
  }`);
}
