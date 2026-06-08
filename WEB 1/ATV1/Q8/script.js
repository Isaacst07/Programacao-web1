const botao = document.createElement('button');
botao.innerText = "Trocar Tema";
document.body.appendChild(botao);


const estilos = ["script1.css", "script2.css", "script3.css"];
let indice = 0;

botao.addEventListener("click", () => {
    const linkTag = document.getElementById("theme-link");
    
    indice = (indice + 1) % estilos.length;
    
    linkTag.setAttribute("href", estilos[indice]);
    
    console.log("Mudou para: " + estilos[indice]);
});