 /* link: https://www.w3schools.com/jsref/jsref_obj_string.asp
 
propriedade length 
    document.write('Stephanie Souza Miranda'.length);

metodos- funcao : informa qual a letra que esta em determinada posicao
    document.write('Stephanie Souza Miranda'.charAt(7));

metodo Math 

     var x = Math.ceil(10.380) //forçar arredondamento para cima
     document.write(x)
    
     var y = Math.floor(10.380) //forçar arredondamento para baixo
     document.write(y)
     
     
     var z = Math.round(10.380) //verifica se deve arredondar para cima ou para baixo
     document.write(z)
     
     
     var c = Math.random() //sortear valores entre 0 e 1
     document.write(c)
     
metodo data get - recuperar dados / set - adicionar/remover dados 

var data = new Date();

ver o dia/mes/ ano em que estamos (0-janeiro 11- dezembro)- com base no windows
document.write(data.getDate() + '/' + (data.getMonth() + 1 ) +'/' + data.getFullYear() );


//adicionar ou remover dias
var data = new Date();
data.setDate(data.getDate() - 720);
document.write(data.toDateString());

//adicionar ou remover meses (baseado nos codigo anterior)
var data = new Date();
data.setMonth(data.getMonth() + 1 );
document.write(data.toDateString());

////adicionar ou remover anos (baseado nos codigo anterior)

var data = new Date();
data.setUTCFullYear(data.getFullYear() + 1 );
document.write(data.toDateString());

Exercicio: calcular quantos dias tem entre 15/01/2017 a 23/02/2017

//15/01/2017
var data1= new Date(2017,0,15); // ano/ mes (-1)/dia

//23/02/2017
var data2 = new Date(2017,01,23); //ano/ mes (-1)/dia

//print das duas datas
document.write(data1.toString());
document.write('<hr />');
document.write(data2.toString());

document.write('<hr />');
//converter as duas datas para milisegundos
document.write(data1.getTime());
document.write('<hr />');
document.write(data2.getTime());

//achar a diferença de milisegundo entre as duas 
// math.abs= inverter o sinal
document.write('<hr />');
var diferencaMilisegundos= Math.abs(data1.getTime() - data2.getTime());
document.write(diferencaMilisegundos);

// converter de milisegundos para dias
// math.ceil aproximar 
document.write('<hr />');
var conversaoDeMilisegundoParaDias= diferencaMilisegundos/(1000*60*60*24);

document.write('A diferença entre a data1 e a data2 é de :' +Math.ceil(conversaoDeMilisegundoParaDias)+' dia(s)' );

*/






 