
// DOM Elements
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');
const sendButton = document.getElementById('sendButton');
const modelSelect = document.getElementById('modelSelect');
const apiKeyInput = document.getElementById('apiKeyInput');
const loadingOverlay = document.getElementById('loadingOverlay');

// Helper: Add message to chat
function addMessage(text, sender = 'user') {
  // sender can be 'user' or 'ai'
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

// Helper: Show/hide loading
function setLoading(isLoading) {
  if (isLoading) {
    loadingOverlay.classList.add('active');
    sendButton.disabled = true;
  } else {
    loadingOverlay.classList.remove('active');
    sendButton.disabled = false;
  }
}

// Handle chat form submit
async function submitForm(e) {
  e.preventDefault();
  const userMsg = messageInput.value.trim();
  const model = modelSelect.value;
  const apiKey = apiKeyInput.value.trim();
  if (!userMsg) return;

  if (!apiKey) {
    addMessage('Por favor, insira sua chave de API.', 'ai');
    return;
  }

  addMessage(userMsg, 'user');
  messageInput.value = '';
  setLoading(true);

  try {
    const aiText = await fetchOpenAIChatCompletion({ model, userMsg, apiKey });
    addMessage(aiText, 'ai');
  } catch (err) {
    addMessage('Erro ao conectar com OpenAI: ' + (err.message || err), 'ai');
  } finally {
    setLoading(false);
  }
}

// Fetch OpenAI chat completion
async function fetchOpenAIChatCompletion({ model, userMsg, apiKey }) {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const payload = {
    model,
    messages: [
      { role: 'system', content: 'Você é um assistente útil.' },
      { role: 'user', content: userMsg }
    ]
  };
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error('HTTP ' + response.status + ': ' + (await response.text()));
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Erro: resposta vazia.';
}

chatForm.addEventListener('submit', submitForm);
