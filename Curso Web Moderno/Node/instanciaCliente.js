const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.incrementar();
contadorA.incrementar();
console.log(contadorB.valor)

contadorC.incremento();
contadorC.incremento();
console.log(contadorC.valor, contadorD.valor);