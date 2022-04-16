const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const medias = [10, 7, 9, 6]

let listaAlunosMedias = [alunos, medias]

const exibeNotaAluno = (nomeAluno) => {
    if(listaAlunosMedias[0].includes(nomeAluno)){
        let indice = listaAlunosMedias[0].indexOf(nomeAluno) 
        return listaAlunosMedias[0][indice] + ' ,sua média é: ' + listaAlunosMedias[1][indice] 
    } else{
        return `O aluno buscado não foi encontrado!`
    }
}

console.log(exibeNotaAluno("joão"));

// o includes.  busca o elemento dentro da lista e retorna True or False;

// o indexOf. verifica em qual indice o elemente que vc busca está! retorna um valor;