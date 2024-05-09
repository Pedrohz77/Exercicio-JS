// Imprimir os primeiros 10 números da sequência de Fibonacci.

let num1 = 1;
let num2 = 1;

console.log("Os primeiro 10 números da sequência são: ")
console.log(num1);
console.log(num2);

for(let i = 2; i < 10; i++){
    let res= num1 + num2;
    console.log(res);

    num1 = num2;
    num2 = res;
}


