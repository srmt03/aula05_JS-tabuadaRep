/**
 * Objetivo: Aplicar estruturas de repetição (While e For)
 * Data: 04/08/2022
 * Autor: Samuel Matos 
 * Versão: 1.0
 */


console.log('---------- Estrutura de Repetição: Calcular Tabuada ----------');
//Import da biblioteca radline para interacao com o usuario
var readline = require('readline');
const { calcularTabuada } = require('./modulos/tabuada.js')

//Instancia do objeto para entrada e saida de dados via prompt 
var entradaDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

entradaDados.question('Escolha a tabuada que deseja calcular: \n\t', function (numero) {
    let tabuada = numero;
    calcularTabuada(tabuada); 
})