let imcValor = 0;
let classificacao = '';

function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    imcValor = peso / (altura * altura);
    let classificacao = '';

    if (imcValor < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imcValor >= 18.5 && imcValor <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imcValor >= 25 && imcValor <= 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById("imcResult").textContent = imcValor.toFixed(2);
    document.getElementById("classificacaoResult").textContent = classificacao;
}

function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    const mensagemTexto = document.getElementById("mensagemTexto");

    if (imcValor < 18.5) {
        mensagemTexto.textContent = "Parece que você está abaixo do peso. Lembre-se de se cuidar!";
    } else if (imcValor >= 18.5 && imcValor <= 24.9) {
        mensagemTexto.textContent = "Você está com o peso ideal! Parabéns pela saúde!";
    } else if (imcValor >= 25 && imcValor <= 29.9) {
        mensagemTexto.textContent = "Você está com sobrepeso. Tente cuidar da sua saúde!";
    } else {
        mensagemTexto.textContent = "Cuidado! Você está com obesidade. Consulte um médico!";
    }

    mensagem.classList.add("active");

    setTimeout(() => {
        mensagem.classList.remove("active");
    }, 5000);  // A mensagem ficará visível por 5 segundos
}

// Função para permitir o cálculo com a tecla Enter
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calcularIMC();
    }
});

// Função para aumentar ou diminuir o peso e altura com o scroll do mouse
document.getElementById("peso").addEventListener('wheel', function (event) {
    let currentValue = parseFloat(this.value);
    if (event.deltaY < 0) {
        // Scroll para cima, aumenta o valor
        this.value = currentValue + 0.1;
    } else if (event.deltaY > 0) {
        // Scroll para baixo, diminui o valor
        this.value = currentValue - 0.1;
    }
});

document.getElementById("altura").addEventListener('wheel', function (event) {
    let currentValue = parseFloat(this.value);
    if (event.deltaY < 0) {
        // Scroll para cima, aumenta o valor
        this.value = currentValue + 0.01;
    } else if (event.deltaY > 0) {
        // Scroll para baixo, diminui o valor
        this.value = currentValue - 0.01;
    }
});
