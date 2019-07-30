console.log(soma(3, 4)) // funciona, pois com function declaration o interpretador carrega primeiro as definições.
//console.log(sub(3,4)) // não funciona, pois o interpretador não carrega a expressão antes quando ela é declarada por function expression

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))