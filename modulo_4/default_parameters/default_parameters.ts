/**
 * arquivo: defaultParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Default Parameters' em funções no no Typescript
 * data: 29/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01 - Default Parameters
function descontoCompras(preco: number, desconto = 0.08) {
    return preco * (1 - desconto)
}

console.log(descontoCompras(100));

// ==> Exemplo 02

function exibirMensagem(mensagem: string, saudar = 'Fala pessoal!') {
    return saudar + ' ' + mensagem + '!'
}

console.log(exibirMensagem('JavaScript developers'));
// ==> Exemplo 03

function exibirNome(nome: string, sobrenome = 'Lemos') {
    return nome + ' ' + sobrenome;
}

const resultado1 = exibirNome('Maria')
const resultado2 = exibirNome('Claúdia', undefined) 
//const resultado3 = exibirNome('Marta' , 'silva', 'senhorita')
const resultado4 = exibirNome('Marta' , 'silva')
console.log(resultado1);
console.log(resultado2);
//console.log(resultado3);
console.log(resultado4);

