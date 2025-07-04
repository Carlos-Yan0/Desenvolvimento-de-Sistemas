const formFun = document.getElementById("formFuncionarios")

function pegar_evento(objeto, eventoNome, funcao){
        objeto.addEventListener(eventoNome, funcao);
}

function cancela_envio(eventoNome){
    eventoNome.preventDefault();
}

function verificar_campos(campo){
    let checados = false;
    for (i = 0; i < campo.length; i++){
        if (campo[i].checked){
            checados = true;
        }
    }
    if (!checados){
        alert("Preencha o campo "+ campo[0].name);
    }
}

function validar(event){
    let campoNome = formFun.nomeCampo.value,
        campoNum = formFun.numCampo.value,
        campoEmail = formFun.emailCampo.value,
        campoCpf = formFun.cpfCampo.value,
        campoNascimento = formFun.nascimentoCampo,
        campoAdmissao = formFun.admissaoCampo,
        campoCargo = formFun.cargoCampo


        if(campoNome.trim().length == 0){
            alert("Preencha o campo nome!");
            cancela_envio(event);
            return false;
        }
        if(campoEmail.trim().length == 0){
            alert("Preencha o campo email!");
            cancela_envio(event);
            return false;
        }
        if(campoNum.trim().length == 0){
            alert("Preencha o campo numero!");
            cancela_envio(event);
            return false;
        }
        if(campoCpf.trim().length == 0){
            alert("Preencha o campo cpf!");
            cancela_envio(event);
            return false;
        }
        if(!campoNascimento){
            alert("selecione a data de nascimento!");
            cancela_envio(event);
            return false;
        }
        if(!campoAdmissao){
            alert("selecione a data de admissão!");
            cancela_envio(event);
            return false;
        }
        if(!campoCargo){
            alert("selecione um cargo!");
            cancela_envio(event);
            return false;
        }
        alert("O formulario sera enviado")
}

window.onload = function(){
    pegar_evento(formFun, "submit", validar);
}