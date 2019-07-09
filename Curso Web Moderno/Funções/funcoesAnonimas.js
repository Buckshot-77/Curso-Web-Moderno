const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

const divisao = function(a, b){
    return a / b
}
imprimirResultado(10, 2, divisao)
imprimirResultado(10, 2, function(x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)