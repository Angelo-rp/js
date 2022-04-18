// JavaScript Object Notation ou “notação de objeto JavaScript”.

// É muito versátil e se tornou a forma mais comum de estrutura para transferência de dados entre cliente/servidor, e tem sido utilizado mesmo em programas que não utilizam JavaScript.


// COPIAR CÓDIGO
//O código acima mostra um JSON com dois conjuntos de propriedade/valor: um tem valor de string (editora) e catálogo é um array de objetos, cada um representando um livro.
//
//As diferenças de sintaxe entre JSON e um objeto JavaScript são:
//
//No JSON, as chaves sempre devem estar entre aspas duplas ” ”, no formato string. Já no objeto JavaScript, as aspas não são obrigatórias;
//O JSON aceita como valores apenas dados primitivos (string, number para números finitos, true, false e null), objetos e arrays. Não é possível declarar funções/métodos;
//Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.

//JSON é um formato criado para transferência de dados, sendo assim é necessário convertê-lo para um objeto JavaScript para que os dados possam ser utilizados em um programa. Para isso, existem dois métodos nativos:

//JSON.parse(): converte JSON para um objeto JavaScript;
//JSON.stringify(): converte um objeto JavaScript para o formato JSON.