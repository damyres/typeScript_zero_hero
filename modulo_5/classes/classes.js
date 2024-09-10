"use strict";
/**
 * arquivo: classes.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Classes Typescript
 * data: 03/04/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa1 = new Pessoa('Maria', 'Lucia');
console.log(pessoa1.nomeCompleto());
//==> Exemplo 02 - Classes (sem constructor)
class Estudante {
}
// Criar um objeto ou a instancia
const estudante = new Estudante();
//inicialiar o objeto
estudante.codigoEstudante = 3454;
estudante.nomeEstudante = 'Pedro';
//acessar os campos 
console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);
//==> Exemplo 03 - Classes (com constructor)
class Aluno {
    constructor(idAluno, nomeAluno, matriculaAluno) {
        this.idAluno = idAluno;
        this.nomeAluno = nomeAluno;
        this.matriculaAluno = matriculaAluno;
    }
    listarAluno() {
        console.log('Id: ' + this.idAluno, 'Nome: ' + this.nomeAluno, 'Matricula: ' + this.matriculaAluno);
    }
}
const aluno1 = new Aluno(34, 'Luis Otávio Gonçalves', 456);
console.log(aluno1.listarAluno());
// Inicializar o objeto:
