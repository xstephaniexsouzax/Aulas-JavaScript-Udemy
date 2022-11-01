 var numero1 = prompt('Digite o primeiro número :');
 var numero2 = prompt('Digite o segundo número :');
 var operacao = prompt('Digite a operação em forma de texto: soma ou subtração ');
 numero1 = parseInt(numero1); 
 numero2 = parseInt(numero2);



function calcular(numero1, numero2, operacao) {
    switch (operacao) {
        case 'subtracao':
            return numero1 - numero2;
            break
    
        case 'soma':
            return numero1 + numero2;
            break 
    
        default:
            document.write('Opção invalida');
    }
}

document.write('O resultado é '+ );
