function getByID(id) {
    return document.getElementById(id);
}

let botaoConsultar = getByID('botaoConsultar');
let botaoInverter  = getByID('botaoInverter');
let botaoLimpar    = getByID('botaoLimpar');

botaoConsultar.addEventListener('click', consultarPreco);
botaoInverter.addEventListener('click', inverterMoedas);
botaoLimpar.addEventListener('click', limparCampos);

async function consultarPreco() {
    let moedaBase      = getByID('moedaBase').value.trim().toUpperCase();
    let moedaConversao = getByID('moedaConversao').value.trim().toUpperCase();
    let resultado      = getByID('resultado');

    // Validação de campos vazios
    if (!moedaBase || !moedaConversao) {
        resultado.className = 'erro';
        resultado.innerHTML = '<p>Preencha os campos <strong>Moeda Base</strong> e <strong>Moeda Conversão</strong> antes de consultar.</p>';
        return;
    }

    let symbol = moedaBase + moedaConversao;

    // data-api.binance.vision é o endpoint público oficial da Binance,
    // sem restrições de CORS mesmo em ambiente local (file://)
    let url = `https://data-api.binance.vision/api/v3/ticker/price?symbol=${symbol}`;

    try {
        let response = await fetch(url);

        // Verifica se a resposta foi recebida corretamente
        if (!response.ok) {
            resultado.className = 'erro';
            resultado.innerHTML = `<p>Par de moedas <strong>${symbol}</strong> não encontrado na Binance. Verifique os valores informados.</p>`;
            return;
        }

        let data  = await response.json();
        let preco = parseFloat(data.price);

        // Formata no padrão xxx.xxx.xxx,xx (locale pt-BR)
        let precoFormatado = preco.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        });

        resultado.className = 'sucesso';
        resultado.innerHTML = `
            <p><strong>Par:</strong> ${data.symbol}</p>
            <p><strong>Preço:</strong> 1 ${moedaBase} = ${precoFormatado} ${moedaConversao}</p>
        `;
    } catch (error) {
        resultado.className = 'erro';
        resultado.innerHTML = `
            <p><strong>Erro na requisição:</strong> ${error.message}</p>
            <p style="margin-top:8px;font-size:0.9em">
                Abra o arquivo via servidor local (ex: extensão <em>Live Server</em> no VS Code)
                para evitar bloqueios do navegador em requisições externas.
            </p>
        `;
    }
}

function inverterMoedas() {
    let campoBase      = getByID('moedaBase');
    let campoConversao = getByID('moedaConversao');
    let temp           = campoBase.value;
    campoBase.value      = campoConversao.value;
    campoConversao.value = temp;
}

function limparCampos() {
    getByID('moedaBase').value      = '';
    getByID('moedaConversao').value = '';
    let resultado       = getByID('resultado');
    resultado.className = '';
    resultado.innerHTML = '';
}
