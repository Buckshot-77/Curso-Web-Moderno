// se a variável do tipo let for utilizada em vez de var, o escopo da variável fica limitado ao bloco no qual ela foi declarada, o que é o desejável na maior parte das aplicações
var numero = 1
{
    var numero = 2
    console.log('dentro = ' + numero)
}
console.log('fora = ' + numero)