//----- TRANSFORMAÇÕES -----

//strig em numérico

var numero1 = prompt('Digite um numero: ');
var numero2 = prompt('Digite outro numero: ');
var soma =  numero1 + numero2;

numero1 = parseInt(numero1); // transforma de texto para número e mantem só a parte inteira
numero2 = parseFloat(numero2);

console.log(numero1);
console.log(numero2);

document.write(soma);

// numerico em strig - transforma de nuemro para texto.

var numero1 = prompt('Digite um numero: ');
var numero2 = prompt('Digite outro numero: ');

console.log(numero1);
console.log(numero2);

document.write(numero1.toString() + numero2.toString());