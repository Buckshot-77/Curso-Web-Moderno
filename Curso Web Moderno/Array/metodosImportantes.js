const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos);
pilotos.pop(); // Massa quebrou o carro de novo! O método pop remove o último elemento do array.
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // Remove o primeiro da lista

pilotos.unshift('Hamilton');
console.log(pilotos);

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1); // remove o elemento 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array a partir do elemento-parâmetro
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array a partir do 1 até o 4, sem levar em consideração o 4
console.log(algunsPilotos2);