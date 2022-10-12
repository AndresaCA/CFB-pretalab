function escreverMensagem () {
    const textoDigitado = document.getElementById('nome').value //cria a variavel textoDigitado e pega o valor digitado no input nome
    const bemVinda = document.getElementById('bemVinda').innerHTML //cria a variavel bemVinda
    console.log(bemVinda)
    if (bemVinda.split(':')[1].length > 1) {
        console.log(bemVinda.split(':'))
        document.getElementById('bemVinda').innerHTML = `Bem-vinda: ${textoDigitado}`
    } else {
        document.getElementById('bemVinda').innerHTML += textoDigitado
    }
}

function addAluna () {
    const aluna = document.getElementById('aluna').value
    document.getElementById('lista').innerHTML += `<p>${aluna}</p>`
}


