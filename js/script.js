document.getElementById('btnCadastrar').disabled = true;

function pegarNome(nome, checkboxNome){
    Usuario = document.getElementById(nome).value;
    if(Usuario != ""){
        
        document.getElementById(checkboxNome).innerHTML = Usuario;   
    }
}

function verificarSubmit(nomeUsuario, NomeCheckbox, confirmarCheck){
    nome = document.getElementById(nomeUsuario).value;
    Usuario = document.getElementById(NomeCheckbox).value;
    confirma = document.getElementById(confirmarCheck).value;
    
    if(confirma == "on" && nome != ""){
        document.getElementById('btnCadastrar').disabled = false;
    }
}

function cadastrar(nomeUsuario){
    Usuario = document.getElementById(nomeUsuario).value;
    window.alert("Cadastro realizado com sucesso, seja bem vindo "+ Usuario);
}