function getByID(id) {
    return document.getElementById(id);
}

// ============================================================
// API 1 — PokeAPI (https://pokeapi.co)
// ============================================================

getByID('botaoBuscarPokemon').addEventListener('click', buscarPokemon);
getByID('nomePokemon').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') buscarPokemon();
});

async function buscarPokemon() {
    let input     = getByID('nomePokemon').value.trim().toLowerCase();
    let resultado = getByID('resultadoPokemon');

    if (!input) {
        resultado.innerHTML = '<div class="mensagem-erro">Digite o nome ou número de um Pokémon antes de buscar.</div>';
        return;
    }

    resultado.innerHTML = '<div class="mensagem-carregando">Buscando Pokémon...</div>';

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if (!response.ok) {
            resultado.innerHTML = `<div class="mensagem-erro">Pokémon "<strong>${input}</strong>" não encontrado. Verifique o nome ou número e tente novamente.</div>`;
            return;
        }

        let data = await response.json();
        resultado.innerHTML = renderPokemon(data);
    } catch (error) {
        resultado.innerHTML = `<div class="mensagem-erro">Erro na requisição: ${error.message}</div>`;
    }
}

const tipoCores = {
    fire: '#F08030', water: '#6890F0', grass: '#78C850', electric: '#F8D030',
    ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0', ground: '#E0C068',
    flying: '#A890F0', psychic: '#F85888', bug: '#A8B820', rock: '#B8A038',
    ghost: '#705898', dragon: '#7038F8', dark: '#705848', steel: '#B8B8D0',
    fairy: '#EE99AC', normal: '#A8A878'
};

function getCorStat(valor) {
    if (valor >= 100) return '#48bb78';
    if (valor >= 60)  return '#ecc94b';
    return '#fc8181';
}

function renderPokemon(data) {
    let tipos = data.types.map(function (t) {
        let cor = tipoCores[t.type.name] || '#a0aec0';
        return `<span class="tipo" style="background:${cor}">${t.type.name}</span>`;
    }).join('');

    let habilidades = data.abilities.map(function (a) {
        return a.ability.name.replace(/-/g, ' ');
    }).join(', ');

    let stats = data.stats.map(function (s) {
        let porcentagem = Math.min((s.base_stat / 255) * 100, 100).toFixed(1);
        let cor         = getCorStat(s.base_stat);
        let nomeStat    = s.stat.name.replace(/-/g, ' ').replace('special', 'sp.');
        return `
            <div class="stat-linha">
                <span class="stat-nome">${nomeStat}</span>
                <div class="stat-fundo">
                    <div class="stat-barra" style="width:${porcentagem}%;background:${cor}"></div>
                </div>
                <span class="stat-valor">${s.base_stat}</span>
            </div>`;
    }).join('');

    let imagem = (data.sprites.other && data.sprites.other['official-artwork'] && data.sprites.other['official-artwork'].front_default)
        ? data.sprites.other['official-artwork'].front_default
        : data.sprites.front_default;

    return `
        <div class="pokemon-card">
            <img src="${imagem}" alt="${data.name}">
            <h3>${data.name}</h3>
            <div class="pokemon-numero">#${String(data.id).padStart(3, '0')}</div>
            <div class="tipos">${tipos}</div>
            <div class="info-grid">
                <div class="info-item">
                    <span class="label">Altura</span>
                    <span class="valor">${(data.height / 10).toFixed(1)} m</span>
                </div>
                <div class="info-item">
                    <span class="label">Peso</span>
                    <span class="valor">${(data.weight / 10).toFixed(1)} kg</span>
                </div>
                <div class="info-item" style="grid-column: span 2">
                    <span class="label">Habilidades</span>
                    <span class="valor">${habilidades}</span>
                </div>
            </div>
            <div class="stats-titulo">Estatísticas Base</div>
            ${stats}
        </div>`;
}

// ============================================================
// API 2 — TheMealDB (https://www.themealdb.com)
// ============================================================

getByID('botaoBuscarReceita').addEventListener('click', buscarReceita);
getByID('nomeReceita').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') buscarReceita();
});

async function buscarReceita() {
    let input     = getByID('nomeReceita').value.trim();
    let resultado = getByID('resultadoReceita');

    if (!input) {
        resultado.innerHTML = '<div class="mensagem-erro">Digite o nome de um prato antes de buscar.</div>';
        return;
    }

    resultado.innerHTML = '<div class="mensagem-carregando">Buscando receitas...</div>';

    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(input)}`);

        if (!response.ok) {
            resultado.innerHTML = '<div class="mensagem-erro">Erro ao conectar com a API de receitas.</div>';
            return;
        }

        let data = await response.json();

        if (!data.meals) {
            resultado.innerHTML = `<div class="mensagem-erro">Nenhuma receita encontrada para "<strong>${input}</strong>".</div>`;
            return;
        }

        let refeicoes = data.meals.slice(0, 3);
        resultado.innerHTML = `<div class="multiplos-resultados">${refeicoes.map(renderReceita).join('')}</div>`;
    } catch (error) {
        resultado.innerHTML = `<div class="mensagem-erro">Erro na requisição: ${error.message}</div>`;
    }
}

function renderReceita(meal) {
    let ingredientes = [];
    for (let i = 1; i <= 20; i++) {
        let ingrediente = meal['strIngredient' + i];
        let medida      = meal['strMeasure' + i];
        if (ingrediente && ingrediente.trim()) {
            let texto = medida && medida.trim() ? medida.trim() + ' ' + ingrediente.trim() : ingrediente.trim();
            ingredientes.push(`<span class="ingrediente">${texto}</span>`);
        }
    }

    let instrucoes = meal.strInstructions
        ? meal.strInstructions.trim()
        : 'Instruções não disponíveis.';

    let youtubeLink = meal.strYoutube
        ? `<a href="${meal.strYoutube}" target="_blank" class="meal-link">&#9654; Ver no YouTube</a>`
        : '';

    return `
        <div class="meal-card">
            <img class="meal-imagem" src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="meal-info">
                <h3>${meal.strMeal}</h3>
                <div class="meal-tags">
                    ${meal.strCategory ? `<span class="meal-tag">${meal.strCategory}</span>` : ''}
                    ${meal.strArea     ? `<span class="meal-tag">${meal.strArea}</span>`     : ''}
                </div>
                <div class="meal-ingredientes">
                    <h4>Ingredientes</h4>
                    <div class="ingredientes-lista">${ingredientes.join('')}</div>
                </div>
                <div class="meal-instrucoes">
                    <h4>Modo de Preparo</h4>
                    <div class="instrucoes-texto">${instrucoes}</div>
                </div>
                ${youtubeLink}
            </div>
        </div>`;
}
