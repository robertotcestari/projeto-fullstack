import { useEffect } from 'react';

// Sem next/script: Carregamento no useEffect
function ExemploSimples() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.async = true;

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Exemplo Simples</h2>
      <p>
        Este exemplo carrega o jQuery usando o useEffect do React. O script é
        adicionado ao head do documento.
      </p>
    </div>
  );
}

export default ExemploSimples;
