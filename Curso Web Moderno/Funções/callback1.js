const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //forEach retorna o conteúdo seguido do índice de cada elemento do array/objeto
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})