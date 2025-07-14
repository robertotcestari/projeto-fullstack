'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

type FormState = {
  errors?: Record<string, string>;
  message?: string;
} | null;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {pending ? 'Adicionando...' : 'Adicionar Comentário'}
    </button>
  );
}

export default function CommentForm({
  action,
}: {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
}) {
  const [state, formAction] = useActionState(action, null);

  return (
    <form
      action={formAction}
      className="space-y-4 bg-white p-6 rounded-lg border"
    >
      <h3 className="text-lg font-semibold">Adicionar um Comentário</h3>

      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Nome
        </label>
        <input
          type="text"
          id="author"
          name="author"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {state?.errors?.author && (
          <p className="mt-1 text-sm text-red-600">{state.errors.author}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Comentário
        </label>
        <textarea
          id="content"
          name="content"
          rows={3}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {state?.errors?.content && (
          <p className="mt-1 text-sm text-red-600">{state.errors.content}</p>
        )}
      </div>

      {state?.message && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
