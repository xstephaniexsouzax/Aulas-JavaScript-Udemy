/* ----- OPERADORES LÓGICOS -----
E (&&)
OU (II)
NEGAÇÃO (!)*/

var nota = prompt('Digite a sua nota :');
var faltas = prompt ('Digite seu número de faltas: ');

var media = 7;
var maximoDeFaltas = 15;

if (nota >= media && faltas <= maximoDeFaltas) {
    document.write('Aprovado');
} else {
    document.write('Reprovado');
}