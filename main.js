const form = document.getElementById('agenda');
const nomeAgenda = [];
const numeroAgenda = [];

let linhas=''; 
form.addEventListener('submit', function(e){
e.preventDefault();
adicionaLinha();
atualizaTabela();

})
function adicionaLinha (){
const inputAgendaNome = document.getElementById('contato');
const inputAgendaNumero = document.getElementById('telefone');

if (nomeAgenda.includes(inputAgendaNome.value)){
    alert(`o Contato ${inputAgendaNumero.value} ja foi inserido na tabela` )
}

else{
nomeAgenda.push(inputAgendaNome.value);
numeroAgenda.push(parseInt(inputAgendaNumero.value));

let linha = '<tr>';
linha += `<td> ${inputAgendaNome.value}</td>`;
linha += `<td> ${inputAgendaNumero.value}</td>`;
linha += '</tr>'

linhas += linha;

inputAgendaNome.value = '';
inputAgendaNumero.value = '';
}}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal (){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML =  mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal (){
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}

