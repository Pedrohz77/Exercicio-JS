// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.
do {
opcao = prompt("MENU\n\n Escolha uma opção: \n Escolha um exercício: \n1 - Exercício 1 \n2 - Exercício 2  \n3 - Exercício 3 \n4 - Exercício 4 \n5 - Exercício 5 \n6 - Exercício 6 \n0 - Sair do menu ");

switch (opcao) {

    case "0":
    break;
   
    case "1":
    exercicio1()
    break;
   
    case "2":
    exercicio2()
    break;
    
    case "3":
    exercicio3()
    break;

    case "4":
    exercicio4()
    break;

    case "5":
    exercicio5()
    break;

    case "6":
    exercicio6()
    break;

    default: 
    break;
}

} while (opcao != "0")

function exercicio1() {

    console.log("Exercício 1:")
    console.log("Imprimir números de 1 a 10 utilizando o loop for.")

    for (let num = 1; num <=10; num++){

    console.log (num)
    
    }
}

function exercicio2() {
    
    console.log("Exercício 2:")
    console.log("Imprimir números pares de 1 a 10.")

    for (let pares =2; pares <=10; pares+=2){
    console.log (pares)
}
}

function exercicio3() {
   
    console.log("Exercício 3:")
    console.log("Faça um programa que imprima os números ímpares de 0 a 50.")

    for (let impares =1; impares <=50; impares+=2){
    console.log (impares)
}
}

function exercicio4() {
    
    console.log("Exercício 4:")
    console.log("Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.")
    let num = parseInt (prompt ("Digite um número para ver na tabuada: "));

    for (let tabuada = 1; tabuada <=10; tabuada++){
    console.log (tabuada * num)
}
}

function exercicio5() {

    let num1 = 1;
    let num2 = 1;

    console.log("Exercício 5:")
    console.log("Imprimir os primeiros 10 números da sequência de Fibonacci.")

    console.log("Os primeiro 10 números da sequência são: ")
    console.log(num1);
    console.log(num2);

    for(let i = 2; i < 10; i++){
    let res= num1 + num2;
    console.log(res);

    num1 = num2;
    num2 = res;
}
}

function exercicio6() {

    let par = 0;

    console.log("Exercício 6:")
    console.log(" Imprimir números pares de 0 a 20 utilizando o loop while.")

    console.log("Números pares de 0 a 20: ");

    while(par <= 20){
    if(par % 2 == 0){
        console.log(par)
    }
    par ++;
}
}