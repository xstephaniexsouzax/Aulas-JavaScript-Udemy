//tratamentos de erro 
//try - tente 
//catch - pegar 
//finally - finalmente 
//thorow - lançar exceções

var video = Array()

video[1] = Array()
video[1]['nome'] = 'the foster'
video[1]['categoria'] = 'comedia'

function getVideo(video) {
    try {
        //posiveis erros
        //logica
        //http
        console.log(video[0]['nome'])
    } catch(e){
        tratarErro(e)
        console.log('Agora sim tratamos o erro')
        //mensagem personalisada
        throw new Error ('Houve um erro, mas não se preocupe. Já, já estaremos de volta!')
    }finally {
        console.log('Sempre passa por aqui finally')
        //o console aparece, mas ainda retorna o erro
    }
 
  
}
//poderia usar uma função apresentando uma lógica para a equipe
//de desenvolvimento tratar o erro no servidor 
function tratarErro (e) {

}

getVideo(video)