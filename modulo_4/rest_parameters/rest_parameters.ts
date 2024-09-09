/**
 * arquivo: restParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Rest Parameters' em funções no no Typescript
 * data: 29/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01
function somarNumeros(...numeros: number[]) {
    let total = 0;
    numeros.forEach((numero) => (total += numero))
    return total;
}
console.log(somarNumeros(40, 50));
console.log(somarNumeros(40, 50, 50, 70, 90));

// ==> Exemplo 02

function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ' ' + frutas.join(', ')
}
console.log(listarFrutas(
    'Você precisa ir na feira para comprar...:',
    '🥥',
    '🍓',
    '🍌',
    '🍍',
    '🍉'
));
// ==> Exemplo 03
class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);

        }
    }

}
const depatarmentoInformatica: Produtos = new Produtos()
console.log('Todos os produtos de informática disponível no estoque:', );
depatarmentoInformatica.exibirProdutos(
    'Mouse',
    'Monitor', 
    'Teclado'
)



