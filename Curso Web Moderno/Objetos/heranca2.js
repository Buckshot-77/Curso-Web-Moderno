// Cadeia de protótipos

const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B'}
const filho = {__proto__: pai, atributo3: 'C'}
console.log(filho.atributo1)