'use client';

import { useState, useEffect } from 'react';
import { Todo } from './types/todo';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  // Função para buscar todos os todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/todos');
      const result = await response.json();

      if (result.success) {
        setTodos(result.data);
      } else {
        setError(result.error || 'Erro ao carregar tarefas');
      }
    } catch (err) {
      setError('Erro de conexão');
    } finally {
      setLoading(false);
    }
  };

  // Função para criar novo todo
  const createTodo = async (title: string) => {
    try {
      setActionLoading(-1); // -1 indica loading do form

      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      const result = await response.json();

      if (result.success) {
        setTodos((prev) => [result.data, ...prev]);
      } else {
        setError(result.error || 'Erro ao criar tarefa');
      }
    } catch (err) {
      setError('Erro de conexão');
    } finally {
      setActionLoading(null);
    }
  };

  // Função para alternar status de completo
  const toggleTodo = async (id: number) => {
    try {
      setActionLoading(id);

      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });

      const result = await response.json();

      if (result.success) {
        setTodos((prev) => prev.map((t) => (t.id === id ? result.data : t)));
      } else {
        setError(result.error || 'Erro ao atualizar tarefa');
      }
    } catch (err) {
      setError('Erro de conexão');
    } finally {
      setActionLoading(null);
    }
  };

  // Função para deletar todo
  const deleteTodo = async (id: number) => {
    try {
      setActionLoading(id);

      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setTodos((prev) => prev.filter((t) => t.id !== id));
      } else {
        setError(result.error || 'Erro ao deletar tarefa');
      }
    } catch (err) {
      setError('Erro de conexão');
    } finally {
      setActionLoading(null);
    }
  };

  // Carregar todos na montagem do componente
  useEffect(() => {
    fetchTodos();
  }, []);

  // Estatísticas dos todos
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📝 Minha Lista de Tarefas
          </h1>
          <p className="text-gray-600">
            Gerencie suas tarefas de forma simples e eficiente
          </p>
        </div>

        {/* Estatísticas */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Total: {totalCount} tarefas</span>
            <span>
              Concluídas: {completedCount} de {totalCount}
            </span>
            <span>
              Progresso:{' '}
              {totalCount > 0
                ? Math.round((completedCount / totalCount) * 100)
                : 0}
              %
            </span>
          </div>
          {totalCount > 0 && (
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(completedCount / totalCount) * 100}%`,
                }}
              />
            </div>
          )}
        </div>

        {/* Formulário para adicionar tarefa */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Adicionar Nova Tarefa</h2>
          <TodoForm onSubmit={createTodo} isLoading={actionLoading === -1} />
        </div>

        {/* Mensagem de erro */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700">{error}</p>
            <button
              onClick={() => setError(null)}
              className="text-red-500 hover:text-red-700 text-sm mt-1"
            >
              Fechar
            </button>
          </div>
        )}

        {/* Lista de tarefas */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Suas Tarefas</h2>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-gray-500 mt-2">Carregando tarefas...</p>
              </div>
            ) : todos.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Nenhuma tarefa encontrada</p>
                <p className="text-sm text-gray-400 mt-1">
                  Adicione sua primeira tarefa acima!
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    isLoading={actionLoading === todo.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botão para recarregar */}
        <div className="text-center mt-6">
          <button
            onClick={fetchTodos}
            disabled={loading}
            className="
              px-4 py-2 bg-gray-500 text-white rounded-lg
              hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500
              disabled:bg-gray-300 disabled:cursor-not-allowed
            "
          >
            {loading ? 'Carregando...' : 'Recarregar Tarefas'}
          </button>
        </div>
      </div>
    </div>
  );
}
