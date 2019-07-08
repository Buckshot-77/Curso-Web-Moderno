const aluno = 'Hugo'

console.log(aluno.charAt(2)) // caractere encontrado no referido dígito
console.log(aluno.charAt(3))
console.log(aluno.charCodeAt(3)) // código unicode do caractere encontrado no referido dígito

console.log(aluno.substring(1)) // do 1 em diante
console.log(aluno.substring(0, 3)) // de 0 até 3

console.log(aluno.replace('o', '0'))

console.log('Ana, Maria, Pedro'.split(',')) // o parâmetro do método split é o separador desejado