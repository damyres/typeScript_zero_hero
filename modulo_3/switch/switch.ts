/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/**
 * arquivo: switch-case.ts
 * descrição: arquivo responsável por ensinar como usar instrução switch-case no Typescript
 * data: 23/12/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01 - Uso do switch...case
let flor: string = 'rosa'


switch(flor){
    case 'rosa': console.log('Rosas não são vermelhas');
    break;
    case 'violeta': console.log('Violetas são azuis');
    break;
    default:
        console.log('Por favor, selecione uma outra flor!');
}