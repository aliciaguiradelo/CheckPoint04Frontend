idade = document.getElementById("age")

function calcular(){
    if (idade.value<=12){
        alert("Criança")
        console.log(idade.value)
    } else if (idade.value>=13 && idade.value<=18){
        alert("Adolescente")
        console.log(idade.value)
    } else if (idade.value>=19 && idade.value<=60){
        alert("Adulto")
    } else if (idade.value>=60 && idade.value<=120){
        alert("Idoso")
        console.log(idade.value)
    } else {
        alert("Valor inválido")
        console.log(idade.value)
    }
}