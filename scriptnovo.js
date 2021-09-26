function Cadastrar () {
    var nome = document.getElementById('idNome');
    var cpf = document.getElementById('idCpf');
    var uf = document.getElementById('uf');
    var cidade = document.getElementById('idCidade');
    var rua = document.getElementById('idRua');
    var celular = document.getElementById('idCelular');
    var telefone = document.getElementById('idTelefone');
    var nu = document.getElementById('idNu');
    

    if(nome.value.length < 7){
        alert('Obrigatório informar o nome completo!!');
        nome.focus();
        return false;
    }
    
    else if(cpf.value.length < 11) {
        alert('Obrigatório informar o CPF!!');
        cpf.focus();
        return false;
    }

    else if(uf.selectedIndex == 0){
        alert('Obrigatório informar o Estado!!');
        uf.focus();
        return false;
    }

    else if(cidade.value.length < 2) {
        alert('Obrigatório informar a Cidade!!');
        cidade.focus();
        return false;
    }

    else if(rua.value.length < 2) {
        alert('Obrigatório informar o nome da rua!!');
        rua.focus();
        return false;
    }

    else if(nu.value.length < 1) {
        alert('Obrigatório informar o número da residência!!');
        nu.focus();
        return false;
    }

    else if(celular.value.length < 11) {
        alert('Obrigatório informar o número do celular!!');
        celular.focus();
        return false;
    }

    else if(telefone.value.length < 10) {
        alert('Obrigatório informar o telefone residencial!!');
        telefone.focus();
        return false;
    }

    
        

}



