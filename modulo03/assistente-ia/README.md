# 🤖 Assistente de IA

Uma aplicação web simples que permite fazer perguntas para uma IA (OpenAI GPT) e receber respostas de forma intuitiva.

## 🚀 Funcionalidades

### Básicas (Aula 22)
- ✅ Interface limpa e moderna
- ✅ Integração com API da OpenAI
- ✅ Validação de formulários
- ✅ Estados de loading e erro
- ✅ Layout responsivo

### Avançadas (Aula 25)
- ✅ **Botão Limpar** - Remove resposta e pergunta
- ✅ **Botão Copiar** - Copia resposta para área de transferência
- ✅ **Contador de caracteres** - Limite de 1000 caracteres
- ✅ **Salvar API Key** - Persiste localmente no navegador
- ✅ **Atalhos de teclado**:
 - `Ctrl + Enter` - Enviar pergunta
- ✅ **Animações sutis** - Feedback visual elegante
- ✅ **Scroll automático** - Para a resposta após envio

## 🛠️ Como usar

1. **Abra o arquivo `index.html`** em seu navegador
2. **Insira sua API Key da OpenAI** no campo do cabeçalho
3. **Digite sua pergunta** na área de texto
4. **Clique em "Perguntar"** ou use `Ctrl + Enter`
5. **Aguarde a resposta** da IA aparecer
6. **Use os botões** Copiar ou Limpar conforme necessário

## 🔑 Obtendo API Key da OpenAI

1. Acesse [platform.openai.com](https://platform.openai.com)
2. Faça login ou crie uma conta
3. Vá em "API Keys" no menu
4. Clique em "Create new secret key"
5. Copie e cole a chave no campo da aplicação

## 📱 Compatibilidade

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Desktop e mobile
- ✅ Suporte a clipboard API
- ✅ Fallback para navegadores antigos

## 🎯 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com gradientes e animações
- **JavaScript ES6+** - fetch, async/await, localStorage
- **Font Awesome** - Ícones elegantes
- **OpenAI API** - Inteligência artificial

## 📁 Estrutura

```
assistente-ia/
├── index.html # Estrutura da aplicação
├── style.css # Estilos e responsividade
├── script.js # Lógica e interatividade
└── README.md # Este arquivo
```

## 🔒 Privacidade

- API Key é armazenada apenas localmente no seu navegador
- Nenhum dado é enviado para outros servidores além da OpenAI
- Use o checkbox "Salvar API Key" para persistir entre sessões

## 🎨 Personalização

O CSS está bem organizado para facilitar customizações:
- Cores no topo do arquivo
- Animações podem ser desabilitadas
- Layout responsivo adaptável

## 🚀 Próximas funcionalidades (ideias)

- [ ] Histórico de conversas
- [ ] Temas (dark/light mode)
- [ ] Múltiplos provedores (Anthropic, Google)
- [ ] Markdown rendering
- [ ] Export de conversas

---

**Desenvolvido para as aulas 22 e 25 do Projeto Fullstack** 📚