const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in numeros) {
    if (x == 5) break
    console.log(`${x} = ${numeros[x]}`)
}

for (let y in numeros){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}
//neste caso, o continue para a iteração atual e pula para a próxima

externo: for (let a in numeros) {
    for (let b in numeros) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

// desaconselhado, pois é confuso de fazer manutenção e entender bem!