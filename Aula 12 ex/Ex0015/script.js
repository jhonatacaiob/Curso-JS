function verificar(){
    var ano = document.getElementById("txtano").value
    var rSex = document.getElementsByName("radsex")
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - ano
    var resposta = document.getElementById('res')
    
    if(idade >= 0 && idade.length != 0){
        var nome_foto = ""
        var genero = ""
        var sSex = ""
        var contin = true
        if(rSex[0].checked){
            sSex = "M"
            genero = "masculino"
        }else if(rSex[1].checked){
            genero = "feminino"
            sSex = "F"
        }else{
            alert("Marque algum botao")
            contin = false
        }
        var fase = ""
        if(contin){
           if(idade< 12){
                fase = "crianca" 
                nome_foto = `foto-${fase}-${sSex}.jpg`            
            }else if(idade <30){
                fase = "jovem" 
                nome_foto = `foto-${fase}-${sSex}.jpg`
            }else if(idade<65){
                fase = "adulto" 
                nome_foto = `foto-${fase}-${sSex}.jpg`
            }
            else{
                fase = "idoso" 
                nome_foto = `foto-${fase}-${sSex}.jpg`
            }
            resposta.innerHTML = `${idade} anos<br/>`
            resposta.innerHTML += `Detectamos genero ${genero} na fase ${fase}`
            var img = document.createElement('img')
            img.setAttribute('src',nome_foto)
            res.appendChild(img)
            img.style.width = '250px'
        }
    }else{
        alert("Algo errado com sua idade")
    }
}
