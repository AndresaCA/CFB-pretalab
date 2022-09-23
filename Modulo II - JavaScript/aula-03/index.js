const alunas = [
    { nome: 'Vera', nota: 9}, 
    { nome:'Joyce', nota: 9}, 
    { nome: 'Nath', nota: 5.5}
]

alunas.filter((aluna) => {
    if (aluna.nota >= 7) {
        console.log(aluna.nome + ' foi provada')
    } else {
        console.log(aluna.nome + ' foi reprovada')
    }
})