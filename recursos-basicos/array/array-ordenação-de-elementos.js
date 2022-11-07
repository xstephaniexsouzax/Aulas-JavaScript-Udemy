/* ordenar elementos 

var listaDeFrutas = Array()

listaDeFrutas [1] = 'Maça'
listaDeFrutas [2] = 'Banana'
listaDeFrutas [3] = 'Abacaxi'
listaDeFrutas [4] = 'Limão'

// colocar em ordem alfabética 
console.log(listaDeFrutas.sort())
*/

var listaDeNum = Array()

listaDeNum[1] = 12
listaDeNum[2] = 30
listaDeNum[3] = 3
listaDeNum[4] = 5

// colocar em ordem de grandeza

console.log(listaDeNum.sort(ordemNumerica))

function ordemNumerica (a,b) {
    return a - b
    // a < 0 a é ordenado antes de b
    // a > 0 b é ordenado antes de a
    // a=b ordem mantida 
}