function calcularRaizQuadrada() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero === '') {
        resultado.textContent = 'Por favor, digite um número!';
        resultado.style.color = 'red';
    } else {
        const numeroInt = parseFloat(numero);
        if (isNaN(numeroInt) || numeroInt < 0) {
            resultado.textContent = 'Por favor, digite um número válido e não negativo!';
            resultado.style.color = 'red';
        } else {
            const raiz = Math.sqrt(numeroInt);
            resultado.textContent = 'A raiz quadrada de ' + numeroInt + ' é ' + raiz.toFixed(2);
            resultado.style.color = 'green';
        }
    }
}
