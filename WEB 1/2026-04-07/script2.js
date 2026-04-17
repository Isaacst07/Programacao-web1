let h1Saudacao = document.getElementById('saudacao');
let divResultado = document.getElementById('resultado')

divResultado.innerText = h1Saudacao.innerText;

let botao1 = document.getElementById('botao1');

botao1.addEventListener('click', () => {
    alert('Clicou no botão 1');
});

let botao2 = document.getElementById('botao2');

botao2.addEventListener('click', () => {
    alert('Clicou no botão 2');
});

let contador = 0;

let botao3 = document.getElementById('botao3');
let resultado3 = document.getElementById('resultado3');

botao3.addEventListener('click', () => {
    contador = contador + 1
    resultado3.innerText = `Contador: ${contador}`
})

function getById(id){
    return document.getElementById(id);
}

let somar = getById('somar');
let resultadoSoma = getById('resultadoSoma')

somar.addEventListener('click', () => {
    let n1 = getById('n1').value;
    let n2 = getById('n2').value;

    let soma = parseFloat(n1) + parseFloat(n2);
    resultadoSoma.innerText = soma || 'Digite nos campos acima';
})

getById('n2').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        somar.click();
    }
});

let estado = getById('estado');

estado.addEventListener('change', () => {
    let opcao = estado.value;
    let resultadoEstado = getById('resultadoEstado');

    resultadoEstado.innerText = opcao;
});

let corTexto = getById('corTexto');
let corFundo = getById('corFundo');

corTexto.addEventListener('change', () => {
    document.body.style.color = corTexto.value;
});

corFundo.addEventListener('change', () => {
    document.body.style.backgroundColor = corFundo.value;
});

let ligado = getById('ligado');

ligado.addEventListener('click', () => {
    let resultadoLigado = getById('resultadoLigado');

    if (ligado.checked){
        resultadoLigado.innerText = "Ligado";
    }
    else {
        resultadoLigado.innerText = "Desligado";
    }
})