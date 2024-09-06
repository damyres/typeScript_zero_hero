/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
//livro
export{}
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa: [string, string, number]
pessoa = ['Maria', 'Cloud Advocate', 34]
//console.log(pessoa);

// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1: [string, string, number, number, string]
pessoa1 = ['Maria', 'Cloud Advocate', 34, 1990, 'Brasil'] 
//console.log(pessoa1[3]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa3: [nome:string, profisa:string, idade:number] = ['Maria', 'Médica', 33]
//console.log(pessoa3);


// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'] 
//console.log(...listaFrutas);

//==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2: [number, boolean, ...string[]] = [4, true, ...listaFrutas]
//console.log(listaFrutas2);

// ==> Exemplo 06 - Uso de função com Tuplas
function listaPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades]

}
let resultado = listaPessoas(['Damyres', 'Silva', 'Lima', 'Duarte'],[22,44,33,11])
//console.log(resultado);

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
    | [primeiroNome: string, sobrenome:string]
    | [primeiroNome: string, nomeMeio:string, sobrenome:string]

function criarPessoas(...nome: Nome){
    return[...nome];
}
console.log(criarPessoas('Damyres','Maciel'));
console.log(criarPessoas('Damyres','Silva','Maciel'));
