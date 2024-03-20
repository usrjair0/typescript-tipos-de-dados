function Validador(cpf: number | string){
    if(typeof(cpf) === 'number')
        console.log("O dado precisa ser tratado");
    else
        console.log("o dado está okay")
}

const cpfA:string = '795.456.124-56';
const cpfB:number = 79545612456;

Validador(cpfA);
Validador(cpfB);