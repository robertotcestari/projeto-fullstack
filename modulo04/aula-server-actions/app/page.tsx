export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Demonstração de Server Actions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="/contact"
          className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Formulário de Contato</h2>
          <p className="text-sm">Envie uma mensagem com validação</p>
        </a>

        <a
          href="/auth/login"
          className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Login</h2>
          <p className="text-sm">Sistema de autenticação</p>
        </a>

        <a
          href="/comments"
          className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Comentários</h2>
          <p className="text-sm">Adicione e visualize comentários</p>
        </a>

        <a
          href="/dashboard"
          className="bg-orange-600 text-white p-6 rounded-lg hover:bg-orange-700 text-center block"
        >
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p className="text-sm">Área administrativa protegida</p>
        </a>
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          Funcionalidades Demonstradas:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Server Actions para processamento de formulários</li>
          <li>Validação de formulários com tratamento de erros</li>
          <li>Estados de carregamento com useActionState e useFormStatus</li>
          <li>Progressive enhancement (funciona sem JavaScript)</li>
          <li>Padrão Post-Redirect-Get (PRG)</li>
          <li>Autenticação baseada em cookies</li>
          <li>Rotas protegidas</li>
        </ul>
      </div>
    </div>
  );
}
