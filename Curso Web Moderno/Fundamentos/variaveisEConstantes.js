var a = 3
let b = 4

/*Num mesmo escopo, é impossível redeclarar uma variável que foi declarada como let. (A não ser por declaração direta "b = valor, o que é extremamente desaconselhável pois a variável se torna global")
*Assim sendo, é considerado boa prática o uso de let, que é um recurso mais novo da linguagem
*/
var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

/* é impossível redeclarar uma constante em um código, fazendo com que seja uma propriedade interessante para uso em constantes matemáticas ou taxas padronizadas.*/

const c = 5
// c = 50 ------não funciona-----

console.log(c)