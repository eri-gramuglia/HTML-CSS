//let numero: number = Number(prompt("Ingrese un número"));
//let numDivisores: number = cantDivisores(numero);
//console.log("el número", numero, "tiene", numDivisores, "divisores");
let numero: number = Number(prompt("Ingrese un número"));

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

function cantDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor < numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}

let numDivisores: number = cantDivisores(numero);
console.log("el número", numero, "tiene", numDivisores, "divisores");
