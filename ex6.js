// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela
// é maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let anoNascimento = parseInt(prompt("Digite seu ano de nascimento") )

let anoAtual = 2024;
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    console.log("Maior de idade");
    console.log("Sua idade é: " + idade );
} 

else {
    console.log("Menor de idade");
    console.log("Sua idade é: " + idade );
} 