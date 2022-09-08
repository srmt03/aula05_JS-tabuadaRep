/**********************************************************
 * Objetivo: Crianado funçoes pra calcular uma tabuada
 * Data: 04/08/2022
 * Autor: Samuel Matos 
 * Versão: 1.0
 *********************************************************/

const calcularTabuada = function(numero) 
{
    let tabuada = numero;
    let resultado;
    let cont = 0;
    
    /* While */
    // while (cont <= 10) 
    // {
    //     resultado = tabuada * cont;
    //     console.log(`${tabuada} x ${cont} = ${resultado}`);
    //     console.log(tabuada + ' x ' + cont + ' = ' + resultado);
    //     cont = cont + 1;
    //     //cont +=1;
    //     //cont++
    // }

    /* FOR */
    for (let cont = 0; cont <= 10; cont++) 
    {
        resultado = tabuada * cont;
        console.log(`${tabuada} x ${cont} = ${resultado}`);
        //console.log(tabuada + ' x ' + cont + ' = ' + resultado);
        
    }
}
module.exports = {
    calcularTabuada
}