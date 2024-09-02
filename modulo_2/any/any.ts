/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 */

// ==> Exemplo 01: Tipo Any
const a: any = 888;
const b: any = ['Damyres'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
let frase;
frase = 'Oi tudo bem?'
console.log(frase);


// ==> Exemplo 03: Quando devemos usar o tipo any?!
const formulario: { [campoFormulario: string]: any } = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 33
}
console.log(formulario);