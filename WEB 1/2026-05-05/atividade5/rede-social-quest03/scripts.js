function selecionar(id) {
    return document.querySelector('#' + id);
}

function mostrarMensagemErro(mensagem, idElemento) {
    const elemento = document.querySelector('#' + idElemento);
    if (!elemento) return;
    elemento.textContent = mensagem;
}

var botaoCalcular = selecionar('calcularTaxa')
botaoCalcular.addEventListener('click', calcularTaxa)

function calcularTaxa() {
    var qtdInteracoes = parseInt(selecionar('qtdInteracoes').value)
    var qtdVisualizacoes = parseInt(selecionar('qtdVisualizacoes').value)

    if (isNaN(qtdInteracoes) || isNaN(qtdVisualizacoes)){
        return mostrarMensagemErro('Os campos devem ser preenchidos com valores numéricos!', 'resultadoCalculo')
    }

    if (qtdVisualizacoes === 0) {
        return mostrarMensagemErro('O número de visualizações não pode ser zero!', 'resultadoCalculo');
    }

    var resultado = (qtdInteracoes / qtdVisualizacoes) * 100
    return selecionar('resultadoCalculo').innerHTML = 'Resultado: ' + resultado.toFixed(1) + '%'
}