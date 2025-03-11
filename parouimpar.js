// Definindo números para verificar
let numero1 = 10;
let numero2 = 7;

// Função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log("O número " + numero + " é par.");
    } else {
        console.log("O número " + numero + " é ímpar.");
    }
}

// Verificando os números
verificarParOuImpar(numero1);
verificarParOuImpar(numero2);

