import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { logoutAction } from '../auth/actions';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('auth-token');

  if (!authToken) {
    redirect('/auth/login');
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <form action={logoutAction}>
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Sair
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Mensagens</h2>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600">Novas mensagens de contato</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Comentários</h2>
          <p className="text-3xl font-bold text-green-600">8</p>
          <p className="text-sm text-gray-600">Aguardando moderação</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Usuários</h2>
          <p className="text-3xl font-bold text-purple-600">156</p>
          <p className="text-sm text-gray-600">Total registrados</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
        <div className="space-x-4">
          <a
            href="/contact"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Ver Mensagens
          </a>
          <a
            href="/comments"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Gerenciar Comentários
          </a>
        </div>
      </div>
    </div>
  );
}
