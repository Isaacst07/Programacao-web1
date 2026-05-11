// QUESTÃO 1
function mostrarMensagemErro(mensagem, idElemento) {
    const elemento = document.querySelector('#' + idElemento);
    if (!elemento) return;

    elemento.textContent = mensagem;
    elemento.classList.remove('oculto');

    setTimeout(function() {
        elemento.classList.add('oculto');
    }, 3000);
}

var botaoErro = document.querySelector('#botaoErro');

botaoErro.addEventListener('click', function() {
    mostrarMensagemErro('ERROR: mensagem de erro!', 'mensagemErro');
});


// QUESTÃO 2 - a)
var botaoExibir = document.querySelector('#botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);

/*
function exibirConteudo() {
    var conteudo = document.querySelector('#caixaDeTexto').value.trim();
    if (conteudo === '') {
        return document.querySelector('#conteudo').innerHTML = 'O campo está vazio!';
    }
    document.querySelector('#conteudo').innerHTML = conteudo;
}
*/

// QUESTÃO 2 - b)
function exibirConteudo() {
    var conteudo = document.querySelector('#caixaDeTexto').value.trim();
    if (conteudo === '') {
        return mostrarMensagemErro('O campo está vazio!', 'conteudo');
    }
    document.querySelector('#conteudo').innerHTML = conteudo;
}

// QUESTÃO 3
