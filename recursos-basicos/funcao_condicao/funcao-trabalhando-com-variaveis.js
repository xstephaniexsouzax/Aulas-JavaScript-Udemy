
function soma(){
    var resultado = 0 
    for (var i in arguments){
        resultado += arguments[i]
    }
    return resultado
}

console.log(soma(7,6,5,4))