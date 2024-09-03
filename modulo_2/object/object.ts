/* eslint-disable prettier/prettier */
/**
 * arquivo: objectType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'object'
 * data: 26/11/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/objects.html
 */

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
export { };
const pessoa = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 35,
    funcao: 'Dev'
}
console.log(pessoa);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario: { nome: string }) {
    return 'Seja bem-vinda! ' + funcionario.nome;

}
console.log();
console.log(onboarding01({ nome: 'Juliana' }));

// ==> Exemplo 03 -> object nomeados
interface Pessoa {
    nome: string,
    funcao: string
}

function onboarding02(pessoa: Pessoa) {
    return ('Seja bem vinda ' + pessoa.nome + '!. Sua função aqui na empresa será ' + pessoa.funcao + '.')
}
console.log();
console.log(onboarding02({ nome: 'Amanda', funcao: 'médica' }));


// ==> Exemplo 04 -> object como type alias

type Pessoa04 = {
    nome: string,
    funcao: string,
    linguagem: string
}
function onboarding03(pessoa: Pessoa04) {
    return ('Seja bem vinda ' + pessoa.nome + '!. Sua função aqui na empresa será ' + pessoa.funcao + '. você trabalhará com a liguagem ' + pessoa.linguagem)

}
console.log(onboarding03({ nome: 'Amanda', funcao: 'dev', linguagem: 'java' }));

// ==> Exemplo 05 -> usando optional no object
interface Pessoa05 {
    nome: string,
    funcao: string,
    linguagem: string,
    email?: string
}
function onboarding05(pessoa: Pessoa05) {
    return (
        'Seja bem vinda ' + pessoa.nome +
        '!. Sua função aqui na empresa será ' +
        pessoa.funcao + '. você trabalhará com a liguagem ' +
        pessoa.linguagem +
        'seu email:' + pessoa.email)
}

console.log(onboarding05({ nome: 'Luiza', funcao: 'dev', linguagem: 'TypeScript', email: 'luiza@email.com' }));

console.log();
// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)
interface Pessoa06 {
    nome: string,
    funcao: string,
    linguagem: string,
    readonly email: string
}
function onboarding06(pessoa: Pessoa06) {
    return (
        'Seja bem vinda ' + pessoa.nome +
        '!. Sua função aqui na empresa será ' +
        pessoa.funcao + '. você trabalhará com a liguagem ' +
        pessoa.linguagem +
        'seu email:' + pessoa.email)
}

console.log(onboarding06({ nome: 'Eduarda', funcao: 'dev', linguagem: 'Phyton', email: 'eduarda@email.com' }));

console.log();



// ==> Exemplo 07 -> tipos de extensões (heranças)
interface Mae {
    nome: string
}
interface Pai {
    sobrenome: string
}
interface Filha extends Mae, Pai {
    idade: number

}
const filha: Filha = {
    nome: 'Gabriela',
    sobrenome: 'Silva',
    idade: 35
}

console.log(filha);
// ==> Exemplo 08 -> Tipos de Interseções
interface Cachorro {
    tipo: string
}

interface Gato {
    tipo: string
}

type Animal = Cachorro & Gato

// ==> Exemplo 09 -> Generic objects
type Usuario = {
    nome: string,
    email: string
}
type Admin = {
    nome: string,
    email: string
    admin: true
}

//objeto
const usuario: Usuario = {
    nome: 'Miranda Borges',
    email: 'miranda@email.com'

}
const admin: Admin = {
    nome: 'Miranda Borges',
    email: 'miranda@email.com',
    admin: true

}
function acessarSistema<T>(usuario: T): T { //aceita os tipos admin e usuario
    return usuario
}
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));


//function acessarSistema(usuario: Usuario): Usuario{
//    return usuario;
//}

//console.log(acessarSistema(usuario));
console.log();
