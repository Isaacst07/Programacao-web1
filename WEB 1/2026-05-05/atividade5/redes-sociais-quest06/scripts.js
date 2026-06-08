function selecionar(id) {
    return document.querySelector('#' + id);
}

function selecionarTodos(tag) {
    return document.querySelectorAll(tag)
}

var botao = selecionar('enviarBtn');
botao.addEventListener('click', verificarCheckboxes);
 
function verificarCheckboxes() {
    var checkboxesMarcados = selecionarTodos('input[type=checkbox]:checked');
    if (checkboxesMarcados.length === 0) {
        return alert('Selecione pelo menos uma opção!');
    }

    var redes = selecionar('redesSelecionadas');
    var nomesSelecionados = []

    for (var item of checkboxesMarcados) {
        nomesSelecionados.push(item.value)
    }

    redes.innerHTML = 'As redes sociais selecionadas foram: ' + nomesSelecionados.join(', ');
}