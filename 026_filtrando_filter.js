const alunos = ['Angelo', 'heitor', 'juju', 'marci'] 
const notas = [5, 9, 9, 5]

let aprovados = alunos.filter((aluno, indice) => notas[indice] > 6)

let reprovados = alunos.filter((aluno, indice) => notas[indice] < 6) 

console.log(`lista de aprovados: ${aprovados}`);

console.log(`lista de reprovados: ${reprovados}`);

// Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.