var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')
pincel.fillStyle = 'grey'
pincel.fillRect(0,0 , 600,400)


function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}
desenhaCirculo(300, 200, raio + 20, 'red');
desenhaCirculo(300, 200, raio + 10, 'white');
desenhaCirculo(300, 200, raio, 'red');
function dispara(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;
  if ((x > 300 - raio) &&
    (x < 300 + raio) &&
    (y > 200 - raio) &&
    (y < 200 + raio)) {
    alert('Acertou no centro do alvo');
  }
}
tela.onclick = dispara;



// var desenha = false;
// function desenhaCirculo(evento) {
//   if (desenha) {
//     var x = evento.pageX - tela.offsetLeft;
//     var y = evento.pageY - tela.offsetTop;
//     pincel.fillStyle = 'blue';
//     pincel.beginPath();
//     pincel.arc(x, y, 10, 0, 2 * 3.14);
//     pincel.fill();
//   }
//   console.log(x + ',' + y);
// }
// tela.onmousemove = desenhaCirculo;
// function habilitaDesenhar() {
//   desenha = true;
// }
// function desabilitaDesenhar() {
//   desenha = false;
// }
// tela.onmousedown = habilitaDesenhar;
// tela.onmouseup = desabilitaDesenhar;



// pincel.fillStyle = 'grey'
// pincel.fillRect(0,0 , 600,400)
// var cores = ['blue', 'red', 'green']
// var indiceCorAtual = 0; // começa com blue
// var raio = 10 // Para aumentar sempre que clicar

// function tiro(evento){
//   var x = evento.pageX - tela.offsetLeft
//   var y = evento.pageY - tela.offsetTop

//   if (evento.shiftKey && evento.altKey) {
//    alert('Só aperte uma tecla por vez, por favor!');
//   } else if(evento.shiftKey && raio + 10 <= 40) {
//     raio = raio + 10;
//   } else if(evento.altKey && raio - 5 >= 10) {
//     raio = raio - 5;
//   }

//   // if (evento.shiftKey) {// Para aumentar sempre que clicar
//   //   raio = raio + 10;
//   // }

//   // // O raio muda somente com o shift pressionado
//   // var raio = 10
//   // if (evento.shiftKey) {// pressionando a tecla Shift
//   //   raio = raio + 20; // raio agora passa a valer 30!
//   // }
  
//   pincel.fillStyle = cores[indiceCorAtual];
//   pincel.beginPath()
//   pincel.arc(x, y, raio, 0, 2*3.14)
//   pincel.fill()
// }
// tela.onclick = tiro
// function mudaCor() {
//   indiceCorAtual++;
//   if (indiceCorAtual >= cores.length) {
//     indiceCorAtual = 0; // volta para a primeira cor, azul
//   }
//   return false; // para não exibir o menu padrão do canvas
// }
// tela.oncontextmenu = mudaCor;




// function desenhaEsquadro(xa, ya, xc, yc, cor) {
//   pincel.fillStyle = cor
//   pincel.beginPath();
//   pincel.moveTo(xa, ya);
//   pincel.lineTo(xa, yc);
//   pincel.lineTo(xc, yc);
//   pincel.fill();
//   pincel.fillStyle = 'white'
//   pincel.beginPath();
//   pincel.moveTo((6 * xa + xc) / 7, (9 * ya + 5 * yc) / 14);
//   pincel.lineTo((6 * xa + xc) / 7, (ya + 6 * yc) / 7);
//   pincel.lineTo((5 * xa + 9 * xc) / 14, (ya + 6 * yc) / 7);
//   pincel.fill();
// }
// desenhaEsquadro(50, 50, 400, 400, 'black');



// function desenhaRetangulo(x, y, largura, altura, cor) {
//   var tela = document.querySelector('canvas');
//   var pincel = tela.getContext('2d');

//   pincel.fillStyle=cor;
//   pincel.fillRect(x,y, largura, altura);
//   pincel.strokeStyle='black';
//   pincel.strokeRect(x,y, largura, altura);
// }

// function desenhaTexto(x , y, texto) {
//   var tela = document.querySelector('canvas');
//   var pincel = tela.getContext('2d');

//   pincel.font='15px Georgia';
//   pincel.fillStyle='black';
//   pincel.fillText(texto, x, y);    
// }

// function desenhaBarra(x, y, serie, cores, texto) {

//   desenhaTexto(x, y - 10, texto);

//   var somaAltura = 0;
//   for (var i = 0; i < serie.length; i++) {
//       var altura = serie[i];
//       desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
//       somaAltura = somaAltura + altura;
//   }
// }

// var cores = ['blue','green','yellow', 'red'];
// var serie2015 = [50,25,20,5];
// var serie2016 = [65,20,13,2];

// desenhaBarra(50, 50, serie2015, cores, '2015');
// desenhaBarra(150, 50, serie2016, cores, '2016');




// function desenhaTexto(texto, x , y) {
//   pincel.font='20px Georgia';
//   pincel.fillStyle='black';
//   pincel.fillText(texto, x, y);    
// }
// desenhaTexto("Qual é a fração?", 50, 30);
// function desenhaQuadrado(x, y, tamanho, cor) {
//   var tela = document.querySelector('canvas');
//   var pincel = tela.getContext('2d');

//   pincel.fillStyle=cor;
//   pincel.fillRect(x,y, tamanho, tamanho);
//   pincel.strokeStyle='black';
//   pincel.strokeRect(x,y, tamanho, tamanho);
// }
// var y = 50;
//   desenhaQuadrado(50, y, 100, 'green');
//   desenhaQuadrado(150, y, 100, 'green');
//   desenhaQuadrado(250, y, 100, 'green');
//   desenhaQuadrado(350, y, 100, 'white');



// pincel.fillStyle = 'lightgray';
// pincel.fillRect(0, 0, 600, 400);
// function desenhaCirculo(x, y, raio, cor) {
//   pincel.fillStyle = cor;
//   pincel.beginPath();
//   pincel.arc(x, y, raio, 0, 2*3.14);
//   pincel.fill();
// }
// function desenhaFlor(x, y) {
//   desenhaCirculo(x, y+20, 10, 'blue');
//   desenhaCirculo(x, y, 10, 'red');
//   desenhaCirculo(x, y-20, 10, 'yellow');
//   desenhaCirculo(x-20, y, 10, 'orange');
//   desenhaCirculo(x+20, y, 10, 'black');
// }
// desenhaFlor(300, 200);




// function desenhaQuadrado(x, y, cor) { 
//   pincel.fillStyle = cor
//   pincel.fillRect(x,y ,  50,50);
//   pincel.fillStroke = 'black'
//   pincel.strokeRect(x,y , 50,50)
//  }
// // desenhaQuadrado(0, 0, 'green')
// // desenhaQuadrado(0, 50, 'yellow')
// // desenhaQuadrado(0, 100, 'red')
// var x = 0
// while(x < 600){
//   desenhaQuadrado(x,0, 'green')
//   desenhaQuadrado(x,50, 'red')
//   desenhaQuadrado(x,100, 'blue')
//   x = x + 50
// }


/*
pincel.fillStyle = 'gray'
pincel.fillRect(0,0 , 600,400);

pincel.fillStyle = 'green'
pincel.fillRect(200,0 , 100,400)

pincel.fillStyle = 'red'
pincel.fillRect(200,0 , 200,400)

pincel.fillStyle = 'black'
pincel.fillRect(300,0 , 200,400)
*/


/*
// cabeça
pincel.fillStyle = 'darkgreen';
pincel.fillRect(200,50,350,300);

// olhos
pincel.fillStyle = 'black';
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);

// nariz
pincel.fillRect(340, 200, 70, 100);

// boca ou barba
pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110);
*/

/* 
// triangulo preto
pincel.beginPath()
pincel.moveTo(50,50)
pincel.lineTo(50,400)
pincel.lineTo(400,400)
pincel.fill()
// triangulo branco
pincel.fillStyle = 'white';
pincel.beginPath()
pincel.moveTo(100,175)
pincel.lineTo(100,350)
pincel.lineTo(275,350)
pincel.fill()
*/

/* 
//bandeira do Brasil
pincel.fillStyle = 'green'
pincel.fillRect(0,0 , 600,400)
pincel.fillStyle = 'yellow'
pincel.beginPath()
pincel.moveTo(40,200)
pincel.lineTo(300,40)
pincel.lineTo(560,200)
pincel.lineTo(300,360)
pincel.fill()
pincel.fillStyle='blue'
pincel.beginPath()
pincel.arc(300, 200, 100, 0, 2*3.14)
pincel.fill()
*/



