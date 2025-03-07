function verificarParOuImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    
    if (numero === '') {
        resultado.textContent = 'Por favor, digite um número!';
        resultado.style.color = 'red';
    } else {
        const numeroInt = parseInt(numero);
        if (isNaN(numeroInt)) {
            resultado.textContent = 'Por favor, digite um número válido!';
            resultado.style.color = 'red';
        } else if (numeroInt % 2 === 0) {
            resultado.textContent = 'O número ' + numeroInt + ' é Par!';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'O número ' + numeroInt + ' é Ímpar!';
            resultado.style.color = 'blue';
        }
    }
}
