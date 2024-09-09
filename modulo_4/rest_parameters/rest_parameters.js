"use strict";
/**
 * arquivo: restParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Rest Parameters' em funções no no Typescript
 * data: 29/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
console.log(somarNumeros(40, 50));
console.log(somarNumeros(40, 50, 50, 70, 90));
// ==> Exemplo 02
function listarFrutas(frase, ...frutas) {
    return frase + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Você precisa ir na feira para comprar...:', '🥥', '🍓', '🍌', '🍍', '🍉'));
// ==> Exemplo 03
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const depatarmentoInformatica = new Produtos();
console.log('Todos os produtos de informática disponível no estoque:');
depatarmentoInformatica.exibirProdutos('Mouse', 'Monitor', 'Teclado');
