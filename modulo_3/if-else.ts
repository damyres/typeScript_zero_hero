/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/**
 * arquivo: ifElse.ts
 * descrição: arquivo responsável por ensinar como usar instrução if-else no Typescript
 * data: 07/12/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };
// ==> Exemplo 01 - Uso do if

const numeroMaximo = 100;
let contador = 100;

if(contador < numeroMaximo){
    contador++
}
console.log(contador);

// ==> Exemplo 02 - Uso do if

// ==> Exemplo 03 - Uso do if-else

//==> Exemplo 04 - if... else if


// ==> Exemplo 05 - Ternário (? :) - if...else
const idadeVotacao = 20;
/*if(idadeVotacao >= 18){
   console.log('Elegível'); 

} else{
    console.log('Não elegível');
}*/

//ternário
const podeVotar = (idadeVotacao >= 18) ? 'Elegível': 'Não elegível'
console.log(podeVotar);