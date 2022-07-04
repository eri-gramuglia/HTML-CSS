let dimensionArreglos: number = Number(
  prompt("Ingrese tamaño de los arreglos")
);
let arregloNombre: string[] = new Array(dimensionArreglos);
let arregloEdad: number[] = new Array(dimensionArreglos);
let arregloAltura: number[] = new Array(dimensionArreglos);

function ingresarDatos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  for (let indice: number = 0; indice <= dimension - 1; indice++) {
    arrayNombre[indice] = prompt("Ingresar el nombre");
    arrayEdad[indice] = Number(prompt("Ingresar la edad"));
    arrayAltura[indice] = Number(prompt("Ingresar la altura"));
  }
}

function mostrar(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  for (let indice: number = 0; indice < dimension; indice++) {
    console.log(
      `Nombre: ${arrayNombre[indice]}, Edad: ${arrayEdad[indice]}, Altura: ${arrayAltura[indice]} cm`
    );
  }
}

function intercambiarDatos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  posicion1: number,
  posicion2: number
) {
  // declaro variables donde guardar para no perder los valores
  let nombreAux: string;
  let edadAux, alturaAux: number;
  // Paso 1 : Guardo en las variables lo que tengo en la pos 1 de los arreglos

  nombreAux = arrayNombre[posicion1];
  edadAux = arrayEdad[posicion1];
  alturaAux = arrayAltura[posicion1];
  // paso 2: guardo en la posicion 1 lo que tengo en la pos 2
  arrayNombre[posicion1] = arrayNombre[posicion2];
  arrayEdad[posicion1] = arrayEdad[posicion2];
  arrayAltura[posicion1] = arrayAltura[posicion2];
  //paso 3: guardo lo que tengo en la variable en la pos 2
  arrayNombre[posicion2] = nombreAux;
  arrayEdad[posicion2] = edadAux;
  arrayAltura[posicion2] = alturaAux;
}
/* si 1: valorUno>valorDos
   si -1: valorUno<valorDos
   si o: valorUno=valorDos
*/
function compararValores(valorUno: number, valorDos: number): number {
  if (valorUno > valorDos) return 1;
  else {
    if (valorUno < valorDos) return -1;
    else return 0;
  }
}

function ordenarArreglos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  let i, j: number;
  let resultadoCompararEdad: number = 0;
  let resultadoCompararAltura: number = 0;

  for (i = 0; i < dimension - 1; i++) {
    for (j = 0; j < dimension - 1 - i; j++) {
      // comparar las edades
      resultadoCompararEdad = compararValores(arrayEdad[j], arrayEdad[j + 1]);
      if (resultadoCompararEdad === 1) {
        intercambiarDatos(arrayNombre, arrayEdad, arrayAltura, j, j + 1);
      } else {
        if (resultadoCompararEdad === 0) {
          resultadoCompararAltura = compararValores(
            arrayAltura[j],
            arrayAltura[j + 1]
          );
          if (resultadoCompararAltura === 1) {
            intercambiarDatos(arrayNombre, arrayEdad, arrayAltura, j, j + 1);
          }
        }
      }
    }
  }
}

ingresarDatos(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
ordenarArreglos(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
