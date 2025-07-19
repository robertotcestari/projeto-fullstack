import { Todo } from '@/app/types/todo';

// Simulando um banco de dados em memória
const todos: Todo[] = [
  {
    id: 1,
    title: 'Aprender Next.js',
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Criar minha primeira API',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Fazer deploy da aplicação',
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

// Função para gerar IDs únicos
function generateId(): number {
  return Date.now();
}

// Funções para manipular os dados
export const todosData = {
  // Buscar todos os todos
  getAll: (): Todo[] => {
    return todos;
  },

  // Buscar todo por ID
  getById: (id: number): Todo | undefined => {
    return todos.find((todo) => todo.id === id);
  },

  // Criar novo todo
  create: (title: string): Todo => {
    const newTodo: Todo = {
      id: generateId(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todos.push(newTodo);
    return newTodo;
  },

  // Atualizar todo
  update: (
    id: number,
    updates: Partial<Pick<Todo, 'title' | 'completed'>>
  ): Todo | null => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return null;
    }

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...updates,
    };

    return todos[todoIndex];
  },

  // Deletar todo
  delete: (id: number): boolean => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return false;
    }

    todos.splice(todoIndex, 1);
    return true;
  },
};
