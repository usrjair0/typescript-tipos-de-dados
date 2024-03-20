class Aluno {
    Id: number; 
    Nome: string;
    Certificados: number;

    constructor (id: number, nome: string, certificados:number){
        this.Id = id;
        this.Nome = nome;
        this.Certificados = certificados;
    }

    novoCertificado():number{
        return this.Certificados++;
    }
}
const aluno1 = new Aluno(1, "Jairo", 2);
aluno1.novoCertificado();
aluno1.novoCertificado();
aluno1.novoCertificado();
console.log(aluno1)