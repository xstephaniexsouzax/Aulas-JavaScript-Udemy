//foreach: no js é como uma funcao do array

var listaConvidados = [ 'Maria ', 'Stephanie','Joabe','Jefté']

// indice: número em ordem da lista que vai de 0 a x ( só numerais positivos)
// valor : o nome do objeto que está na lista
// array : a lista com os valores
// vai se repetir 4 vezes, pois é a quantidade de objetos que tem na lista 
// 
var f = function(valor, indice, array){
    //logica para cada item do array
    console.log( array)
    // mudar valor do array
    if (valor =='Joabe') {
        array[indice] = 'Um novo valor'
    }
}

listaConvidados.forEach(f)

console.log(listaConvidados)

