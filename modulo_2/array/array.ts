/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Uso de Colchetes:
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);

// ==> Exemplo 02 - Array Object (Objeto Array):
let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[3]);

// ==> Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas: Array<string> = ['Português', 'Inglês', 'Francês']
idiomas.push('Mandarin')
idiomas.push('Italiano')
idiomas.push('Espanhol')
console.log(idiomas);

// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
let idiomas2: Array<string> = ['Português', 'Inglês', 'Francês']
console.log(idiomas2.length)

// ==> Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5]
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]
console.log(listaNumeros)

// ==> Exemplo 06 - Exemplo de Array com laço de iteração
let linguagensArray: string[] = new Array('JAVA', 'PYTHON', 'PHP', 'C#')

function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray)

