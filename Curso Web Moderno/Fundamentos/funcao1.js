// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10 , 4, 5, 6, 7, 8)
imprimirSoma()

//funcao com retorno
// atribuir um valor a um dos parâmetros de entrada faz com que o mesmo signifique o valor padrão caso o parâmetro não seja passado
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))
console.log(soma())