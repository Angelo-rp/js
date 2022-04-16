// Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias.

const pessoa = {
    nome: "angelo",
    idade: "31",
    email: "angelopvgel@gmail.com",
    cidade: "Sete quedas",
    telefone: ["67993028716", "55(67)99302-8716"],
    pais: "brasil",
    dependentes: [
        {
            nome: "Júlia",
            idade: "6 anos",
            parentesco: "filha"
        },
        {
            nome: "Heitor",
            idade: "4 anos",
            parentesco: "filho"
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(pessoa.saldo);
pessoa.depositar(30);
console.log(pessoa.saldo);


