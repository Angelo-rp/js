// 1° desafio
// acessar um objeto com informações de um cliente e exibir essas infos no console.

// modelo de objeto - 
const cliente = {
    nome: "Angelo",
    idade: "31",
    email: "angelopvogel@gmail.com",
    cpf: "029.096.101-79"
}

console.log(` Meu nome é ${cliente.nome}, e minha idade é ${cliente.idade}, meu email é ${cliente.email}`);

// usa-se o . para acessar  -   substring acessa o cpf e limita os indice(0, 3)

console.log(` Meu CPF é: ${cliente.cpf.substring(0,3)}.***.***-**`);