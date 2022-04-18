// extrair de uma listagem de clientes apenas as informações dos dependentes e montar uma lista única.

const clientes = [
    {
        nome: "Angelo",
        cpf: "029.096.101-79",
        dependentes: [
            {
                nome: "Júlia",
                parentesco: "filha",
                dataNasc: "24/09/2016"
            },
            {
                nome: "Heitor",
                parentesco: "filho",
                dataNasc: "01/01/2018"
            }
        ]
    },
    {
        nome: "Ore",
        cpf: "1234567890",
        dependentes:[
            {
                nome: "juni",
                parentesco: "filho",
                dataNasc: "13/07/1987"
            },
            {
                nome: "maria",
                parentesco: "filha",
                dataNasc: "15/10/2000"
            }
        ]
    }
]
                            
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);

//  ... ==> usado para espelhamento; acessa o clientes pelo indice 0 primeiro, pega os dependentes e depois vai para o proxima.   É UMA APENAS UMA DAS FORMAS DE USAR;

// ==> outra forma de mostrar de uma forma melhor é pelo conslo.table()

console.table(listaDependentes)