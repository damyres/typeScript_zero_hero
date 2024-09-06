/* eslint-disable prefer-const */
/**
 * arquivo: optionalParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Optional Parameters' em funções no no Typescript
 * data: 14/02/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { }
// ==> Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log('Id funcionário...', idPessoa, 'Nome: ', nome);
    if (email != undefined) {
        console.log('Email..', email);
    }

}
informarDadosPessoa(1, 'Maria Luiza');
informarDadosPessoa(2, 'Cris', 'cris@email');

// ==> Exemplo 02
function mensagemLog(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'usuário(a) não conectado');
}
mensagemLog('Atualizar página')
mensagemLog('Usuário(a) logado(a) com sucesso', 4857689)

// ==> Exemplo 03
type Pessoa = {
    idfuncionario: number,
    nome: string,
    idade?: number
    email?: string
}

let pessoa: Pessoa;
pessoa = {
    idfuncionario: 34568,
    nome: 'Lucia silva'
}
console.log(pessoa);