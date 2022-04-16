function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma(2,4));
console.log(soma(4,4));
console.log(soma(3,4));

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade}.`;
    }

    console.log(nomeIdade("Angelo RP", "31 anos"));

    // função sem parametro e sem retorno;

    function cumprimetar() {
        console.log('Oi gente!');
    }
    cumprimetar()

    // função sem retorno e com paramentro;

    function cumprimentaPessoa(pessoa) {
        console.log(`Oi, ${pessoa}`);
    }

    cumprimentaPessoa("Angelo")

    // função com retorno e sem parametro;

    function cumprimentar() {
        return 'oi galera!'
    }

    function cumprimentarPessoa(nomePessoa) {
        console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`);
    }

    cumprimentarPessoa('ANGELO ROBERTO PUCCI VOGEL')

    