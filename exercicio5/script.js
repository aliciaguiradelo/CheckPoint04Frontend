//Criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6. Exemplifique e demonstre a saída! 
let nota1 = 7.5;
let nota2 = 6;
let nota3 = 8;
let nota4 = 10;
let nota5 = 6.5;
let nota6 = 8;
let nota7 = 9;

function calcularMedia(nota1, nota2, nota3, nota4, nota5, nota6, nota7) {
  let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

  if (media >= 6) {
    console.log(`O aluno foi aprovado com média ${media.toFixed(1)}.`);
  } else {
    console.log(`O aluno foi reprovado com média ${media.toFixed(1)}.`);
  }
}

calcularMedia(nota1, nota2, nota3, nota4, nota5, nota6, nota7);