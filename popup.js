//Escutador de Eventos do DOM (Extensões precisam que funções estejam aqui dentro)
document.addEventListener('DOMContentLoaded', function() {

    //Variáveis------------------------------------------------------------

    //Botões
    const teclaNum = new Array(10)
    teclaNum[0] = document.getElementById('num00');
    teclaNum[1] = document.getElementById('num01');
    teclaNum[2] = document.getElementById('num02');
    teclaNum[3] = document.getElementById('num03');
    teclaNum[4] = document.getElementById('num04');
    teclaNum[5] = document.getElementById('num05');
    teclaNum[6] = document.getElementById('num06');
    teclaNum[7] = document.getElementById('num07');
    teclaNum[8] = document.getElementById('num08');
    teclaNum[9] = document.getElementById('num09');

    const ponto = document.getElementById('ponto');
    const igual = document.getElementById('igual');
    const mais = document.getElementById('mais');
    const menos = document.getElementById('menos');
    const mult = document.getElementById('mult');
    const divide = document.getElementById('divide');
    const limpa = document.getElementById('limpa');
    //Outros
    let num 
    let display = document.getElementById('display'); //Tela de Resultados
    let memoria = document.getElementById('memo'); //Guarda resultados
    let resultado = document.getElementById('res'); 
    let debug = document.getElementById('entenda');
    let cache = Number(0)
    let resposta = Number(0)
    let operador = '+'
    let novo = false

    //Funções------------------------------------------------------------

    //Mostra tecla numérica pressionada no display
    function mostraNum(tecla) {
        num = Number(tecla)
        if(display.value == 0){
          display.value = num
        }else{
          display.value += num
        }
    }

    //Realiza as operações Matemáticas
    function operar(n1, n2, op){
        let resp = Number(0)
        switch (op) {
          case '+':
            resp = Number(n1) + Number(n2)
            break;
          case '-':
            resp = Number(n1) - Number(n2)
            break;
          case '*':
            resp = Number(n1) * Number(n2)
            break;
          case '/':
            resp = Number(n1) / Number(n2)
            break;
          default:
            window.alert("Erro!");
        }
        return Number(resp)
    }


    function mostraPonto() {
        alert('.')
    }

    function exibeResultado() {
        alert('=')
    }

    function soma() {
        alert('+')
    }

    function subtracao() {
        alert('-')
    }

    function multiplicacao() {
        alert('*')
    }

    function divisao() {
        alert('/')
    }

    function limpaTela() {
        display.value = Number(0)
        memoria.innerText = ""
        resultado.innerText = ""
        resposta = Number(0)
        cache = Number(0)
        novo= false
        operador='+'
    }

    //Escutadores que ativam as funções-----------------------------------

    teclaNum[0].addEventListener('click', function(){mostraNum(0)}, false)
    teclaNum[1].addEventListener('click', function(){mostraNum(1)}, false)
    teclaNum[2].addEventListener('click', function(){mostraNum(2)}, false)
    teclaNum[3].addEventListener('click', function(){mostraNum(3)}, false)
    teclaNum[4].addEventListener('click', function(){mostraNum(4)}, false)
    teclaNum[5].addEventListener('click', function(){mostraNum(5)}, false)
    teclaNum[6].addEventListener('click', function(){mostraNum(6)}, false)
    teclaNum[7].addEventListener('click', function(){mostraNum(7)}, false)
    teclaNum[8].addEventListener('click', function(){mostraNum(8)}, false)
    teclaNum[9].addEventListener('click', function(){mostraNum(9)}, false)

/*
    num00.addEventListener('click', mostraZero, false)
    num01.addEventListener('click', mostraUM, false)
    num02.addEventListener('click', mostraDois, false)
    num03.addEventListener('click', mostraTres, false)
    num04.addEventListener('click', mostraQuatro, false)
    num05.addEventListener('click', mostraCinco, false)
    num06.addEventListener('click', mostraSeis, false)
    num07.addEventListener('click', mostraSete, false)
    num08.addEventListener('click', mostraOito, false)
    num09.addEventListener('click', mostraNove, false)*/
    ponto.addEventListener('click', mostraPonto, false)
    igual.addEventListener('click', exibeResultado, false)
    mais.addEventListener('click', soma, false)
    menos.addEventListener('click', subtracao, false)
    mult.addEventListener('click', multiplicacao, false)
    divide.addEventListener('click', divisao, false)
    limpa.addEventListener('click', limpaTela, false)

},false)