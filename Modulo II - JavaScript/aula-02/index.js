//const alunas = ['Anna', 1, 'Bia', 2, 'Carla', 3]

//console.log(alunas[1])

/*const notas = [1, 2, 3]
notas.forEach((nomes) => {
    console.log(nomes)
})*/

//const langue = ['JS', 1, 2, 3, 'HTML', 'CSS']

/*langue.forEach((sample) => {
    if (isNaN(sample)) {
        console.log(sample)
    }
})*/

// unshift() Adiciona elementos ao inicio de uma  array
const colors = ['Red', 'Blue', 'Green']
console.log(colors)
console.log(colors.includes('Pink'))
colors.unshift('Pink', 'Yellow')
console.log(colors)

// includes() verifica se uma array inclui determinado item, e retorna true ou false
console.log(colors.includes('Orange'))
console.log(colors.includes('Pink'))

// reverse() Reverte a ordem dos elementos de uma aray
console.log(colors.reverse())

// lastIndexOf() retorna o ultimo indice de determinado item de uma array
const jewels = ['Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Ruby']
console.log(jewels)
let index = jewels.lastIndexOf('Emerald')
console.log(index)

// join() junta todos os elementos de uma array em uma string
const fruits = ['Apple', 'Orange', 'Peach']
console.log(fruits)
let fruitsSt = fruits.join()
console.log(fruitsSt)