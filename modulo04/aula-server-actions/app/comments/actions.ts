'use server';

import { redirect } from 'next/navigation';

type FormState = {
  errors?: Record<string, string>;
  message?: string;
} | null;

function validateCommentForm(formData: FormData) {
  const errors: Record<string, string> = {};

  const author = formData.get('author') as string;
  const content = formData.get('content') as string;

  // Validate author
  if (!author || author.trim().length < 2) {
    errors.author = 'O nome deve ter pelo menos 2 caracteres';
  }

  // Validate content
  if (!content || content.trim().length < 5) {
    errors.content = 'O comentário deve ter pelo menos 5 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: { author: author?.trim(), content: content?.trim() },
  };
}

export async function addCommentAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validation = validateCommentForm(formData);

  if (!validation.isValid) {
    return {
      errors: validation.errors,
      message: 'Por favor, corrija os erros de validação',
    };
  }

  // Simulate saving to database
  console.log('Saving comment:', validation.data);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Redirect back to comments page (PRG pattern)
  redirect('/comments');
}
