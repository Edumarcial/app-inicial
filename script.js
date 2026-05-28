document.getElementById('form-vaga').addEventListener('submit', function(event) {
    // Impede o recarregamento da página ao enviar o formulário
    event.preventDefault();
// Comentário esquecido
    // Captura dos valores dos inputs
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    
    // Tratamento da altura: substitui vírgula por ponto e converte para float
    let alturaInput = document.getElementById('altura').value.replace(',', '.');
    const altura = parseFloat(alturaInput);

    const resultadoDiv = document.getElementById('resultado');
    
    // Limpa classes anteriores
    resultadoDiv.className = '';

    // Validação técnica de entrada
    if (isNaN(idade) || isNaN(altura)) {
        resultadoDiv.innerText = "Por favor, insira valores válidos para idade e altura.";
        resultadoDiv.classList.add('erro');
        return;
    }

    // Critério de elegibilidade: Altura >= 1.70 E Idade >= 18
    if (altura >= 1.70 && idade >= 18) {
        resultadoDiv.innerText = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!.`;
        resultadoDiv.classList.add('sucesso');
    } else {
        resultadoDiv.innerText = `Infelizmente você não é apto à vaga.`;
        resultadoDiv.classList.add('erro');
    }
});