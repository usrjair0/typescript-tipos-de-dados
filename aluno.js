"use strict";
class Aluno {
    constructor(id, nome, certificados) {
        this.Id = id;
        this.Nome = nome;
        this.Certificados = certificados;
    }
    novoCertificado() {
        return this.Certificados++;
    }
}
const aluno1 = new Aluno(1, "Jairo", 2);
aluno1.novoCertificado();
aluno1.novoCertificado();
aluno1.novoCertificado();
console.log(aluno1);
