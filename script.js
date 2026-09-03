function calcularPeso() {
    // Obtém o valor do peso digitado pelo usuário na Terra
    const pesoTerra = parseFloat(document.getElementById('pesoTerra').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validação simples do input para evitar dados incorretos
    if (isNaN(pesoTerra) || pesoTerra <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira um peso válido.";
        resultadoDiv.style.color = "#ff4d4d";
        return;
    }

    // A gravidade em Marte é aproximadamente 38% da gravidade da Terra
    // Fator de conversão exato baseado em 3.71 m/s² vs 9.81 m/s²
    const fatorMarte = 0.378;
    const pesoMarte = (pesoTerra * fatorMarte).toFixed(2);

    // Apresenta o resultado na tela de forma limpa e dinâmica
    resultadoDiv.style.color = "#66fcf1";
    resultadoDiv.innerHTML = `Em Marte, você pesaria aproximadamente <strong>${pesoMarte} kg</strong>!`;
}
