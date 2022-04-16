const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiane', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabella', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log(`O tamanho da array é: `, nomes.length);

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Nomes da sala 1 é: ${sala1}.`);
console.log(`Nomes da sala 2 é: ${sala2}.`);

