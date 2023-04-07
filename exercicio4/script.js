//Função tradicional
var contador = 0;

function contarCliques() {
    contador++;
    console.log("Você clicou " + contador + " vezes");
}

document.getElementById("btn").onclick = function() {
contarCliques();
};

//Arrow function
const contarCliquesArrow = () => {
    contador++;
    console.log(`Você clicou ${contador} vezes`);
};

document.getElementById("btnArrow").onclick = () => contarCliquesArrow();