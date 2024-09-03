/**
 * arquivo: neverType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'never'
 * data: 11/11/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
 */

// ==> Exemplo 01: Never - Throw Exception

function error(message: string): never {
    throw new Error(message)
}
console.log(error('Error de mensagem 01'));


// ==> Exemplo 02: Never inferido automaticamente
function rejectMessage(){
    return error('Error de mensagem 02')
}
console.log(rejectMessage());

// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'

const loopInfinito = function loop(){
    while(true){
        console.log('Oi, developrs!');
    }
}
//console.log(loopInfinito());

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'
const algumaCoisaVoid: void = null;
const algumaCoisaNever: never = null; //null é para o tipo void  never nunca vai aconetecer, não pode receber nenhum valor
console.log(algumaCoisaVoid);
console.log(algumaCoisaNever);
