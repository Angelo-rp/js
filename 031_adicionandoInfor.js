const cliente = {
    nome: "Angelo",
    idade: "31",
    email: "angelopvogel@gmail.com",
    cpf: "029.096.101-79"
}

console.log(cliente);

//uma forma de add um chave e um valor - usando o . depois atribui o nome a chave depois = depois o valor.
cliente.fone  = "6799302-8716"

console.log(cliente);


// Para deletar arquivos;
// delete-depois o nome do objeto depois. e o nome da chave;

delete cliente.fone

console.log(cliente);

//outra forma
delete cliente ["email"]

console.log(cliente);