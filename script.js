

function calcular() {
    let valor = document.getElementById("nascimento").value;
    let dateArray = valor.split("-");
    let anoNascimento = parseInt(dateArray[0]);
    let anoActual = new Date().getFullYear();
    let idade = anoActual - anoNascimento;
    
    document.getElementById("my-div").innerHTML = idade;
}