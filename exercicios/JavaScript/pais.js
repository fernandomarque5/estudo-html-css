function alerta(){ //comando de alerta
    return window.alert("Você clicou no alerta, parabéns !")
}
function cor_fundo(){//comando para mudar cor
    return document.body.style.backgroundColor = "blue";
}

document.querySelector("div#evento_mouse")
function mouseenter(){
    return document.querySelector("div#evento_mouse")
    .innerHTML = ("O Mouse esta <br> dentro da caixa <br>parabéns")
    
}
function mousesaiu(){
    return document.querySelector("div#evento_mouse")
    .innerHTML = ("Você tirou o Mouse");
}
function clicou_na_caixa(){
    return document.querySelector("div#evento_mouse")
    .innerHTML = 'Você clicou';
}

function mouse_sobre(){
    var cor = document.querySelector("div#evento_mouse")
    return cor.style.backgroundColor = "green"
}
function mouse_saiu(){
    var mouse_saiu = document.getElementById("evento_mouse")
    return mouse_saiu.style.backgroundColor = "blue"
}



function verificar(){
    var texto = document.getElementById("caixa").value;
    var p = document.getElementById("p1")

    if(texto == "" || texto == null){
        p.innerHTML = ("o campo esta vazio")
    }
    else{ 
        p.innerHTML = ("parabens, vc digitou algo")
    }

}




    

