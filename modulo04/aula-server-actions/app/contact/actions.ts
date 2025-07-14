'use server';

import { redirect } from 'next/navigation';

type FormState = {
  errors?: Record<string, string>;
  message?: string;
} | null;

function validateContactForm(formData: FormData) {
  const errors: Record<string, string> = {};

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validate name
  if (!name || name.trim().length < 2) {
    errors.name = 'Nome deve ter pelo menos 2 caracteres';
  }

  // Validate email
  if (!email || !email.includes('@')) {
    errors.email = 'Por favor, insira um endereço de email válido';
  }

  // Validate message
  if (!message || message.trim().length < 10) {
    errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: {
      name: name?.trim(),
      email: email?.trim(),
      message: message?.trim(),
    },
  };
}

export async function contactAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validation = validateContactForm(formData);

  if (!validation.isValid) {
    return {
      errors: validation.errors,
      message: 'Por favor, corrija os erros abaixo',
    };
  }

  // Simulate saving to database
  console.log('Saving contact:', validation.data);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Redirect after successful submission (PRG pattern)
  redirect('/contact/success');
}
