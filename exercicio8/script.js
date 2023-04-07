// O operador % retorna o resto da divisão inteira entre dois números
let valorA = document.getElementById("valorA");
let valorB = document.getElementById("valorB");

function calcular(){
    let resto = valorA.value % valorB.value;
    alert("O resto é " + resto);
    console.log(resto)
    document.write(`O resto entre os números ${valorA.value} e ${valorB.value} é ${resto}<br><br> `)
};

//Operador % usado para verificar se é par ou ímpar
let numero = document.getElementById("numero");

function avaliar(){
    if (numero.value % 2 == 0){
        alert("É um número par");
        console.log(numero.value)
        document.write(`${numero.value} é um número par`);
    } else {
        alert("É um número ímpar");
        console.log(numero.value);
        document.write(`${numero.value} é um número ímpar`);
    }
};
