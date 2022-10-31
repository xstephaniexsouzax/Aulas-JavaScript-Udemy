var nota = prompt('Digite a sua nota :');
var faltas = prompt ('Digite seu número de faltas: ');

var media = 7;
var maximoDeFaltas = 15;

// var resultador = <condição> ? <verdadeiro> :  <falso>

var resultado = (nota >= media && faltas <= maximoDeFaltas) ? 'Aprovado': 'Reprovado';

document.write(resultado);