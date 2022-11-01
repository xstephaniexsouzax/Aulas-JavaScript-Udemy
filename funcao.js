/* funcion nome-da-funcao (parametro){
    logica
}


function calcularAreaTerreno(comprimento, largura) {
    var area = comprimento * largura;
    return area;
};

var largura= prompt('Digite a largura do terreno em metros');
var comprimento= prompt('Digite a altura do terreno em metros');

var area= calcularAreaTerreno(comprimento, largura);

document.write('O terreno possui  ' +  area + ' metros quadrados.');

função anônima

 var exibirSaudacao = function (nome) {
    document.write('ola ' + nome + ', tudo bem?');
}

exibirSaudacao('Stephanie');

função de callback 

function exibirArtigo (id, callbackSucesso, callbackErro) {

    if (false) {
        callbackSucesso('Beneficos da atividade física', 'Os benefios da atividade fisicas são inúmeros ...');
    } else {
        callbackErro('Erro ao recuperar dados');
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>'+ titulo + '</h1>');
    document.write('<hr />');
    document.write('<p>'+ descricao + '</p>');

}

var callbackErro = function(erro) {
    document.write('<p><b>Erro:</b> ' + erro + '</p>');
}

exibirArtigo(1, callbackSucesso, callbackErro );

*/