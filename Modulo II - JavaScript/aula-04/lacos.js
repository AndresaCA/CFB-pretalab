/*let i = 0
while (i < 11) {
    console.log('7 x ' + i + ' = ' + 7*i);
    i++
}*/

/*let salario = 1000
while (salario < 5000) {
    salario += 500
    console.log('O salário é de R$ ' + salario)
}*/

/*const alunas = [
    {aluno: 'Alcina', nota:10},
    {aluno: 'Bella', nota: 9},
    {aluno:'Cassandra', nota: 8},
    {aluno:'Daniela', nota:7}
]

let index = 0
let somaNotas = 0
let totAlunas = alunas.length;

do {
    somaNotas += alunas[index].nota
    index++
} while (index < totAlunas)
let media = somaNotas / totAlunas

console.log(media)*/

// Metodo de repetição DoWhilie
let controle = 0 // primeiramente a variavel é definida
do { // faça isso
    console.log('Método while') //imprima
    controle += 1 // some mais um
} while (controle < 3) // enquanto o valor da variavel for menor que esse valor

// Método de repetição for
for (let i = 0; i < 5; i += 1) {
   console.log('Método for')
}

