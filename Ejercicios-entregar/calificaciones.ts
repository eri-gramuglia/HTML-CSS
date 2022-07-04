let nombreAlumno: string = prompt("ingrese el nombre del alumno");
let notaPractica: number;
let notaProblema: number;
let notaTeorica: number;
let sumaNotas: number = 0;
while (nombreAlumno !== "") {
  notaPractica = Number(prompt("ingrese la nota práctica"));
  notaProblema = Number(prompt("ingrese la nota de los problemas"));
  notaTeorica = Number(prompt("ingrese la nota teórica"));
  if (
    notaPractica <= 10 &&
    notaPractica >= 0 &&
    notaProblema <= 10 &&
    notaProblema >= 0 &&
    notaTeorica <= 10 &&
    notaTeorica >= 0
  ) {
    sumaNotas = notaPractica * 0.1 + notaProblema * 0.5 + notaTeorica * 0.4;
    console.log("La nota final de", nombreAlumno, "es:", sumaNotas);
  } else {
    console.log("Error en el ingreso de las notas");
  }
  nombreAlumno = prompt("ingrese el nombre del alumno");
}
