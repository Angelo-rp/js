// PUXANDO RELATORIO - percorrer um objetivo e extrair informações basicas de um cliente de forma mais legivel e de forma automatizada para fornecer a outros departamentos do banco.

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


let relatorio = "";

for (let dado in pessoa){
    if(typeof pessoa[dado] === "object" || typeof pessoa[dado] === "function"){
        continue
    } else{
        relatorio += `
        ${dado} ==> ${pessoa[dado]}
        `;
    }
}

console.log(relatorio);