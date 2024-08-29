"use strict";
/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/03/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ('', "" e ``)
// ==> Exemplo 01 - Single Quotes
let nomeCompleto = 'Damyres Silva';
console.log(nomeCompleto);
// ==> Exemplo 01 - Double Quotes
let funcaoEmpresa = "Cloud Advocate em JavaScript";
console.log(funcaoEmpresa);
// ==> Exemplo 01 - Back Ticks
let empresa = 'Microsoft';
let dadosFuncionario = `Seja bem vinda ${nomeCompleto}!
você será ${funcaoEmpresa} na empresa ${empresa}`;
console.log(dadosFuncionario);
