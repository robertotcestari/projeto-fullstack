// Elementos do DOM
const counterValue = document.getElementById('counter-value');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const specialMessage = document.getElementById('special-message');
const counterDisplay = document.querySelector('.counter-display');

// Estado do contador
let count = 0;

// Função para atualizar a exibição do contador
function updateDisplay() {
    // Atualiza o valor
    counterValue.textContent = count;
    
    // Adiciona animação de mudança
    counterValue.classList.add('changing');
    setTimeout(() => {
        counterValue.classList.remove('changing');
    }, 300);
    
    // Remove classes de cor anteriores
    counterDisplay.classList.remove('positive', 'negative', 'zero');
    
    // Aplica cor baseada no valor
    if (count > 0) {
        counterDisplay.classList.add('positive');
    } else if (count < 0) {
        counterDisplay.classList.add('negative');
    } else {
        counterDisplay.classList.add('zero');
    }
    
    // Verifica se é múltiplo de 10 e não é zero
    if (count !== 0 && count % 10 === 0) {
        showSpecialMessage();
    } else {
        hideSpecialMessage();
    }
}

// Função para mostrar mensagem especial
function showSpecialMessage() {
    let message;
    
    if (count > 0) {
        message = `🎉 Parabéns! Você chegou a ${count}! 🎉`;
    } else {
        message = `⚠️ Atenção! Contador está em ${count}! ⚠️`;
    }
    
    specialMessage.textContent = message;
    specialMessage.classList.remove('hidden');
}

// Função para esconder mensagem especial
function hideSpecialMessage() {
    specialMessage.classList.add('hidden');
}

// Event listeners para os botões
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Adiciona suporte para teclado
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case '+':
        case '=':
        case 'ArrowUp':
            event.preventDefault();
            count++;
            updateDisplay();
            break;
        case '-':
        case '_':
        case 'ArrowDown':
            event.preventDefault();
            count--;
            updateDisplay();
            break;
        case 'r':
        case 'R':
        case '0':
            event.preventDefault();
            count = 0;
            updateDisplay();
            break;
    }
});

// Inicializa a exibição
updateDisplay();
