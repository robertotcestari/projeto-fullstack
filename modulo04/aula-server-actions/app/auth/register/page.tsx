import { registerAction } from '../actions';
import RegisterForm from '@/components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Cadastro</h1>
      <RegisterForm action={registerAction} />
      <p className="mt-4 text-center">
        Já tem uma conta?{' '}
        <a href="/auth/login" className="text-blue-600 hover:underline">
          Fazer login
        </a>
      </p>
    </div>
  );
}
