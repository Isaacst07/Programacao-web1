function q(seletor){
    return document.querySelector(seletor);
}

function qall(seletor){
    return document.querySelectorAll(seletor);
}

let botao1 = q('#botao1');


botao1.addEventListener('click', () => {
    let p1 = q('#p1');
    let resultado1 = q('#resultado1');
    resultado1.innerHTML = p1.innerText;
    resultado1.innerHTML += p1.innerHTML;
    resultado1.innerHTML += p1.textContent;
});

let botao2 = q('#botao2');

botao2.addEventListener('click', () => {
    let links = qall('a');
    let resultado2 = q('#resultado2'); // document.getElementsByTagName
    resultado2.innerHTML = '';

    for (link of links){
        resultado2.innerHTML += link.href + '<br>'
    }
});

let botao3 = q('#botao3');
let i = 1;

botao3.addEventListener('click', () => {
    let resultado3 = q('#resultado3');
    let p = document.createElement('p');
    p.innerText = 'Parágrafo ' + i;
    p.id = 'p' + i;
    i++;
    resultado3.appendChild(p);
});

let botao4 = q('#botao4');

botao4.addEventListener('click', () => {
    let id = q('#inputExcluir').value;
    let resultado3 = q('#resultado3');
    let p = q('#' + id);

    resultado3.removeChild(p);
});