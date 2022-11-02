
//3 escopos: global, função e o bloco
// variáveis globais e funções  podem se comunicar, no entanto
// variaveis feitas dentro da função não podem ser ultilizadas fora dela 

//global 
var serie = 'Friends'
//bloco
if (true) {
    var serie2 = 'Game of Thrones'
    document.write(serie)
}

document.write(serie2)

document.write('<br />')
//função
function x() {
    var serie3 = 'The Walking Dead'
    document.write(serie)
    document.write(serie2)
}

x()

document.write('<br />')
document.write(serie3) //não renderiza