function criarProduto(nomeProduto, precoProduto, desconto = 0.4){
    return {
        nome: nomeProduto,
        preco: precoProduto,
        desconto,
        precoComDesconto: precoProduto - precoProduto * desconto
    }
}

console.log(criarProduto('Abacate', 40))