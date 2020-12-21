function carregar(){
    var campo1 = document.getElementById("campo1")
    var campo2 = document.getElementById("campo2")
    var campo3 = document.getElementById("campo3")
    var res = document.getElementById("res")


  
    if (campo1.value.length != 0 && campo2.value.length != 0 && campo3.value.length != 0) {
        if(campo3.value == 0){
            alert("Valor invalido, considerarei como 1")
            campo3.value = 1
        }
        res.innerHTML = "Contando: "
        if(campo3.value < 0){
            for(var i = Number(Math.max(campo2.value, campo1.value)); i > Number(Math.min(campo2.value, campo1.value)); i += Number(campo3.value)){
                res.innerHTML += `${i}->`
            }
            res.innerHTML += Number(Math.min(campo2.value, campo1.value))

        }else{
            for(var i = Number(Math.min(campo2.value, campo1.value)); i < Number(Math.max(campo2.value, campo1.value)); i += Number(campo3.value)){
                res.innerHTML += `${i}->`
            }
            res.innerHTML += Number(Math.max(campo2.value, campo1.value))


        }
        

    }else{
        res.innerHTML = 'Impossivel contar'
    }

}