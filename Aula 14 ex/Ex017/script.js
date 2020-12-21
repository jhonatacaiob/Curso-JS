function gerar_tabuada(){
    var campo1 = document.getElementById("texto1")
    var seletor = document.getElementById("select")
    if(campo1.value.length == 0){
        alert("Digite um numero para que a tabuada dele seja mostrada")
    }else{
        seletor.innerHTML = ""
        document.getElementById('legenda').innerHTML = `Tabuada do ${campo1.value}`
        for (var i = 0; i < 10; i++) {
            numero = i + 1
            
            var option = document.createElement("option")
            option.setAttribute("value", `Valor${numero}`)
            option.innerHTML = `${campo1.value} * ${numero} = ${campo1.value * numero}`
            seletor.appendChild(option)
        }
    }



    
}