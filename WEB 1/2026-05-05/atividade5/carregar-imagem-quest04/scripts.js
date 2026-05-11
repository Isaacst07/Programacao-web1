function selecionar(id) {
    return document.querySelector('#' + id);
}
var botaoCarregar = selecionar('botaoCarregar');

botaoCarregar.addEventListener('click', function () {
    var uploadImagem = selecionar('uploadImagem');
    var arquivoSelecionado = uploadImagem.files[0];
    var img = document.createElement("img");
    var resultado = selecionar('resultado');

    img.src = URL.createObjectURL(arquivoSelecionado);
    resultado.innerHTML = '';
    resultado.appendChild(img);
})