# Sistema de Server Actions - Demo Completo

Uma aplicação Next.js completa demonstrando o uso de Server Actions com formulários, validação, autenticação e progressive enhancement.

## 🚀 Funcionalidades

- **Formulário de Contato** com validação completa
- **Sistema de Login/Cadastro** com cookies
- **Sistema de Comentários** com mutação de dados
- **Dashboard protegido** com autenticação
- **Progressive Enhancement** - funciona sem JavaScript
- **Estados de carregamento** com useFormStatus
- **Padrão Post-Redirect-Get (PRG)**

## 📁 Estrutura do Projeto

```
app/
├── contact/
│   ├── page.tsx              # Página do formulário de contato
│   ├── success/page.tsx      # Página de sucesso
│   └── actions.ts            # Server Actions para contato
├── auth/
│   ├── login/page.tsx        # Página de login
│   ├── register/page.tsx     # Página de cadastro
│   └── actions.ts            # Server Actions para auth
├── comments/
│   ├── page.tsx              # Página de comentários
│   └── actions.ts            # Server Actions para comentários
├── dashboard/
│   ├── page.tsx              # Dashboard protegido
│   └── actions.ts            # Server Actions do dashboard
├── layout.tsx                # Layout principal com navegação
└── page.tsx                  # Página inicial

components/
├── ContactForm.tsx           # Formulário de contato
├── LoginForm.tsx             # Formulário de login
├── RegisterForm.tsx          # Formulário de registro
└── CommentForm.tsx           # Formulário de comentários
```

## 🛠️ Como Executar

1. **Clone e instale as dependências:**

   ```bash
   cd aula-server-actions
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Acesse:** http://localhost:3000

## 🧪 Como Testar

### 1. Formulário de Contato

- Vá para `/contact`
- Teste validações deixando campos vazios
- Preencha corretamente e veja o redirecionamento para sucesso
- **Teste Progressive Enhancement:** Desabilite JavaScript no navegador e teste novamente

### 2. Sistema de Autenticação

- **Cadastro:** Vá para `/auth/register`
  - Teste validação de senha (mínimo 6 caracteres)
  - Teste confirmação de senha
  - Cadastre-se com dados válidos
- **Login:** Vá para `/auth/login`
  - Teste com email inválido
  - Teste com senha muito curta
  - Faça login com dados válidos

### 3. Dashboard Protegido

- Tente acessar `/dashboard` sem estar logado (redirecionamento para login)
- Faça login e acesse o dashboard
- Teste o logout

### 4. Sistema de Comentários

- Vá para `/comments`
- Adicione comentários com validação
- Veja os comentários existentes

### 5. Progressive Enhancement

Para testar que a aplicação funciona sem JavaScript:

**No Chrome:**

1. F12 → Settings → Debugger → Disable JavaScript
2. Recarregue a página
3. Teste todos os formulários

**No Firefox:**

1. about:config → javascript.enabled → false
2. Recarregue a página
3. Teste todos os formulários

## 🔧 Conceitos Demonstrados

### Server Actions

- Funções que rodam no servidor
- Validação de dados no servidor
- Processamento seguro de formulários

### useActionState

- Gerenciamento de estado de formulários
- Exibição de erros de validação
- Integração com Server Actions

### useFormStatus

- Estados de carregamento (pending)
- Desabilitação de botões durante envio
- Feedback visual para o usuário

### Validação

- Validação no servidor (segura)
- Mensagens de erro específicas
- Validação de email, senhas, campos obrigatórios

### Cookies e Autenticação

- Criação de cookies httpOnly
- Verificação de autenticação
- Redirecionamento baseado em estado

### Post-Redirect-Get (PRG)

- Previne reenvio de formulários
- Melhor experiência do usuário
- URLs limpas após submissão

## 📋 Fluxos de Teste

### Fluxo Completo de Usuário:

1. **Início:** Acesse a página inicial
2. **Contato:** Envie uma mensagem de contato
3. **Cadastro:** Crie uma conta nova
4. **Dashboard:** Acesse área protegida
5. **Comentários:** Adicione comentários
6. **Logout:** Saia da conta

### Teste de Progressive Enhancement:

1. Desabilite JavaScript
2. Repita o fluxo completo
3. Verifique que tudo funciona normalmente

## 🎯 Características Técnicas

- **Next.js 15** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **Server Actions** para mutações
- **Cookies** para sessão
- **Progressive Enhancement** por design

## 🚀 Próximos Passos

Para expandir esta aplicação, considere adicionar:

- Banco de dados real (PostgreSQL, MongoDB)
- Validação com Zod ou Yup
- Middleware para autenticação
- Sistema de roles/permissões
- Upload de arquivos
- Testes automatizados
- Deploy em produção

---

**Desenvolvido para demonstrar o poder dos Server Actions no Next.js 15** ⚡
