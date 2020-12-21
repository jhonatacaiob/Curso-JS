function enviar(){ 
    var resposta = document.getElementById("res");
    var valorDoSaque = document.getElementById("numero").value


    var numeroDeNotas = Math.floor(valorDoSaque / 200)
    if(numeroDeNotas != 0){
        resposta.innerHTML +=  `Numero de notas de 200: ${numeroDeNotas}</br>`
    }
    valorDoSaque %= 200;
    if(valorDoSaque <= 1){
        valorDoSaque += 200
    }


    numeroDeNotas = Math.floor(valorDoSaque / 100)
    if(numeroDeNotas != 0){
        resposta.innerHTML += `Numero de notas de 100: ${numeroDeNotas}</br>`
    }
    valorDoSaque %= 100;
    if(valorDoSaque <= 1){
        valorDoSaque += 100
    }
    

    numeroDeNotas = Math.floor(valorDoSaque / 50)
    if(numeroDeNotas != 0){
        resposta.innerHTML += `Numero de notas de 50: ${numeroDeNotas}</br>`
    }
    valorDoSaque %= 50;
    if(valorDoSaque <= 1){
        valorDoSaque += 50
    }
    

    numeroDeNotas = Math.floor(valorDoSaque / 20)
    if(numeroDeNotas != 0){
        resposta.innerHTML += `Numero de notas de 20: ${numeroDeNotas}</br>`
    }
    valorDoSaque %= 20;
    if(valorDoSaque <= 1){
        valorDoSaque += 20
    }
    

    numeroDeNotas = Math.floor(valorDoSaque / 10)
    if(numeroDeNotas != 0){
        resposta.innerHTML += `Numero de notas de 10: ${numeroDeNotas}</br>`
    }
    valorDoSaque %= 10;
    if(valorDoSaque <= 1){
        valorDoSaque += 10
    }
    

    numeroDeNotas = Math.floor(valorDoSaque / 5)
    if(numeroDeNotas != 0){
        resposta.innerHTML += `Numero de notas de 5: ${numeroDeNotas}</br>`
    }
    valorDoSaque %= 5;
    if(valorDoSaque <= 1){
        valorDoSaque += 5
    }
    

    numeroDeNotas = Math.floor(valorDoSaque / 2)
    if(numeroDeNotas != 0){
        resposta.innerHTML += `Numero de notas de 2: ${numeroDeNotas}</br>`
    }
    valorDoSaque %= 2;
    if(valorDoSaque <= 1){
        valorDoSaque += 2
    }
    console.log(resposta)
}
