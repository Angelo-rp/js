const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0;

//função callback 
//para cada nota e tal;
notas.forEach(nota => {
    somaNotas += nota
})

let media = somaNotas / notas.length

console.log(media);