/* executa a ação uma vez após o tempo informado
setTimeout (<acao>, <tempo em milissegundos>);clearTimeout

executa a acao após um periodo informado
setInterval (<acao>, <tempo em milissegundos>);clearInterval



setTimeout(function() {
    document.write('Teste');
}, 2000)


ex básico de um cronómetro
var tempo = 60

setInterval ( function(){
    document.write(tempo)
    tempo--
}, 2000)


recarregar página  
var tempo = 5;

setInterval(function (){
    document.write(tempo)
    tempo--

    if (tempo === 0){
        window.location.reload();
    }
},1000)


interromper processo*/
var tempo = 5;

var x = setInterval(function (){
    document.write(tempo)
    tempo--

    if (tempo === 0){
        clearInterval(x);
    }
},1000)
