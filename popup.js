//Escutador de Eventos do DOM (Extensões precisam que funções estejam aqui dentro)
document.addEventListener('DOMContentLoaded', function() {

    //Variáveis------------------------------------------------------------

    //Botões----
    //teclado
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

    //operações
    const ponto = document.getElementById('ponto');
    const igual = document.getElementById('igual');
    const mais = document.getElementById('mais');
    const menos = document.getElementById('menos');
    const mult = document.getElementById('mult');
    const divide = document.getElementById('divide');
    const limpa = document.getElementById('limpa');
    const back = document.getElementById('back');
    //---------
    //Outros
    let ultima = "limpa"
    let flutuante = false
    let display = document.getElementById('display'); //Tela de Resultados
    let memoria = document.getElementById('memo'); //Guarda resultados
    let resultado = document.getElementById('res');
    let parcial
    let cache = Number(0)
    let resposta = Number(0)
    let operador = '+'
    let novo = false

    //Funções------------------------------------------------------------

    //Mostra tecla numérica pressionada no display
    function mostraNum(tecla) {
      ultima = "tecla"
      if(flutuante){
        display.innerText = `${display.innerText}.${tecla}`
      }else{
        if(display.innerText == 0){
          display.innerText = tecla
        }else{
          display.innerText = `${display.innerText}${tecla}`
        }
      }
      encerraPonto()
    }

    //Indica Operação que será feita
    function indicaOperacao(sinal){
        ultima = "sinal"
        encerraPonto()
        cache = Number(display.innerText)
        resposta = operar(resposta, cache, operador)
        parcial = String(resposta)
        operador= sinal

        if(novo){//se for para gerar uma nova conta
          novo = false
          memoria.innerText = `${display.innerText} ${sinal}`
        }else{
          if(memoria.innerText == ''){
            memoria.innerText = `${display.innerText} ${sinal}`
          }else{
            memoria.innerText = `${parcial} ${sinal}`
          }  
        }
        display.innerText = '0' //limpa display
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
      let dot = /[.]/g //Expressãso regular com um ponto dentro
      if(display.innerText.search(dot) == '-1'){//testa se já tem um ponto no numero
        flutuante = true
        ponto.style.color= 'yellow'
        ponto.style.backgroundColor= 'green'
        ultima = "ponto"
      }else{
        alert('Já possui uma vírgula')
      }
    }

    function encerraPonto(){
      flutuante = false
      ponto.style.color= 'white'
      ponto.style.backgroundColor= 'black'
    }

    //Mostra resultado Final ao clicar em =
    function exibeResultado() {
        ultima = "igual"
        encerraPonto()
        let valorNoDisplay = display.innerText
        let numeroNaTela = display.innerText
        if(novo == false){
            if(memoria.innerText == ''){
                memoria.innerText = valorNoDisplay
                resposta = Number(numeroNaTela)
                resultado.innerText = `Resultado: ${valorNoDisplay}`
            }else{
                memoria.innerText += ` ${valorNoDisplay}`
                resposta = operar(resposta, numeroNaTela, operador)
                resultado.innerText = `Resultado: ${resposta}`
            }         
        }else{//se for para gerar uma nova conta
          memoria.innerText = valorNoDisplay
          resposta = operar(resposta,numeroNaTela,operador)
          resultado.innerText = `Resultado: ${resposta}`
        }
        novo=true
        display.innerText = String(resposta)
        resposta = Number(0)
        operador='+'
    }

    //Limpa toda a memória e valores em tela
    function limpaTela() {
        ultima = "limpa"
        display.innerText = '0'
        memoria.innerText = ""
        resultado.innerText = ""
        resposta = Number(0)
        cache = Number(0)
        flutuante = false
        novo= false
        operador='+'
    }

    //Volta a última ação
    function backspace(){
      switch (ultima) {
        case 'limpa':
          //nada a ser feito
          break;
        case "igual":
          limpaTela()
          break;
        case 'ponto':
          encerraPonto()
          break;
        case 'sinal':
          //alert('APAGA SINAL') 
          memoria.innerText = ''
          ultima = "tecla"
          display.innerText = String(parcial)
          resposta = 0
          break;
        case 'tecla':
          if(display.innerText == 0){
            //nada a ser feito
          }else{
            if(display.innerText.length === 1){
              display.innerText = '0'
            }else{
              display.innerText = display.innerText.slice(0, -1)
            }          
          }
          break;
        default:
          window.alert("Erro!");
      }
    }



    //Escutadores que ativam as funções-----------------------------------

    teclaNum[0].addEventListener('click', function(){mostraNum('0')}, false)
    teclaNum[1].addEventListener('click', function(){mostraNum('1')}, false)
    teclaNum[2].addEventListener('click', function(){mostraNum('2')}, false)
    teclaNum[3].addEventListener('click', function(){mostraNum('3')}, false)
    teclaNum[4].addEventListener('click', function(){mostraNum('4')}, false)
    teclaNum[5].addEventListener('click', function(){mostraNum('5')}, false)
    teclaNum[6].addEventListener('click', function(){mostraNum('6')}, false)
    teclaNum[7].addEventListener('click', function(){mostraNum('7')}, false)
    teclaNum[8].addEventListener('click', function(){mostraNum('8')}, false)
    teclaNum[9].addEventListener('click', function(){mostraNum('9')}, false)
    ponto.addEventListener('click', mostraPonto, false)
    igual.addEventListener('click', exibeResultado, false)
    mais.addEventListener('click', function(){indicaOperacao('+')} , false)
    menos.addEventListener('click', function(){indicaOperacao('-')}, false)
    mult.addEventListener('click', function(){indicaOperacao('*')}, false)
    divide.addEventListener('click', function(){indicaOperacao('/')}, false)
    limpa.addEventListener('click', limpaTela, false)
    back.addEventListener('click', backspace, false)
},false)