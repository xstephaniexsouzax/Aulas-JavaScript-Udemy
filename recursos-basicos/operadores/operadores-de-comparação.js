/*----- Operadores de comparação ----- :

Igual ==
identico ===
diferentes !=
Não identico !==
Menor <
Maior >
Menor ou igual <=
Maior ou igual >=
*/


//----- CONDICIONAL -----
//exemplo 1 : 
   
if(7 >= 7) {
    document.write('Entrou dentro do bloco if (verdadeiro)')
} else {
    document.writ('Entrou dentro do bloco else (falso)')
}

//exemplo 2 : 

var nota1 = prompt ('Digite a sua 1º nota: ');
var nota2 = prompt ('Digite a sua 2º nota: ');
var nota3 = prompt ('Digite a sua 3º nota: ');

var media = (nota1+nota2+nota3)/3;

if(media = 7) {
    document.write('Entrou dentro do bloco if (aprovado)')
} else {
    document.writ('Entrou dentro do bloco else (reprovado)')
}