function getById(id: string): HTMLElement | null {
    return document.getElementById(id);
}

function getByTag(tag: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(tag);
}

const botao1 = getById('botao1') as HTMLButtonElement;
const resultado1 = getById('resultado1') as HTMLElement;

botao1.addEventListener('click', (): void => {
    const nome1 = (getById('nome1') as HTMLInputElement).value;
    resultado1.innerText = `Olá ${nome1}. Bem-vindo ao site de introdução a DOM!` || 'Bem-vindo ao site de introdução a DOM';
});

const paragrafos = getByTag('p') as HTMLCollectionOf<HTMLParagraphElement>;

paragrafos[0].style.color = "blue";
paragrafos[1].style.color = "red";
paragrafos[2].style.color = "black";

const divinput = getById("divinput") as HTMLDivElement;
const paragrafosdentro = divinput.getElementsByTagName('p') as HTMLCollectionOf<HTMLParagraphElement>;

const divoutput1 = getById("divoutput1") as HTMLElement;
const divoutput2 = getById("divoutput2") as HTMLElement;

divoutput1.innerText = `Dentro dessa Div tem essa quantidade de parágrafos: ${paragrafosdentro.length} - Usando getElementsByTagName`;
divoutput2.innerText = `Dentro dessa div tem essa quantidade de parágrafos: ${document.querySelectorAll("#divinput p").length} - Usando querySelectorAll`;

const p1 = getById("p1") as HTMLParagraphElement;
const resultado51 = getById("resultado5.1") as HTMLElement;
const resultado52 = getById("resultado5.2") as HTMLElement;
const resultado53 = getById("resultado5.3") as HTMLElement;

resultado51.innerText = p1.innerHTML;
resultado52.innerText = p1.textContent || "";
resultado53.innerText = p1.innerText;

const span = getByTag('span') as HTMLCollectionOf<HTMLSpanElement>;

for (let i: number = 0; i < span.length; i++) {
    span[i].style.color = 'red';
}

const botaocor = getById("butaocor") as HTMLButtonElement;

botaocor.addEventListener('click', (): void => {
    const divcor = getById("divcor") as HTMLDivElement;
    divcor.style.color = 'pink';
});

const textonormal = getById('textonormal') as HTMLElement;
const textoupper = getById('textoupper') as HTMLElement;

textoupper.innerText = (textonormal.textContent || "").toUpperCase();

const botaoFundo = getById("mudarFundo") as HTMLButtonElement;
const botaoResetar = getById("resetar") as HTMLButtonElement;

botaoFundo.addEventListener('click', (): void => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

botaoResetar.addEventListener('click', (): void => {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
});

const botaoAumenta = getById('aumentar') as HTMLButtonElement;
const botaoDiminuir = getById('diminuir') as HTMLButtonElement;
let tamanhoAtual: number = 16;

botaoAumenta.addEventListener('click', (): void => {
    tamanhoAtual += 2;
    document.body.style.fontSize = tamanhoAtual + 'px';
});

botaoDiminuir.addEventListener('click', (): void => {
    tamanhoAtual -= 2;
    document.body.style.fontSize = tamanhoAtual + 'px';
});

const btn = getById('btnCalcular') as HTMLButtonElement;
const painelResultado = getById('resultado') as HTMLElement;

btn.addEventListener('click', (): void => {
    const v1: number = parseFloat((getById('n1') as HTMLInputElement).value);
    const v2: number = parseFloat((getById('n2') as HTMLInputElement).value);
    let conta: number | string = 0;

    if ((getById('soma') as HTMLInputElement).checked) {
        conta = v1 + v2;
    } else if ((getById('sub') as HTMLInputElement).checked) {
        conta = v1 - v2;
    } else if ((getById('mult') as HTMLInputElement).checked) {
        conta = v1 * v2;
    } else if ((getById('divi') as HTMLInputElement).checked) {
        if (v2 !== 0) {
            conta = v1 / v2;
        } else {
            conta = "Erro: Divisão por zero!";
        }
    }

    painelResultado.innerText = "Resultado: " + conta;
});

const botao = getById('btnAdicionar') as HTMLButtonElement;
const input = getById('itemTexto') as HTMLInputElement;
const select = getById('minhaLista') as HTMLSelectElement;

botao.addEventListener('click', (): void => {
    const texto: string = input.value;

    if (texto !== "") {
        const novaOpcao: HTMLOptionElement = document.createElement('option');
        novaOpcao.text = texto;
        novaOpcao.value = texto.toLowerCase();
        select.add(novaOpcao);
        input.value = "";
        input.focus();
    }
});














/*function getById(id){
    return document.getElementById(id);
}

function getByTag(tag){
    return document.getElementsByTagName(tag);
}

let botao1 = getById('botao1');
let resultado1 = getById('resultado1');

botao1.addEventListener('click', () => {
    let nome1 = getById('nome1').value;
    resultado1.innerText = `Olá ${nome1}. Bem-vindo ao site de introdução a DOM!` || 'Bem-vindo ao site de introdução a DOM';
});

let paragrafos = getByTag('p');

paragrafos[0].style.color = "blue";

paragrafos[1].style.color = "red";

paragrafos[2].style.color = "black";

let divinput = getById("divinput");

let paragrafosdentro = divinput.getElementsByTagName('p');

let divoutput1 = getById("divoutput1");
let divoutput2 = getById("divoutput2");

divoutput1.innerText = `Dentro dessa Div tem essa quantidade de parágrafos: ${paragrafosdentro.length} - Usando getElementsByTagName`;

divoutput2.innerText = `Dentro dessa div tem essa quantidade de parágrafos: ${document.querySelectorAll("#divinput p").length} - Usando querySelectorAll`;

let p1 = getById("p1");

let resultado51= getById("resultado5.1");
let resultado52= getById("resultado5.2");
let resultado53= getById("resultado5.3");

resultado51.innerText = p1.innerHTML;
resultado52.innerText = p1.textContent;
resultado53.innerText = p1.innerText;

let span = getByTag('span');

for (let i = 0; i < span.length; i++){
    span[i].style.color = 'red';

}

let botaocor = getById("butaocor");

botaocor.addEventListener('click', () => {
    let divcor = getById("divcor");
    divcor.style.color = 'pink';
});

let textonormal = getById('textonormal');
let textoupper = getById('textoupper');

textoupper.innerText = textonormal.textContent.toUpperCase();

let botaoFundo = getById("mudarFundo");
let botaoResetar = getById("resetar");

botaoFundo.addEventListener('click',() => {
    document.body.style.backgroundColor = 'black';
        
    document.body.style.color = 'white';
});

botaoResetar.addEventListener('click', ()=> {
    document.body.style.backgroundColor = '';
            
    document.body.style.color = '';
});

let botaoAumenta = getById('aumentar');
let botaoDiminuir = getById('diminuir');
let tamanhoAtual = 16;

botaoAumenta.addEventListener('click',() => {
   tamanhoAtual += 2; 
    document.body.style.fontSize = tamanhoAtual + 'px';
});

botaoDiminuir.addEventListener('click', ()=> {
   tamanhoAtual -= 2;
    document.body.style.fontSize = tamanhoAtual + 'px';
});

let btn = getById('btnCalcular');
let painelResultado = getById('resultado');

btn.addEventListener('click', () => {
    let v1 = parseFloat(getById('n1').value);
    let v2 = parseFloat(getById('n2').value);
    let conta = 0;

    if (getById('soma').checked) {
        conta = v1 + v2;
    } 
    else if (getById('sub').checked) {
        conta = v1 - v2;
    } 
    else if (getById('mult').checked) {
        conta = v1 * v2;
    } 
    else if (getById('divi').checked) {
        if (v2 !== 0) {
            conta = v1 / v2;
        } else {
            conta = "Erro: Divisão por zero!";
        }
    }

    painelResultado.innerText = "Resultado: " + conta;
});

let botao = getById('btnAdicionar');
let input = getById('itemTexto');
let select = getById('minhaLista');

botao.addEventListener('click', () => {
    let texto = input.value;

    if (texto !== "") {
        let novaOpcao = document.createElement('option');
        
        novaOpcao.text = texto;
        novaOpcao.value = texto.toLowerCase();
        
        select.add(novaOpcao);
        
        input.value = "";
        input.focus();
    }
});*/