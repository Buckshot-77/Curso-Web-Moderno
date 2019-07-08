let comparaComThis = function (parametro) {
    console.log(this === parametro)
}

comparaComThis(global)

// O escopo global é chamado de "global" no Node, e é chamado de "window" no browser, fazendo com que seja necessário e desejável entender o contexto no qual o código está sendo executado.

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = parametro => console.log(this === parametro)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)