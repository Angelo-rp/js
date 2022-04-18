// Percorrer um objeto, verificar se existe a chave `dependentes´ e , caso exista, enviar uma oferta de seguro.

// Métodos de percorrer objetos - outras formas alem do FOR IN.

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
            parentesco: "filha",
        },
        {
            nome: "Heitor",
            idade: "4 anos",
            parentesco: "filho",
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

oferecerSeguro(pessoa)

function oferecerSeguro (obj) {
    const percorrerObjetos = Object.keys(obj)
    if (percorrerObjetos.includes('dependentes')) {      
        console.log(`sim, ${obj.nome} possui dependentes.`)
    }
}


console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
