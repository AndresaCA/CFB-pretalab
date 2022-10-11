let id = 0 // id setado como nulo

// Forma reduzida usando template string
const tarefa = (id) => `<div id='${id}'>
<p>Tarefa<p/>
<input type= "checkbox"/>
</div>`

function addTarefa () {
    id ++ // vai adicionando mais ids
    document.querySelector('#listaTarefas').innerHTML += tarefa(id) //seleciona a div com id "listaTarefas" e adiciona como filha de tarefa (idTarefa)
}

// Forma extensiva
/*function addTarefa () {
    id ++ // vai adicionando mais ids

    const tarefa = document.createElement('div') // cria um elemento div
    const nomeTarefa = document.createElement('p') // cria um elemento p
    const checkbox = document.createElement('input') // cria um elemento input

    nomeTarefa.innerHTML = 'Tarefa' // Vai escrever o texto tarefa
    checkbox.type = 'checkbox' // define o input checkbox como checkbox
    tarefa.id = id //cria um id para o elemento div

    tarefa.appendChild(nomeTarefa) // adiciona o paragrafo com a id nomeTarefa na div tarefa
    tarefa.appendChild(checkbox) //adiciona o checkbox como filha de tarefa 
    document.querySelector('#listaTarefas').appendChild(tarefa) //seleciona a div com id "listaTarefas" e adiciona como filha de tarefa (idTarefa)
} */