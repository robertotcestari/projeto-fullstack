'use client';

import { useState } from 'react';

interface TodoFormProps {
  onSubmit: (title: string) => void;
  isLoading?: boolean;
}

export default function TodoForm({
  onSubmit,
  isLoading = false,
}: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim()) {
      onSubmit(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite uma nova tarefa..."
        disabled={isLoading}
        className="
          flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white
          placeholder:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
        "
      />
      <button
        type="submit"
        disabled={isLoading || !title.trim()}
        className="
          px-6 py-2 bg-blue-500 text-white rounded-lg
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:bg-gray-300 disabled:cursor-not-allowed
        "
      >
        {isLoading ? 'Adicionando...' : 'Adicionar'}
      </button>
    </form>
  );
}
