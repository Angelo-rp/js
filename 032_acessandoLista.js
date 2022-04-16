const pessoa = {
    nome: "angelo",
    idade: "31",
    email: "angelopvgel@gmail.com",
    cidade: "Sete quedas",
    telefone: ["67993028716", "55(67)99302-8716"],
    pais: "brasil"
}
console.log(pessoa);

pessoa.telefone.forEach(fone => console.log(fone))