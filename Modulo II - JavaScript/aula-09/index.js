function escreverMensagem () {
    const textoDigitado = document.getElementById('nome').value //cria a variavel textoDigitado e pega o valor digitado no input nome
    const bemVinda = document.getElementById('bemVinda').innerHTML //cria a variavel bemVinda e selecina o innerHTML do paragrafo com a id vemVinda
    console.log(bemVinda.length)
    if (bemVinda.split(':')[1].length > 1) { // divide o paragrafo bemVinda a partir dos dois pontos, separando eles em dois elementos de uma array
        document.getElementById('bemVinda').innerHTML = `Bem-vinda: ${textoDigitado}`
    } else {
        document.getElementById('bemVinda').innerHTML += textoDigitado // isso garante que o texto no paragrafo la do html nao seja substituido, ao inves disso voces acrescente o texto digitado a ele
    }
}

function addAluna () {
    const aluna = document.getElementById('aluna').value
    document.getElementById('lista').innerHTML += `<p>${aluna}</p>`
}


