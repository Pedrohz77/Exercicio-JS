// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let num;

do {
    num = parseInt (prompt ("Digite o número 0 pra sair"))
    
}while (num !== 0)

console.log ("Vocé digitou 0, o programa foi encerrado");