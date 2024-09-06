"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Maria', 'Cloud Advocate', 34];
//console.log(pessoa);
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Maria', 'Cloud Advocate', 34, 1990, 'Brasil'];
//console.log(pessoa1[3]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa3 = ['Maria', 'Médica', 33];
//console.log(pessoa3);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
//console.log(...listaFrutas);
//==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2 = [4, true, ...listaFrutas];
//console.log(listaFrutas2);
// ==> Exemplo 06 - Uso de função com Tuplas
function listaPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listaPessoas(['Damyres', 'Silva', 'Lima', 'Duarte'], [22, 44, 33, 11]);
function criarPessoas(...nome) {
    return [...nome];
}
console.log(criarPessoas('Damyres', 'Maciel'));
console.log(criarPessoas('Damyres', 'Silva', 'Maciel'));
