let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined, deixe que a linguagem o faça quando necessário
// delete produto.preco  //maneira correta de limpar valor de uma variável
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)