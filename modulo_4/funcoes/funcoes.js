"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Functions (Named function)
function somarNumeros(num1, num2) {
    return num1 + num2;
}
const resultado = somarNumeros(2, 5);
console.log(resultado);
// ==> Exemplo 02 - Função Anônima (Function Expression)
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá sou uma mensagem!'));
// ==> Exemplo 03 - (Arrow Function Expression)
const saudar03 = (mensagem) => {
    return mensagem;
};
console.log(saudar03('Eu sou mensagem de uma arrow funtion'));
// ==> Exemplo 04 - (Function constructor)
const saudar04 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar04('Eu sou uma mensagem de uma função contrutora'));
