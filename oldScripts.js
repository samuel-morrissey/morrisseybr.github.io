// Declaração de variáveis e constantes
var declaracaoDeVariavelAntiga = "Olá, mundo!";
let declaracaoDeVariavelNova = "Olá, mundo!";
const declaracaoDeConstante = "Olá, mundo!";

// Tipos primitivos
const texto = "Isto é uma string";
const literalTemplate = `Isto é um template literal com uma variável: ${texto}`;
const numero = 42;
const pontoFlutuante = 3.14;
const booleano = true;
const nulo = null; // Representa a ausência intencional de valor
let indefinido; // Representa uma variável declarada, mas não inicializada

// Uso do typeof para verificar o tipo de uma variável
console.log(typeof texto); // "string"

// Operadores aritméticos
const soma = 5 + 3;
const subtracao = 10 - 4;
const multiplicacao = 6 * 7;
const divisao = 20 / 5;
const modulo = 10 % 3; // Resto da divisão
const exponenciacao = 2 ** 3; // 2 elevado a 3

// Operadores de comparação
const igual = 5 == "5"; // true, comparação de valor
const igualEstrito = 5 === "5"; // false, comparação de valor e tipo
const diferente = 5 != "5"; // false, comparação de valor
const diferenteEstrito = 5 !== "5"; // true, comparação de valor e tipo
const maior = 10 > 5; // true
const menor = 3 < 7; // true
const maiorOuIgual = 5 >= 5; // true
const menorOuIgual = 4 <= 6; // true

// Operadores lógicos
const e = true && false; // false
const ou = true || false; // true
const nao = !true; // false

// Estruturas de controle
if (numero > 10) {
    console.log("O número é maior que 10");
} else if (numero === 10) {
    console.log("O número é igual a 10");
} else {
    console.log("O número é menor que 10");
}

// Ternário
const resultado = numero > 10 ? "Maior que 10" : "Menor ou igual a 10";
console.log(resultado);

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}

const frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}

const pessoa = { 
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

// While Loop
let contador = 0;
while (contador < 5) {
    console.log("Contagem: " + contador);
    contador++;
}

// Switch Case
const diaDaSemana = 3;
switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
        break;
}

// Funções
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

const saudacaoAnonima = function(nome) {
    return "Olá, " + nome + "!";
}

const saudacaoArrow = (nome) =>  "Olá, " + nome + "!";

// Estruturas de dados
const array = [1, 2, 3, 4, 5];
array.length; // Retorna o número de elementos no array
array.push(6); // Adiciona um elemento ao final do array
array.pop(); // Remove o último elemento do array
array.shift(); // Remove o primeiro elemento do array
array.unshift(0); // Adiciona um elemento no início do array
array.splice(2, 1); // Remove um elemento a partir do índice 2
array.slice(1, 4); // Retorna um novo array com os elementos do índice 1 ao 3
array.indexOf(3); // Retorna o índice do elemento 3
array.includes(4); // Retorna true se o elemento 4 estiver presente no array
array.forEach((elemento) => console.log(elemento)); // Itera sobre cada elemento do array
array.filter((elemento) => elemento > 2); // Retorna um novo array com os elementos maiores que 2
array.map((elemento) => elemento * 2); // Retorna um novo array com os elementos multiplicados por 2
array.reduce((acumulador, elemento) => acumulador + elemento, 0); // Retorna a soma de todos os elementos do array

const objeto = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro",
};

console.log(objeto.nome); // Acessa a propriedade nome do objeto
console.log(objeto["idade"]); // Acessa a propriedade idade do objeto
objeto.profissao = "Engenheira";
delete objeto.cidade; // Remove a propriedade cidade do objeto (pouquíssimo utilizado)
Object.keys(objeto); // Retorna um array com as chaves do objeto
Object.values(objeto); // Retorna um array com os valores do objeto
Object.entries(objeto); // Retorna um array de arrays com as chaves e valores do objeto

const objeto2 = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro",
};

console.log(objeto2.profissao); // undefined, pois a propriedade profissão não existe no objeto2
objeto2.profissao = "Engenheira"; // Adiciona a propriedade profissão ao objeto2
console.log(objeto2.profissao); // "Engenheira"
delete objeto2.profissao; // Remove a propriedade profissão do objeto2
console.log(objeto2.profissao); // undefined, pois a propriedade profissão foi removida do objeto2

// Exemplo de código sincrono lento
// function tarefaLenta() {
//     for (let i = 0; i < 1e9; i++) {
//         // Simula uma tarefa lenta
//     }
//     console.log("Tarefa lenta concluída");
// }

// console.log("Iniciando tarefa lenta...");
// tarefaLenta();
// console.log("Tarefa lenta iniciada, mas o código continua executando...");

// Exemplo de código assíncrono usando setTimeout
// console.log("Iniciando tarefa assíncrona...");
// setTimeout(() => {
//     console.log("Tarefa assíncrona concluída");
// }, 2000);
// console.log("Tarefa assíncrona iniciada, mas o código continua executando...");

// Exemplo de código assíncrono usando Promises
// function tarefaAssincrona() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Tarefa assíncrona concluída");
//         }, 5000);
//     });
// }

// console.log("Iniciando tarefa assíncrona...");
// const promessa = tarefaAssincrona();
// promessa.then((resultado) => {
//     console.log(resultado);
// }).catch((erro) => {
//     console.error("Ocorreu um erro: " + erro);
// });
// console.log("Tarefa assíncrona iniciada, mas o código continua executando...");


// Exemplo de código assíncrono usando async/await
// async function executarTarefaAssincrona() {
//     console.log("Iniciando tarefa assíncrona...");
//     const resultado = await tarefaAssincrona();
//     console.log(resultado);
//     console.log("Tarefa assíncrona iniciada, mas o código continua executando...");
// }

// executarTarefaAssincrona();
// console.log("Fim do script.js");

// Exemplo utilizando a api do Ricky and Morty
const urlDosPersonagens = "https://rickandmortyapi.com/api/character/";

async function buscarPersonagens() {
    const resultado = await fetch(urlDosPersonagens)
    const dados = await resultado.json()
    return dados
}

const dados = buscarPersonagens();
dados.then((dados) => {
    dados.results.forEach((personagem) => {
        console.log("Nome: " + personagem.name);
    });
})