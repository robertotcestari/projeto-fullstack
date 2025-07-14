import { contactAction } from './actions';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Entre em Contato</h1>
      <ContactForm action={contactAction} />
    </div>
  );
}
