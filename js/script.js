function pegarNome(nome, checkboxNome){
    Usuario = document.getElementById(nome).value;
    if(Usuario != ""){
        document.getElementById(checkboxNome).innerHTML = Usuario;
        
    }


}



function verificarSubmit(NomeCheckbox, confirmarCheck){
    Usuario = document.getElementById(NomeCheckbox).value
    confirma = document.getElementById(confirmarCheck).value
    button = document.querySelector("confirma");
    if(confirma == 'on'){
        button.disable = false;
    }
    
    
    /*
    if(NomeCheckbox != "" && confirma == 'on'){
        document.getElementById(submit).disable = false;
    }else{
        document.getElementById(submit).disable = true;
    }
    */
}