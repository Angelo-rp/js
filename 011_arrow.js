function apresentar(nome){
    return `meu nome é ${nome}`
}

// Arrow com uma linha apenas;

const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (n1, n2) => n1 + n2;

// Arrow com mais de uma linha;

const somaNumeros = (numero1, numero2) => {
    if (numero1 || numero2 > 10){
    return numero1 + numero2;
} else {
    return "Precisa ser numeros menores que 10"}
}
console.log(somaNumeros(2, 1));
console.log(somaNumeros(10, 10));