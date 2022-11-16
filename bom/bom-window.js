//bom- trata os objetos relacionados com o navejador

function abrirPagina() {
    // pode ser usados como parametros (url, nome, atributo)
    abrir = window.open('https://www.google.com/', 'novaAba', 'width = 500px', 'height=500px')
}

function fecharPagina(){
    abrir.close()
}