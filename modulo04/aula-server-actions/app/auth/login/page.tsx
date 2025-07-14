import { loginAction } from '../actions';
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <LoginForm action={loginAction} />
      <p className="mt-4 text-center">
        Não tem uma conta?{' '}
        <a href="/auth/register" className="text-blue-600 hover:underline">
          Cadastre-se
        </a>
      </p>
    </div>
  );
}
