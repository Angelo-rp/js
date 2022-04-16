//Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar no console.

const cliente = {
    nome: "Angelo",
    idade: "31",
    email: "angelopvogel@gmail.com",
    cpf: "029.096.101-79"
}

const itensCliente = ["nome", "idade", "email", "cpf"]

 itensCliente.forEach(chave => console.log(cliente[chave]))