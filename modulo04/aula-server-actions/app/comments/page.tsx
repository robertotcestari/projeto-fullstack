import { addCommentAction } from './actions';
import CommentForm from '@/components/CommentForm';

// Simulated comments data
const initialComments = [
  {
    id: '1',
    author: 'João Silva',
    content: 'Este é um ótimo artigo! Obrigado por compartilhar.',
    createdAt: new Date('2025-07-10'),
  },
  {
    id: '2',
    author: 'Maria Santos',
    content: 'Aprendi muito com isso. Aguardando mais conteúdo.',
    createdAt: new Date('2025-07-12'),
  },
];

export default function CommentsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Comentários</h1>

      <CommentForm action={addCommentAction} />

      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Comentários Anteriores</h2>
        {initialComments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">{comment.author}</h3>
              <span className="text-sm text-gray-500">
                {comment.createdAt.toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
