let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

//criando uma variável maluca: sem var e let
abc = 3 // jamais fazer, pois é má prática
console.log(global.abc)
