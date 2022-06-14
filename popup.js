//Escutador de Eventos do DOM (Extensões precisam que funções estejam aqui dentro)
document.addEventListener('DOMContentLoaded', function() {

    //Variáveis------------------------------------------------------------

    //Botões
    const num00 = document.getElementById('num00');
    const num01 = document.getElementById('num01');
    const num02 = document.getElementById('num02');
    const num03 = document.getElementById('num03');
    const num04 = document.getElementById('num04');
    const num05 = document.getElementById('num05');
    const num06 = document.getElementById('num06');
    const num07 = document.getElementById('num07');
    const num08 = document.getElementById('num08');
    const num09 = document.getElementById('num09');
    const ponto = document.getElementById('ponto');
    const igual = document.getElementById('igual');
    const mais = document.getElementById('mais');
    const menos = document.getElementById('menos');
    const mult = document.getElementById('mult');
    const divide = document.getElementById('divide');
    const limpa = document.getElementById('limpa');






    //Funções------------------------------------------------------------
    function mostraZero() {
        alert('zero')
    }

    function mostraUM() {
        alert('1')
    }

    function mostraDois() {
        alert('2')
    }

    function mostraTres() {
        alert('3')
    }

    function mostraQuatro() {
        alert('4')
    }

    function mostraCinco() {
        alert('5')
    }

    function mostraSeis() {
        alert('6')
    }

    function mostraSete() {
        alert('7')
    }

    function mostraOito() {
        alert('8')
    }

    function mostraNove() {
        alert('9')
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
        alert('clear')
    }


    //Escutadores que ativam as funções-----------------------------------
    num00.addEventListener('click', mostraZero, false)
    num01.addEventListener('click', mostraUM, false)
    num02.addEventListener('click', mostraDois, false)
    num03.addEventListener('click', mostraTres, false)
    num04.addEventListener('click', mostraQuatro, false)
    num05.addEventListener('click', mostraCinco, false)
    num06.addEventListener('click', mostraSeis, false)
    num07.addEventListener('click', mostraSete, false)
    num08.addEventListener('click', mostraOito, false)
    num09.addEventListener('click', mostraNove, false)
    ponto.addEventListener('click', mostraPonto, false)
    igual.addEventListener('click', exibeResultado, false)
    mais.addEventListener('click', soma, false)
    menos.addEventListener('click', subtracao, false)
    mult.addEventListener('click', multiplicacao, false)
    divide.addEventListener('click', divisao, false)
    limpa.addEventListener('click', limpaTela, false)

},false)