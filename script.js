let numeroMemoria = '';
let operadorMemoria = '';
let novoNumero = false;
const visor = document.getElementById('visor');
const botaoIgual = document.getElementById('btn-igual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.btn-operador:not(#btn-igual)');
const botaoAcao = document.querySelectorAll('.acao');

botoesNumeros.forEach((botao) => {
    botao.addEventListener ('click', () => {
        const numeroClicado = botao.innerText;

        if (novoNumero === true){
            visor.value = numeroClicado;
            novoNumero = false;
        } else {
            visor.value += numeroClicado;
        }
        
    })
})

botaoAcao.forEach((botao) => {
    botao.addEventListener ('click',() => {
        const acaoClicada = botao.innerText;

        if(acaoClicada =='⌫') {
            visor.value = visor.value.slice(0, -1);
        } else if (acaoClicada == 'C' || acaoClicada =='CE') {
            visor.value = '';
        }

        if (acaoClicada == 'C') {
                numeroMemoria = '';
                operadorMemoria = '';
                novoNumero = false;
            }
    })
})

botoesOperadores.forEach((botao) => {
    botao.addEventListener('click', () => {
        const operadorClicado = botao.innerText;

        numeroMemoria = visor.value;
        operadorMemoria = operadorClicado;
        novoNumero = true;
    })
})

botaoIgual.addEventListener('click', () => {
    const numeroAtual = visor.value;

    const num1 = parseFloat(numeroMemoria.replace(',', '.'));
    const num2 = parseFloat(numeroAtual.replace(',', '.'));
    let resultado = 0;

    switch(operadorMemoria) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
        case '−':
            resultado = num1 - num2;
            break;
            break;    
        case '×':
            resultado = num1 * num2;
            break;
        case '÷':
            resultado = num1 / num2;
            break;
        default:
            return;
        }    
                            
    visor.value = resultado.toString().replace('.', ',');
    operadorMemoria = '';
    novoNumero = true;
    
})