let user = document.getElementById("user");
let password = document.getElementById("password");

function logar(){
    if(user.value == "admin" && password.value == 1234){
        alert("BEM VINDO!")
    } else{
        alert("USUÁRIO INVÁLIDO")
    }
};