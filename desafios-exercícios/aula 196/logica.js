
function quandoFocado() {
   document.getElementById('caixa').style.background= 'yellow';
}

function quandoDesfocado () {
    document.getElementById('caixa').style.background= '';

    var caracteres = document.getElementById('caixa').value;

    if(caracteres.length<3) {
        document.getElementById('caixa').style.background= 'red';
    } else {
        document.getElementById('caixa').style.background= 'green';
    }
}

