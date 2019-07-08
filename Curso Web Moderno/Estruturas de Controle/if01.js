function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('É verdade! O valor é ' + valor)
    }
}

function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log(`Parabéns, você foi aprovado! Nota ${nota}`)
    } else{
        console.log('Infelizmente, você não foi aprovado')
    }
}

verificarAprovacao(8)


seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('...')
seForVerdadeEuFalo(-1)
