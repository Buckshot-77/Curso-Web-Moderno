function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('A', 'B', 'C'))


//Existe uma maneira mais moderna de obter o efeito de função com parâmetros flexíveis a partir do ECMAScript 2015, a ser abordada posteriormente.