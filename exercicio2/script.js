const funcionarios = [
    {nome:'Alicia',idade:22,sexo:"F",cargo:"Tecnica em suporte Protheus", salario:3280, descontos:500, dataAdmissao:2013, dataDemissao:2020},
    {nome:'Guilherme',idade:21,sexo:"M",cargo:"Analista", salario:5280, descontos:800, dataAdmissao:2021, dataDemissao:2023},
    {nome:'Giovana',idade:35,sexo:"F",cargo:"Agile Coach", salario:15280, descontos:1500, dataAdmissao:2003, dataDemissao:2021},
    {nome:'Gisele',idade:50,sexo:"F",cargo:"Scrum Master", salario:25000, descontos:2500, dataAdmissao:1999, dataDemissao:2017}
]
//A)Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010 
const dataAdmissao = funcionarios.filter(funcionario => (funcionario.dataAdmissao >= 2000) && (funcionario.dataAdmissao <= 2010));
console.log(dataAdmissao);
document.write(`Funcionários admitidos entre 2000 e 2010: <br>`)
dataAdmissao.forEach(funcionario => {
    document.write(` ${funcionario.nome} <br>`);
});

//B)Fazer um filter de funcionários que foram demitidos depois de 2018 
const dataDemissao = funcionarios.filter(funcionario => (funcionario.dataDemissao > 2018));
console.log(dataDemissao);
document.write(`Funcionários admitidos entre 2000 e 2010: <br>`)
dataDemissao.forEach(funcionario => {
    document.write(` ${funcionario.nome} <br>`);
});

//C)Fazer um map de funcionários e trazer o nome, salário, desconto 
const exibeInfo = funcionarios.map(funcionario => `<br>${funcionario.nome} ` + `ganha um salário de ` + `${funcionario.salario}` + ` e tem um desconto de ` + `${funcionario.descontos}`);
console.log(exibeInfo)
document.write(exibeInfo)

//D)Criar um Reduce para somar o valor total dos descontos
const totalDescontos = funcionarios.reduce((resultado,valorTotal) => {
    return (resultado + valorTotal.descontos)
}, 0)
console.log(totalDescontos)