function criarProduto(nomeProduto, precoProduto, desconto = 0.4){
    return {
        nome: nomeProduto,
        precoOriginal: precoProduto,
        desconto,
        precoComDesconto: precoProduto - precoProduto * desconto
    }
}

console.log(criarProduto('Abacate', 40))
console.log(criarProduto('Laptop', 3500))