const salaJavaScript = [7, 8, 8, 7, 10, 6.5, 4, 10, 7 ]
const salaJava = [6, 5, 8, 9, 5, 6 ]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSalas(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length 
}

console.log(`A média da sala de JS é: ${mediaSalas(salaJavaScript)}`);
console.log(`A média da sala de Java é: ${mediaSalas(salaJava)}`);
console.log(`A média da sala de Phyton é: ${mediaSalas(salaPython)}`);

// + um exemplo; Arrow function -> neste caso nao usamos as {} nem o return;

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma/numeros.length);

// + um exemplo: Arrow function -> vamos escrever de uma forma mais extensa para usar as {} e o return;