'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type FormState = {
  errors?: Record<string, string>;
  message?: string;
} | null;

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateLoginForm(formData: FormData) {
  const errors: Record<string, string> = {};

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validate email
  if (!email || !validateEmail(email)) {
    errors.email = 'Por favor, insira um endereço de email válido';
  }

  // Validate password
  if (!password || password.length < 6) {
    errors.password = 'A senha deve ter pelo menos 6 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: { email: email?.trim(), password },
  };
}

function validateRegisterForm(formData: FormData) {
  const errors: Record<string, string> = {};

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  // Validate name
  if (!name || name.trim().length < 2) {
    errors.name = 'O nome deve ter pelo menos 2 caracteres';
  }

  // Validate email
  if (!email || !validateEmail(email)) {
    errors.email = 'Por favor, insira um endereço de email válido';
  }

  // Validate password
  if (!password || password.length < 6) {
    errors.password = 'A senha deve ter pelo menos 6 caracteres';
  }

  // Validate password confirmation
  if (password !== confirmPassword) {
    errors.confirmPassword = 'As senhas não coincidem';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: { name: name?.trim(), email: email?.trim(), password },
  };
}

export async function loginAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validation = validateLoginForm(formData);

  if (!validation.isValid) {
    return {
      errors: validation.errors,
    };
  }

  // Simulate authentication
  console.log('Authenticating user:', validation.data.email);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Set authentication cookie
  const cookieStore = await cookies();
  cookieStore.set('auth-token', 'fake-jwt-token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  // Redirect to dashboard (PRG pattern)
  redirect('/dashboard');
}

export async function registerAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validation = validateRegisterForm(formData);

  if (!validation.isValid) {
    return {
      errors: validation.errors,
    };
  }

  // Simulate user creation
  console.log('Creating user:', validation.data);
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Set authentication cookie
  const cookieStore = await cookies();
  cookieStore.set('auth-token', 'fake-jwt-token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  // Redirect to dashboard (PRG pattern)
  redirect('/dashboard');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
  redirect('/auth/login');
}
