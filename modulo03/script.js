// Elementos do DOM
const apiKeyInput = document.getElementById('apiKey');
const modelSelect = document.getElementById('modelSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const clearButton = document.getElementById('clearButton');
const copyButton = document.getElementById('copyButton');
const responseSection = document.getElementById('responseSection');
const responseContent = document.getElementById('responseContent');
const questionDisplay = document.getElementById('questionDisplay');
const questionText = document.getElementById('questionText');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const copyFeedback = document.getElementById('copyFeedback');
const charCount = document.getElementById('charCount');
const saveKeyCheckbox = document.getElementById('saveKey');

// Constantes
const STORAGE_KEY = 'ai_assistant_api_key';

// Inicialização
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    loadSavedApiKey();
    updateCharCounter();
    setupEventListeners();
}

// Carregar API Key salva
function loadSavedApiKey() {
    const savedKey = localStorage.getItem(STORAGE_KEY);
    if (savedKey) {
        apiKeyInput.value = savedKey;
        saveKeyCheckbox.checked = true;
    }
}

// Configurar event listeners
function setupEventListeners() {
    askButton.addEventListener('click', handleQuestion);
    clearButton.addEventListener('click', handleClear);
    copyButton.addEventListener('click', handleCopy);
    
    questionInput.addEventListener('input', updateCharCounter);
    questionInput.addEventListener('keydown', handleKeydown);
    
    saveKeyCheckbox.addEventListener('change', handleSaveKeyToggle);
    
    // Atalhos de teclado
    document.addEventListener('keydown', handleGlobalKeydown);
}

// Contador de caracteres
function updateCharCounter() {
    const count = questionInput.value.length;
    charCount.textContent = count;
    
    if (count > 900) {
        charCount.style.color = '#e74c3c';
    } else if (count > 800) {
        charCount.style.color = '#f39c12';
    } else {
        charCount.style.color = '#666';
    }
}

// Função para mostrar/esconder elementos
function showElement(element) {
    element.style.display = 'block';
}

function hideElement(element) {
    element.style.display = 'none';
}

// Função para mostrar erro
function showError(message) {
    errorMessage.textContent = message;
    showElement(errorMessage);
    setTimeout(() => {
        hideElement(errorMessage);
    }, 5000);
}

// Função para limpar estados anteriores
function clearPreviousStates() {
    hideElement(responseSection);
    hideElement(errorMessage);
    hideElement(loading);
    hideElement(copyFeedback);
}

// Função para validar entrada
function validateInput() {
    const apiKey = apiKeyInput.value.trim();
    const question = questionInput.value.trim();
    
    if (!apiKey) {
        showError('Por favor, insira sua API Key da OpenAI');
        return false;
    }
    
    if (!question) {
        showError('Por favor, digite uma pergunta');
        return false;
    }
    
    if (question.length < 5) {
        showError('A pergunta deve ter pelo menos 5 caracteres');
        return false;
    }
    
    return true;
}

// Função para fazer requisição à OpenAI
async function askOpenAI(question, apiKey) {
    const url = 'https://api.openai.com/v1/chat/completions';
    
    const selectedModel = modelSelect.value;
    
    const requestBody = {
        model: selectedModel,
        messages: [
            {
                role: 'system',
                content: 'Você é um assistente útil e responde de forma clara e concisa em português.'
            },
            {
                role: 'user',
                content: question
            }
        ],
        max_tokens: 600,
        temperature: 0.7
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('API Key inválida ou sem permissão');
            } else if (response.status === 429) {
                throw new Error('Muitas requisições. Tente novamente em alguns minutos');
            } else if (response.status === 500) {
                throw new Error('Erro interno do servidor. Tente novamente');
            } else {
                throw new Error(`Erro na API: ${response.status}`);
            }
        }

        const data = await response.json();
        
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Resposta vazia da API');
        }
        
    } catch (error) {
        console.error('Erro ao chamar OpenAI:', error);
        throw error;
    }
}

// Função principal para processar pergunta
async function handleQuestion() {
    clearPreviousStates();
    
    if (!validateInput()) {
        return;
    }
    
    // Salvar API Key se solicitado
    if (saveKeyCheckbox.checked) {
        localStorage.setItem(STORAGE_KEY, apiKeyInput.value.trim());
    }
    
    // Mostrar loading
    showElement(loading);
    askButton.disabled = true;
    askButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    
    try {
        const question = questionInput.value.trim();
        const apiKey = apiKeyInput.value.trim();
        
        const response = await askOpenAI(question, apiKey);
        
        // Mostrar pergunta e resposta
        questionText.textContent = question;
        responseContent.textContent = response;
        showElement(responseSection);
        showElement(clearButton);
        
        // Scroll suave para a resposta
        responseSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
    } catch (error) {
        showError(error.message);
    } finally {
        hideElement(loading);
        askButton.disabled = false;
        askButton.innerHTML = '<i class="fas fa-paper-plane"></i> Perguntar';
    }
}

// Função para limpar
function handleClear() {
    const shouldClear = confirm('Deseja limpar a resposta atual?');
    if (shouldClear) {
        hideElement(responseSection);
        hideElement(clearButton);
        hideElement(copyFeedback);
        questionInput.value = '';
        updateCharCounter();
        questionInput.focus();
    }
}

// Função para copiar
async function handleCopy() {
    try {
        const textToCopy = responseContent.textContent;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(textToCopy);
        } else {
            // Fallback para navegadores mais antigos
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
        
        // Mostrar feedback
        showElement(copyFeedback);
        setTimeout(() => {
            hideElement(copyFeedback);
        }, 3000);
        
    } catch (error) {
        showError('Erro ao copiar texto. Tente selecionar e copiar manualmente.');
    }
}

// Manipular toggle de salvar API Key
function handleSaveKeyToggle() {
    if (!saveKeyCheckbox.checked) {
        localStorage.removeItem(STORAGE_KEY);
    }
}

// Manipular teclas no textarea
function handleKeydown(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        handleQuestion();
    }
}

// Atalhos globais de teclado
function handleGlobalKeydown(e) {
    // Removido o atalho Ctrl+L - usar apenas o botão
}