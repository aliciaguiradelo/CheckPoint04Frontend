//Função tradicional
let A=5
let B=3
let C=4
function soma (A,B,C){
    return (A + B)/C
}
console.log(soma(A, B, C));
document.write(`Resultado da função tradicional: ` + soma(A, B, C) + `<br>`);

//Arrow function
const soma1 = (A,B,C) =>{
    return (A + B)/C
}
console.log(soma1(A, B, C));
document.write(`Resultado da arrow function: ` + soma(A, B, C) + `<br>`);