import Script from 'next/script';

// Com next/script: Carregamento otimizado
function ExemploSimples() {
  return (
    <div>
      <h2>Exemplo Simples com Next.js Script</h2>
      <p>
        Este exemplo carrega o jQuery usando o componente Script do Next.js. O
        carregamento é otimizado e não bloqueia a renderização.
      </p>
      {/* Componente Script do Next.js */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="afterInteractive" // Carrega após a página ser interativa
      />
    </div>
  );
}

export default ExemploSimples;
