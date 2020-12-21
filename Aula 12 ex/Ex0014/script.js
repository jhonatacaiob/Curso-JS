function carregar(){
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora < 12){
        mensagem.innerHTML = "Bom dia"
        imagem.src = "fotomanha.jpg"
        document.body.style.backgroundColor = "rgb(255,231,87)"
    }else if(hora < 18){
        mensagem.innerHTML = "Boa tarde"
        imagem.src = "fototarde.jpg"
        document.body.style.backgroundColor = "rgb(210, 135, 80)"
    }else{
        mensagem.innerHTML = "Boa noite"
        imagem.src = "fotonoite.jpg"
        document.body.style.backgroundColor = "rgb(73, 57, 84)"
    }

}