const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //acessa o objeto pessoa com o "this" e depois o atributo "saudacao"
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa =  pessoa.falar.bind(pessoa)
falarDePessoa()
