import Image from 'next/image';

function Profile() {
  return (
    <Image
      src="/images/me.jpg" // Imagem na pasta /public
      alt="Descrição da imagem"
      width={500} // Atributo necessário para a reserva de espaço
      height={500} // Atributo necessário para a reserva de espaço
      priority // Use para imagens de alta prioridade
    />
  );
}

export default Profile;
