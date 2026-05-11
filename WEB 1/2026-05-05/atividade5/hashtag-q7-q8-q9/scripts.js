function selecionar(id) {
    return document.querySelector(id);
}

var botaoAdicionar = selecionar("#hashtagBtn");
botaoAdicionar.addEventListener("click", adicionarHashtag);

var botaoRemover = selecionar("#removerBtn");
botaoRemover.addEventListener("click", removerHashtag);

function adicionarHashtag() {
    var select = selecionar("#listaHashtags");
    var texto = selecionar("#hashtag").value.trim();
    var mensagem = selecionar("#mensagemErro");

    if (texto === '' || texto === '#') {
        mensagem.innerHTML = 'Digite uma hashtag';
        return;
    }

    if (texto.length < 3) {
        mensagem.innerHTML = 'A hashtag deve ter no mínimo 2 caracteres, além da #';
        return;
    }

    if (select.length >= 5) {
        mensagem.innerHTML = 'Você atingiu o limite de hashtags';
        return;
    }

    for (var i = 0; i < select.options.length; i++) {
        if (texto.toLowerCase() === select.options[i].text.toLowerCase()) {
            mensagem.innerHTML = 'Essa hashtag já existe';
            return;
        }
    }

    mensagem.innerHTML = '';
    var option = document.createElement('option');
    option.text = texto;
    select.appendChild(option);
}

function removerHashtag() {
    var select = selecionar("#listaHashtags");
    var opcoesSelecionadas = select.selectedOptions;
    var mensagem = selecionar("#mensagemErro");

    if (opcoesSelecionadas.length === 0) {
        mensagem.innerHTML = 'Selecione uma hashtag na lista para remover';
        return;
    }

    for (var i = opcoesSelecionadas.length - 1; i >= 0; i--) {
        select.removeChild(opcoesSelecionadas[i]);
    }
    
    mensagem.innerHTML = '';
}