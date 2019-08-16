const produtos = [{
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'Tablet',
        preco: 700,
        fragil: true
    },
    {
        nome: 'Copo de Vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de Plástico',
        preco: 18.99,
        fragil: false
    },
    {
        nome: 'Tonelada de Cimento',
        preco: 501,
        fragil: false
    }
];

console.log(produtos.filter(function (produto) {
    return false;
})); // retorno vazio

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))