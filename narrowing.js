"use strict";
function Validador(cpf) {
    if (typeof (cpf) === 'number')
        console.log("O dado precisa ser tratado");
    else
        console.log("o dado está okay");
}
const cpfA = '795.456.124-56';
const cpfB = 79545612456;
Validador(cpfA);
Validador(cpfB);
