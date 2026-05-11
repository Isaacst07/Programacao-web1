function selecionar(id) {
    return document.querySelector('#' + id);
}

var select = selecionar('selecaoImagens');

select.addEventListener('change', function() {
    var imagem = select.value;
    var resultado = selecionar('resultado');

    if (imagem !== '') {
        var img = document.createElement('img');
        img.src = imagem
        resultado.innerHTML = '';

        img.style.maxWidth = "50rem";
        img.style.display = "block";
        img.style.marginTop = "20px";

        resultado.appendChild(img)
    }
});