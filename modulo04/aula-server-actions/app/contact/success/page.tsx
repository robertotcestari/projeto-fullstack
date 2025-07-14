export default function ContactSuccessPage() {
  return (
    <div className="max-w-md mx-auto mt-8 text-center">
      <h1 className="text-2xl font-bold mb-6 text-green-600">
        Mensagem Enviada!
      </h1>
      <p className="text-gray-600 mb-4">
        Obrigado pela sua mensagem. Entraremos em contato em breve.
      </p>
      <a href="/contact" className="text-blue-600 hover:underline">
        Enviar outra mensagem
      </a>
    </div>
  );
}
