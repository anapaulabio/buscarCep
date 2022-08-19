'use strict';

const formulario = (endereco) => {
    document.querySelector('#rua').value = endereco.logradouro;
    document.querySelector('#complemento').value = endereco.complemento;
    document.querySelector('#bairro').value = endereco.bairro;
    document.querySelector('#UF').value = endereco.uf;
}



const pesquisarCep = async() => {
    const inputCep = document.querySelector('#cep').value;
    const url = `http://viacep.com.br/ws/${inputCep}/json/`;

 if (inputCep.length == 8){
        const data = await fetch(url);
        const endereco = await data.json();

    if (endereco.hasOwnProperty('erro')) {
        document.getElementById('rua').value = 'Cep não encontrado!!';
    } else {
        formulario(endereco);  
    }
    
 } else {
    document.getElementById('rua').value = 'Cep INCORRETO!!'
 }

}

const inputCep = document.querySelector('#cep').addEventListener('click', pesquisarCep)