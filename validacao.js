"use strict";
//Literal types
//Adicionam uma camada extra de segurança, pois eu restrinjo ainda mais o valor que a variavel
let validador;
validador = 'autenticado';
console.log(validador);
if (validador === 'autenticado')
    console.log("você está liberado");
else
    console.log("você não está autenticado");
