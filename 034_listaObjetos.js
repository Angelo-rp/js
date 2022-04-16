const pessoa = {
    nome: "angelo",
    idade: "31",
    email: "angelopvgel@gmail.com",
    cidade: "Sete quedas",
    telefone: ["67993028716", "55(67)99302-8716"],
    pais: "brasil"
}

pessoa.dependentes = [{
    nome: "Júlia",
    idade: "24/09/2016",
    parentesco: "filha"
}]


pessoa.dependentes.push({
    nome: "Heitor",
    idade: "01/01/2018",
    parentesco: "filho"
}
)
console.log(pessoa);

const filhoMaisNovo = pessoa.dependentes.filter(dependente => dependente.idade ==="01/01/2018")

console.log(filhoMaisNovo);
console.log(filhoMaisNovo[0].nome);