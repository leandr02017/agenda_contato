const form = document.getElementById('form-contato');
const telefone = [];
const nome = [];
let linhas = "";

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarLinha();
});

function adicionarLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    const telefoneFormatado = inputTelefone.value.trim(); 

    if(telefone.includes(telefoneFormatado)){
        alert(`Seu telefone já foi cadastrado! Verifique se já está na lista ou insira outro número!`);
    } else {
        nome.push(inputNome.value);
        telefone.push(telefoneFormatado); 

        let linha = "<tr>";   
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${telefoneFormatado}</td>`;
        linha += `<td>Aprovado✅</td>`;
        linha += `</tr>`;

        linhas += linha;

        console.log(telefone);
    }

    inputNome.value = "";
    inputTelefone.value = "";
}

function atualizarLinha(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
