var formEl = document.getElementById("meuForm");


//CHAMA A FUNÇÃO DE CAPTURA_EVENTOS
captura_eventos(formEl, 'submit', formValid);

//FUNÇÃO PAR CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao){
    //Teste addEventListener
    if(objeto.addEventListener){
        objeto.addEventListener(evento, funcao, true)
    }
    //Teste attachEvent
    else if(objeto.attachEvent){
        var evento= 'on' + evento
        objeto.attachEvent(evento, funcao)
    }

}
    //Função cancelar evento
    function cancelar_evento(evento){
        if(event.preventDefault){
            event.preventDefault()
        }else{
            window.event.returnValue = false;
        }
    }

    //função de verifica os campos radio e checkbox
    function verificaCampos(campo){
        //variavel que verifica os radios
        var checados = false;
        for(var i=0;i<campo.length; i++){
            if(campo[i].checked){
                checados = true
            }
        }
        if(!checados){
            alert("Marque o campo" + campo[0].name)
        }
    }

    function formValid(evento){
        var campoNome = formEl.textname.value,
            campoCidade = formEl.cidades,
            campoRadios = formEl.sexo,
            campoCheckbox = formEl.rede;

        //VERIFICA O CAMPO DE TEXTO
        if(campoNome.length==0){
            alert("O campo Nome é obrigatorio.");
            return false
        }

        //LAÇO QUE PERCORRE TODAS AS OPÇÕES
        for(var i=0;i<campoCidade.length; i++){
            if(campoCidade[i].selected){
                if(campoCidade[i].value == ""){
                    alert("Selecione uma opção!")
                    cancelar_evento(evento);
                }
            }
        }
    }

//CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O RADIO
verificaCampos(campoRadios);

//CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O CHECKBOX
verificaCampos(campoCheckbox);
alert("O formulario será enviado");
