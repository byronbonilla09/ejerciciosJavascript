/*1. Crear una función que reciba dos parámetros: cantidad y un arreglo de números. 
La función debera retornar un arreglo del tamaño definido en el parámetro cantidad con 
números aleatorios entre 1 y 100 que no se repitan y que no existan en el arreglo del segúndo parámetro.
Agregue las validaciones que considere necesarias a los parámetros de entrada.
*@Author: Byron Bonilla
**/
function process1(cantidad, arreglo){
    if ((cantidad + arreglo.length) > 100) {
        return 'Error: en esas condiciones el arreglo no puede ser llenado.';
    }
    let arregloOut = [];
    for (var i = 0; i < cantidad; i++) {
         let num = Math.floor(Math.random() * (100 - 1) + 1);
         let blDiferente = false;
        while(!blDiferente){
             if(!arregloOut.includes(num) && !arreglo.includes(num)){
                arregloOut[i] = num;
                blDiferente = true;
             }
             num = Math.floor(Math.random() * (101 - 1) + 1);
        }
    }
    return arregloOut;
}


console.log(process1(84,[1,2,3,4,5,6,7,8,9,10,22,84,46,37,60,69]).toString()); 