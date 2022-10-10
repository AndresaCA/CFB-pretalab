let nome = 'Andresa'

fetch('https://cep.awesomeapi.com.br/12212780').then(resposta => resposta.json()).then(dados => console.log('Rua: ' + dados.address))

fetch('https://cep.awesomeapi.com.br/12212780').then(resposta => resposta.json()).then(dados => console.log('Bairro: ' + dados.district))

fetch('https://cep.awesomeapi.com.br/12212780').then(resposta => resposta.json()).then(dados => console.log('Cidade: ' + dados.city))

fetch('https://cep.awesomeapi.com.br/12212780').then(resposta => resposta.json()).then(dados => console.log('Estado: ' + dados.state))

console.log('Nome: ' + nome)

document.getElementById('aula').innerHTML = 'Trabalhando com o DOM no JS'

const novaDiv = document.createElement('div')
novaDiv.innerHTML = 'Div criada com o DOM'
document.getElementById('aula').appendChild(novaDiv)

