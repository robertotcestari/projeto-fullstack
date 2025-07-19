'use client';

import { Todo } from '@/app/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  isLoading = false,
}: TodoItemProps) {
  return (
    <div
      className={`
      flex items-center gap-3 p-4 border rounded-lg
      ${
        todo.completed
          ? 'bg-green-50 border-green-200'
          : 'bg-white border-gray-200'
      }
      ${isLoading ? 'opacity-50 pointer-events-none' : ''}
    `}
    >
      {/* Checkbox para marcar como completo */}
      <button
        onClick={() => onToggle(todo.id)}
        disabled={isLoading}
        className={`
          w-5 h-5 rounded border-2 flex items-center justify-center
          ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400 bg-white'
          }
          disabled:cursor-not-allowed
        `}
      >
        {todo.completed && (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Título da tarefa */}
      <span
        className={`
        flex-1 text-left
        ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}
      `}
      >
        {todo.title}
      </span>

      {/* Data de criação */}
      <span className="text-xs text-gray-400">
        {new Date(todo.createdAt).toLocaleDateString('pt-BR')}
      </span>

      {/* Botão de deletar */}
      <button
        onClick={() => onDelete(todo.id)}
        disabled={isLoading}
        className="
          text-red-500 hover:text-red-700 p-1 rounded
          disabled:cursor-not-allowed disabled:opacity-50
        "
        title="Deletar tarefa"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
