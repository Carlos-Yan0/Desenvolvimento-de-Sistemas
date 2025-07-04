var formEl = document.getElementById("meuForm");

function captura_eventos(objeto, evento, funcao){
    if(objeto.addEventListener){
        objeto.addEventListener(evento, funcao, true)
    } else if(objeto.attachEvent){
        var evento = 'on' + evento
        objeto.attachEvent(evento, funcao)
    }
}

function cancelar_evento(event){
    if(event.preventDefault){
        event.preventDefault()
    } else {
        window.event.returnValue = false;
    }
}

function verificaCampos(campo){
    var checados = false;
    for(var i = 0; i < campo.length; i++){
        if(campo[i].checked){
            checados = true;
        }
    }
    if(!checados){
        alert("Marque o campo " + campo[0].name);
        return false;
    }
    return true;
}

function formValid(event){
    var campoNome = formEl.textname.value,
        campoCidade = formEl.cidades,
        campoRadios = formEl.sexo,
        campoCheckbox = formEl.rede;

    if(campoNome.trim().length == 0){
        alert("O campo Nome é obrigatório.");
        cancelar_evento(event);
        return false;
    }

    if(campoCidade.value.trim() === ""){
        alert("Selecione uma cidade.");
        cancelar_evento(event);
        return false;
    }

    if(!verificaCampos(campoRadios)){
        cancelar_evento(event);
        return false;
    }

    if(!verificaCampos(campoCheckbox)){
        cancelar_evento(event);
        return false;
    }

    alert("O formulário será enviado.");
}

// Espera o DOM carregar para adicionar os eventos
window.onload = function() {
    captura_eventos(formEl, 'submit', formValid);
}
