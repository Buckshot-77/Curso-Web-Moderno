// Função em JS é First-Class Object (Citizens)


//criar de forma literal
function funcao1(){ }

// Armazenar em uma variável
const funcao2 = function () { }

// Armazenar em um array
const array = [funcao1(), 0, 1, 2, function(a, b) {return a + b}]
console.log(array[4](5, 6))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Qualé, meu bom'}
console.log(obj.falar())

//Passar uma função como parâmetro
function run(fun){
    fun()
}
run(function(){console.log('Executando!')})

//Uma função pode retornar e/ou conter uma função
function soma(a, b){
    return function(c) {
        console.log(a + b + c)
    }
}
soma (2,3)(4)

const cincoMais = soma(2, 3)
cincoMais(4)