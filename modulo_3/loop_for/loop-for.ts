/* eslint-disable prettier/prettier */
/**
 * arquivo: loop-for.ts
 * descrição: arquivo responsável por ensinar como usar o loop for no Typescript
 * data: 23/01/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

// ==> Exemplo 01: loop for
let valor: number = 10
console.log(typeof valor);

for (let i = 0; i <=valor; i++) {
   // console.log(i);
}

// ==> Exemplo 02: for ...of - (retorna uma coleção de matriz, lista ou tupla)
const arrayNumeros = [1,2,3,4,5,6,7,8,9, 10,11,12]

for (const i of arrayNumeros){
 //  console.log(i);
}


// ==> Exemplo 03: for ...in - (retorna uma coleção de matriz, lista ou tupla)
const arrayNumeros01 = [50, 3,5,4,0]
for(const i in arrayNumeros01){
    console.log(i);
}
//sort()
const ordemNumerica: number[] = arrayNumeros01.sort()
console.log(ordemNumerica);