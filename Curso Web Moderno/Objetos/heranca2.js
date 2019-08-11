// Cadeia de protótipos
Object.prototype.atributo0 = '0'
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B', atributo3: '3'}
const filho = {__proto__: pai, atributo3: 'C'}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta){
        if(this.velocidadeAtual + delta <= this.velocidadeMaxima){
            this.velocidadeAtual += delta
        } else{
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status(){
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324 // shadowing, sobrescreve as variáveis de escopo mais abrangente com mesmo nome
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro) // estabelece relação de protótipo entre objetos (filho, pai)

console.log(ferrari, volvo)
console.log(volvo.status())