const mostrarDados  = <T>(array:T[]) =>{
    array.forEach(element => {
        console.log(element)
    });
}
const A: number[]= [1,2,3];
mostrarDados(A);

const B:string[] = ["um", "dois", "três"];
mostrarDados(B);
