# 🤖 Gerador de Currículos AI

Gerador Inteligente de Currículos com React, TypeScript, TailwindCSS v4 e IA.

## ✨ Funcionalidades

### 🚀 Parte 1 - Formulário e Preview

- **Layout Split-Screen** - Formulário à esquerda, preview à direita
- **Preview em Tempo Real** - Mudanças aparecem instantaneamente
- **Formulários Controlados** - Dados pessoais, habilidades e experiências
- **Listas Dinâmicas** - Adicionar/remover habilidades e experiências
- **Design Responsivo** - Mobile-first com TailwindCSS v4

### 🪄 Parte 2 - IA e Exportação

- **Botões Mágicos com IA** - Melhoria automática de textos (OpenAI)
- **Exportação PDF Profissional** - Múltiplos temas e layouts
- **Estados Assíncronos** - Loading, error handling, toasts
- **UX Avançada** - Animações, feedback visual, notificações

## 🛠️ Tecnologias

- **React 18** + TypeScript
- **Vite** - Build tool ultra-rápido
- **TailwindCSS v4** - Utility-first CSS
- **jsPDF** - Geração de PDF no frontend
- **OpenAI API** - Melhorias de texto com IA (opcional)

## 🚀 Como Usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar IA (Opcional)

1. Abra a aplicação
2. Clique em "⚙️ Configurar IA" no topo
3. Insira sua API key
4. Clique em "💾 Salvar"

### 3. Executar em desenvolvimento

```bash
npm run dev
```

### 4. Build para produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│ ├── Form/
│ │ ├── PersonalInfo.tsx # Dados pessoais
│ │ ├── Skills.tsx # Habilidades
│ │ ├── Experience.tsx # Experiências
│ │ └── AIEnhanceButton.tsx # Botão mágico IA
│ ├── Preview/
│ │ ├── CVPreview.tsx # Preview do currículo
│ │ └── ExportButton.tsx # Exportação PDF
│ ├── Layout/
│ │ ├── FormSection.tsx # Seção formulário
│ │ └── PreviewSection.tsx # Seção preview
│ └── UI/
│ └── Toast.tsx # Notificações
├── hooks/
│ ├── useCVData.ts # Gerenciamento estado CV
│ ├── useToast.ts # Gerenciamento toasts
│ └── useAIEnhancement.ts # Hook para IA
├── services/
│ ├── aiService.ts # Integração OpenAI
│ └── pdfService.ts # Geração PDF
├── types/
│ ├── cv.types.ts # Tipos do currículo
│ └── api.types.ts # Tipos das APIs
└── utils/
```

## 🎯 Funcionalidades Principais

### 📝 Formulário Inteligente

- Validação em tempo real
- Contadores de caracteres
- Campos obrigatórios marcados
- Listas dinâmicas com adicionar/remover

### 👁️ Preview Instantâneo

- Atualização em tempo real
- Design profissional
- Layout otimizado para impressão
- Indicação visual para campos vazios

### 🤖 Melhorias com IA

- **Resumo Profissional**: Tom profissional, palavras-chave
- **Experiências**: Verbos de ação, quantificação de resultados
- **Correções**: Gramática, ortografia, fluência

### 📄 Exportação PDF

- Múltiplos temas (Moderno, Clássico, Minimalista)
- Esquemas de cores customizáveis
- Tipografia profissional
- Download automático

## 🔧 Configuração da IA

Para usar as funcionalidades de IA:

1. **Criar conta na OpenAI**: https://platform.openai.com
2. **Gerar API Key**: Na seção "API Keys"
3. **Configurar na aplicação**:

- Clique em "⚙️ Configurar IA" no topo
- Cole sua API key
- Clique em "💾 Salvar"

🔒 **Segurança**: A chave é mantida apenas durante a sessão atual

## 🎨 Customização

### Temas PDF

- **Moderno**: Cores vibrantes, layout limpo
- **Clássico**: Preto e branco, formal
- **Minimalista**: Cinza, foco no conteúdo

### Cores Disponíveis

- Azul (padrão)
- Verde
- Roxo
- Cinza

## 📱 Responsividade

- **Desktop**: Layout split-screen
- **Tablet**: Colunas empilhadas
- **Mobile**: Interface otimizada para touch

## 🛡️ Segurança

- API keys apenas no frontend (não expostas)
- Validação de entrada de dados
- Sanitização de textos
- Error boundaries para falhas

## 🔄 Estados da Aplicação

- **Loading**: Spinners durante processamento IA
- **Success**: Toasts de confirmação
- **Error**: Mensagens de erro amigáveis
- **Empty**: Estados vazios com orientações

## 📚 Conceitos Aprendidos

### React Avançado

- Custom hooks
- Estado compartilhado
- Componentes controlados
- Props drilling e soluções
- Error boundaries

### TypeScript

- Interfaces complexas
- Generics
- Union types
- Type guards

### TailwindCSS v4

- Nova sintaxe de importação
- Gradientes modernos
- Estados interativos
- Grid/Flexbox responsivo

### APIs e Async

- Fetch API
- Error handling
- Loading states
- Environment variables

## 🚀 Próximos Passos

- [ ] Autenticação de usuários
- [ ] Salvamento em nuvem
- [ ] Múltiplos templates
- [ ] Análise de compatibilidade com vagas
- [ ] Integração com LinkedIn
- [ ] Modo colaborativo

## 📄 Licença

Este projeto é parte do curso de desenvolvimento fullstack e é destinado para fins educacionais.
