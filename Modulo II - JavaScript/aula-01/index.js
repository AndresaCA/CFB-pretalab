function votar (nome, idade) {
    if (idade >= 18 && idade <=70) {
        console.log('Ola ' + nome + '. Voce tem ' + idade + ' anos. Voto obrigatorio')
    } else if (idade >= 16 || idade >=70) {
        console.log('Ola ' + nome + '. Voce tem ' + idade + ' anos. Voto facultativo')
    } else {
        console.log('Ola ' + nome + '. Voce tem ' + idade + ' anos. Nao pode votar')
    }
}

votar('Enzo', 12)
votar('Luiz', 17)
votar('Euclides', 78)
votar('Maria', 28)
votar('Elo', 18)