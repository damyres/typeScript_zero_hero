"use strict";
/* eslint-disable prefer-const */
/**
 * arquivo: optionalParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Optional Parameters' em funções no no Typescript
 * data: 14/02/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id funcionário...', idPessoa, 'Nome: ', nome);
    if (email != undefined) {
        console.log('Email..', email);
    }
}
informarDadosPessoa(1, 'Maria Luiza');
informarDadosPessoa(2, 'Cris', 'cris@email');
// ==> Exemplo 02
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'usuário(a) não conectado');
}
mensagemLog('Atualizar página');
mensagemLog('Usuário(a) logado(a) com sucesso', 4857689);
let pessoa;
pessoa = {
    idfuncionario: 34568,
    nome: 'Lucia silva'
};
console.log(pessoa);
