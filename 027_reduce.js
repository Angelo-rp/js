// Exemplo

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(` A soma dos numeros é: ${soma}`);

// Exemplo 2;

const totalQuestoes = 80;
const NotaAngelo = [9, 13, 25]
const resultado = NotaAngelo.reduce((acum, atual) => 
atual + acum, 0)



console.log(`a porcentagem de questoes corretas é: ${(resultado*100)/totalQuestoes} % .`);


// outra forma de escrita; (mais extensa, com {} return)

const result = NotaAngelo.reduce(function (acum, atual) {
    return atual + acum
},0 )

console.log(`Na outra escrita temos: ${(result*100)/totalQuestoes}`);




