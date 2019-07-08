let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // resultado é verdadeiro porque o pré-incremento é feito antes da comparação e o pós-decremento do num2 é feito depois da comparação