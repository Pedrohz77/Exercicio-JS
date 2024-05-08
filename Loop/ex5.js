// Imprimir os primeiros 10 números da sequência de Fibonacci.


let num1 = 0;
let num2 = 1;

for (let cont =1; cont <=10; cont++){
    res= num1 + num2;
    num1=num2;
    num2=res;

    console.log (res);
}


