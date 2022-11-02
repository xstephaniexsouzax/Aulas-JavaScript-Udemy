//menu- condicional
//break : informa que o codigo não deve avançar para a linha seguinte.
//default : "se não" do if. é executado se os casos anteriores não foram chamados.
// parseint(paremetro) - para caso o nuemro informado como parametro seja pelo prompt
var parametro = 2;

switch (parametro) {
    case 1:
        document.write('parametro1');
        break

    case 2:
        document.write('parametro2');
        break 

    default:
        document.write('default');
}