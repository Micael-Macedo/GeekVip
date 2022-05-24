document.getElementById('btnCadastrar').disabled = true;

function pegarNome(nome, checkboxNome){
    Usuario = document.getElementById(nome).value;
    if(Usuario != ""){
        
        document.getElementById(checkboxNome).innerHTML = Usuario;   
    }
}

function verificarSubmit(){
    nome = document.getElementById('name').value;
    Usuario = document.getElementById('nomeUsuario').value;
    confirma = document.getElementById('termoDeUso');
    if(confirma.checked && nome != ""){
        document.getElementById('btnCadastrar').disabled = false;
    }else
        document.getElementById('btnCadastrar').disabled = true;
}


function cadastrar(nomeUsuario){
    Usuario = document.getElementById(nomeUsuario).value;
    window.alert("Cadastro realizado com sucesso, seja bem vindo "+ Usuario);
}