const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = funcionario => funcionario.pais === "China";
const mulheres = funcionario => funcionario.genero === "F";
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
};
const maiorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario > funcionarioAtual.salario ? funcionario : funcionarioAtual;
};

axios.get(url).then(Response => {
    const funcionarios = Response.data;
    console.log(funcionarios)

    // Mulher chinesa com menor salário
    const chinesaComMenorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);
    const chinesaComMaiorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(maiorSalario);
    
    console.log(chinesaComMenorSalario);
    console.log(chinesaComMaiorSalario);

});