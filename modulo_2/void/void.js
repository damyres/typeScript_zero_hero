"use strict";
/**
 * arquivo: voidType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'void'
 * data: 27/08/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#void
 */
// ==> Exemplo 01 - funções: (convencional)
//function olaMundo() {
//console.log('Olá mundo!');
//}
//olaMundo()
//function logError(errorMessage: string) {
//console.log(errorMessage);
//return errorMessage
//}
//logError('sou um erro de msg')
//arrow function (modelo novo de função)
//const olaMundo2 = () => {
//    console.log('Olá mundo 2');
//}
//olaMundo2()
// ==> Exemplo 02 - funções:
const logErrorExample2 = (errorMessage) => {
    return errorMessage;
};
const retorno = logErrorExample2('oi');
console.log(retorno);
// ==> Exemplo void: variáveis
let variavelExemploVoid;
//variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
