"use strict";
/**
 * arquivo: unknownType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Uknown'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
 */
// ==> Exemplo 01: Tipo Unknown
let valorVariavel;
valorVariavel = 123; //sem erro
valorVariavel = true; //sem erro
valorVariavel = []; //sem erro
valorVariavel = 'Oi!'; //sem erro
console.log(valorVariavel); //sem erro
// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
/**let valor: unknown; // não pode ser inferido a outros tipos
let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor; */
// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'
let algumaCoisaAny;
let algumaCoisaUknown;
console.log(algumaCoisaAny.toFixed('jkdghjfdhgj'));
if (typeof algumaCoisaUknown === 'number') {
    console.log(algumaCoisaUknown.toFixed());
}
