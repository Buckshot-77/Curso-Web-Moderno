console.log(typeof Array, typeof new Array, typeof [])
// A boa prática para construção de arrays é construí-los com dados homogêneos. Não é considerado boa prática ter vários tipos primitivos dentro de um array.

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Maneira ideal de criar um array, exceto pela falta de uso de let ou const
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') //Comando padrão para adicionar elemento ao array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length, aprovados)
aprovados.sort() // Não apenas retorna o array modificado. Ele de fato ALTERA O ARRAY ORIGINAL.
console.log(aprovados)
