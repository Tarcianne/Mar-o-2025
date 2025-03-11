// Função que exibe o número + false se for par ou true se for ímpar
function verificarNumero(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par: false");
    } else {
        console.log(numero + " é ímpar: true");
    }
}

// Testando a função com alguns números
verificarNumero(2);  // Exibe: 2 é par: false
verificarNumero(3);  // Exibe: 3 é ímpar: true
verificarNumero(4);  // Exibe: 4 é par: false
verificarNumero(7);  // Exibe: 7 é ímpar: true
