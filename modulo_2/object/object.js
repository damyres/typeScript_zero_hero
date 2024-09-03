"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: objectType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'object'
 * data: 26/11/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/objects.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 35,
    funcao: 'Dev'
};
console.log(pessoa);
// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem-vinda! ' + funcionario.nome;
}
console.log();
console.log(onboarding01({ nome: 'Juliana' }));
function onboarding02(pessoa) {
    return ('Seja bem vinda ' + pessoa.nome + '!. Sua função aqui na empresa será ' + pessoa.funcao + '.');
}
console.log();
console.log(onboarding02({ nome: 'Amanda', funcao: 'médica' }));
function onboarding03(pessoa) {
    return ('Seja bem vinda ' + pessoa.nome + '!. Sua função aqui na empresa será ' + pessoa.funcao + '. você trabalhará com a liguagem ' + pessoa.linguagem);
}
console.log(onboarding03({ nome: 'Amanda', funcao: 'dev', linguagem: 'java' }));
function onboarding05(pessoa) {
    return ('Seja bem vinda ' + pessoa.nome +
        '!. Sua função aqui na empresa será ' +
        pessoa.funcao + '. você trabalhará com a liguagem ' +
        pessoa.linguagem +
        'seu email:' + pessoa.email);
}
console.log(onboarding05({ nome: 'Luiza', funcao: 'dev', linguagem: 'TypeScript', email: 'luiza@email.com' }));
console.log();
function onboarding06(pessoa) {
    return ('Seja bem vinda ' + pessoa.nome +
        '!. Sua função aqui na empresa será ' +
        pessoa.funcao + '. você trabalhará com a liguagem ' +
        pessoa.linguagem +
        'seu email:' + pessoa.email);
}
console.log(onboarding06({ nome: 'Eduarda', funcao: 'dev', linguagem: 'Phyton', email: 'eduarda@email.com' }));
console.log();
const filha = {
    nome: 'Gabriela',
    sobrenome: 'Silva',
    idade: 35
};
console.log(filha);
//objeto
const usuario = {
    nome: 'Miranda Borges',
    email: 'miranda@email.com'
};
const admin = {
    nome: 'Miranda Borges',
    email: 'miranda@email.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
//function acessarSistema(usuario: Usuario): Usuario{
//    return usuario;
//}
//console.log(acessarSistema(usuario));
console.log();
