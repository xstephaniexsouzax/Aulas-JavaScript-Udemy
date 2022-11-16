
var objetos = Array('Cadeira', 'Impressora', 'Garfo')
//se array == -1 ele não exite 

function clicarEmAdiconar() {
    var caracter = document.getElementById('texto').value //selecionar e guardar o valor digitado
    //logica 
    if (caracter != '') { //diferente
        if (objetos.indexOf(caracter) !== -1) { //não identico
            alert('Objeto já foi adicionado')
            console.log(objetos)
        } else {
            objetos.push(caracter)
            console.log(caracter)
            document.getElementById('texto').value = ''//limpa a tela 
        }
    }
    else {
        alert('Informe um objeto válido')
    }

}

function clicarEmOrdenar () {
    objetos.sort()
    console.log(objetos)
}

/*
 if (objetos.indexOf(caracter)) {
     alert('Objeto já foi adicionado')
 } else {
     alert('Digite um caracter!')
 }
}




else if (objetos.indexOf(caracter)) {
 alert('Objeto já foi adicionado')
 console.log(objetos.indexOf(caracter))
} else if (objetos = -1){
objetos.push(caracter)
console.log(caracter)
}

if (caracter == '') {
     alert('Digite um caracter!')
 } else if (caracter.indexOf(objetos)) {
     alert('Objeto já foi adicionado')
 } else {
     alert('Não exite')
     document.getElementById('texto').value =+ caracter
     objetos.unshift(caracter)
     console.log(caracter)
 }
}



*/

