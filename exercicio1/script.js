//Criar um objeto escola e com os atributos curso, aluno, professor, turma, período coloque os valores dos atributos

const escola = [
    {curso:"ADS", aluno:"Alícia", professor:"Wellington", turma:"TDSPR", periodo:"noturno"},
    {curso:"Veterinária", aluno:"Amanda", professor:"Winderson", turma:"GMV", periodo:"integral"},
    {curso:"Gestão de TI", aluno:"Guilherme", professor:"Wesley", turma:"TGTI", periodo:"noturno"}
]

//A) Método tela aluno estudando e apresente na tela
function telaAlunoEstudando (escola){
    document.write(`ALUNOS:<br>`)
    escola.forEach(element => document.write(`Curso: ${element.curso}<br>
    Aluno: ${element.aluno}<br>
    Professor: ${element.professor}<br>
    Turma: ${element.turma}<br>
    Período: ${element.periodo}<br><br>`))
    escola.forEach(element => console.log(escola))
}

telaAlunoEstudando (escola)