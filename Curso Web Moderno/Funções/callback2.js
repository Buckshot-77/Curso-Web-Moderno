const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i]) // empurra um valor para a última casa do array
    }
}

console.log(notasBaixas)


//Com Callback
const notasBaixas2 = notas.filter((nota) => nota < 7) // usando arrow function para praticar. O método filter tem como função percorrer o array que o chama. Seu parâmetro de entrada é uma função que inclui no vetor resultado caso a mesma resulte em verdadeiro.
console.log(notasBaixas2)

const NotasMenoresDoQue7 = nota => nota < 7

const notasBaixas3 = notas.filter(NotasMenoresDoQue7)
console.log(notasBaixas3)