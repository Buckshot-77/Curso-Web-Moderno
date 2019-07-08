// Armazenando uma função em uma variável ou constante

const imprimirSoma = function () {
    console.log(a + b)
}

imprimirSoma(2, 3)


// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log (soma(2, 3))

//retorno implícito

const subtracao = (a, b) => a - b