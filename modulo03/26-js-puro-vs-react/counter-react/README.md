# Contador React com Vite

Uma implementação do contador utilizando React e Vite, com as mesmas funcionalidades da versão vanilla JavaScript.

## Funcionalidades

✅ **Exibição do número atual** - O valor do contador é mostrado em destaque
✅ **Botões de controle** - +1, -1 e Reset para manipular o contador
✅ **Mudança de cores** - Visual diferente para números positivos, negativos e zero
✅ **Mensagens especiais** - Alertas especiais aparecem em múltiplos de 10

## Características Adicionais

- 🎨 **Design moderno e responsivo**
- ⌨️ **Suporte para teclado** (setas, +, -, r para reset)
- 🎭 **Animações suaves** para mudanças de valor
- 📱 **Interface adaptável** para dispositivos móveis
- ⚛️ **Implementação em React** utilizando hooks (useState, useEffect)

## Como executar

1. Instale as dependências:

```bash
npm install
```

1. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

1. Acesse no navegador:

```text
http://localhost:5173
```

### Atalhos de teclado

- `+`, `=`, `↑`: Incrementar
- `-`, `_`, `↓`: Decrementar
- `r`, `R`, `0`: Reset

## Estrutura do projeto

```text
counter-react/
├── public/              # Arquivos estáticos
├── src/                 # Código fonte
│   ├── App.jsx          # Componente principal do contador
│   ├── App.css          # Estilos específicos do contador
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada da aplicação
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
└── README.md            # Documentação
```

## Recursos visuais

- **Verde**: Números positivos
- **Vermelho**: Números negativos  
- **Cinza**: Zero
- **Dourado**: Mensagens especiais em múltiplos de 10

## Comparação com a versão vanilla JavaScript

Esta implementação usa os mesmos conceitos da versão vanilla JavaScript, mas aproveitando os recursos do React:

- **Estado** gerenciado com `useState` em vez de variáveis globais
- **Efeitos colaterais** tratados com `useEffect`
- **Renderização condicional** para mostrar/ocultar mensagens especiais
- **JSX** para definir a estrutura da UI de forma declarativa
