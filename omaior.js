// Definindo três números
let num1 = 15;
let num2 = 27;
let num3 = 10;

// Verificando o maior número
let maiorNumero;

if (num1 >= num2 && num1 >= num3) {
    maiorNumero = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maiorNumero = num2;
} else {
    maiorNumero = num3;
}

// Exibindo o maior número no console
console.log("O maior número é: " + maiorNumero);
