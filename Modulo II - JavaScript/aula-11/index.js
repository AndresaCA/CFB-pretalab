function addAluna() {
    let valorAluna = document.getElementById('nome') // seleciona o input com id name e armazena na var valorAluna
    let idade = document.getElementById('idade')
    let div = document.querySelector('div') // seleciona a div a armazena na var div
    let lista = document.createElement('ul') // cria uma ul e armazena na var lista
    let listaItem = document.createElement('li') // cria um li e armazena na var listaItem
    div.append(lista) // adiciona a ul a div
    lista.append(listaItem) //adiciona o li a ul
    listaItem.append(`Nome: ${valorAluna.value} Idade: ${idade.value} anos`) // adiciona o valor digitado no input ao li
    
    
}

