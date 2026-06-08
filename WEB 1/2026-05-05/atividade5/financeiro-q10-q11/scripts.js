function selecionar(id) {
    return document.getElementById(id);
}

var botaoDireita = selecionar("moverParaDireitaBtn");
var botaoEsquerda = selecionar("moverParaEsquerdaBtn");
var ativosDisponiveis = selecionar("ativosDisponiveis");
var carteiraInvestimentos = selecionar("carteiraInvestimentos");

atualizarBotoes();

botaoDireita.addEventListener("click", moverParaDireita);
botaoEsquerda.addEventListener("click", moverParaEsquerda);


function moverParaDireita() {
    mover(ativosDisponiveis, carteiraInvestimentos);
    atualizarBotoes();
}

function moverParaEsquerda() {
    mover(carteiraInvestimentos, ativosDisponiveis);
    atualizarBotoes();
}

function mover(transmissor, receptor) {
    var opcoesSelecionadas = transmissor.selectedOptions;

    if (opcoesSelecionadas.length === 0) {
        return alert('Selecione pelo menos uma opção');
    }

    for (var i = 0; i < opcoesSelecionadas.length; i++) {
        receptor.appendChild(opcoesSelecionadas[i]);
    }
}

function estaVazio(select) {
    return select.options.length === 0;
}

function estaCheio(select) {
    return select.options.length === 10;
}

function atualizarBotoes() {
    botaoDireita.disabled = estaVazio(ativosDisponiveis);
    botaoEsquerda.disabled = estaVazio(carteiraInvestimentos);
}