import { useState, type FormEvent, type ReactNode } from 'react';

export interface ReaderComment {
  id: string;
  parentId: string | null;
  name: string;
  message: string;
  createdAt: string;
  authorRole: 'reader' | 'editor';
  status?: 'published' | 'hidden';
}

export interface CommentSectionProps {
  comments: ReaderComment[];
  onSubmit: (name: string, message: string, parentId: string | null) => Promise<void>;
  challenge?: ReactNode;
  submitting?: boolean;
  error?: string;
  heading?: string;
}

export function CommentSection({ comments, onSubmit, challenge, submitting = false, error, heading = 'Comentários' }: CommentSectionProps) {
  const [parentId, setParentId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [localError, setLocalError] = useState('');
  const roots = comments.filter((comment) => !comment.parentId || !comments.some((candidate) => candidate.id === comment.parentId));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim().length < 2 || message.trim().length < 3) {
      setLocalError('Indica o nome e escreve pelo menos três caracteres.');
      return;
    }
    setLocalError('');
    try {
      await onSubmit(name.trim(), message.trim(), parentId);
      setMessage('');
      setParentId(null);
    } catch {
      setLocalError('Não foi possível publicar. Tenta novamente.');
    }
  }

  function renderComment(comment: ReaderComment): ReactNode {
    const children = comments.filter((candidate) => candidate.parentId === comment.id);
    return (
      <li className="adc-comment" key={comment.id}>
        <div className="adc-comment__meta">
          <strong>{comment.status === 'hidden' ? 'Comentário oculto' : comment.name}</strong>
          {comment.authorRole === 'editor' && comment.status !== 'hidden' && <span className="adc-comment__badge">Equipa ADC</span>}
          <time dateTime={comment.createdAt}>{new Intl.DateTimeFormat('pt-PT', { dateStyle: 'medium' }).format(new Date(comment.createdAt))}</time>
        </div>
        <p className="adc-comment__text">{comment.status === 'hidden' ? 'Este comentário foi removido.' : comment.message}</p>
        {comment.status !== 'hidden' && <button className="adc-comment__reply" type="button" onClick={() => setParentId(comment.id)}>Responder</button>}
        {children.length > 0 && <ol className="adc-comment__replies">{children.map(renderComment)}</ol>}
      </li>
    );
  }

  const replyingTo = parentId ? comments.find((comment) => comment.id === parentId) : undefined;

  return (
    <section className="adc-comments" aria-label={heading}>
      <h2>{heading}</h2>
      {roots.length > 0 ? <ol className="adc-comments__list">{roots.map(renderComment)}</ol> : <p className="adc-comments__empty">Ainda não há comentários. Inicia a conversa.</p>}
      <form className="adc-comment-form" onSubmit={submit}>
        <h3>{replyingTo ? `Responder a ${replyingTo.name}` : 'Deixar um comentário'}</h3>
        {replyingTo && <button className="adc-comment-form__cancel" type="button" onClick={() => setParentId(null)}>Cancelar resposta</button>}
        <label htmlFor="adc-comment-name">Nome</label>
        <input id="adc-comment-name" value={name} onChange={(event) => setName(event.target.value)} maxLength={80} minLength={2} autoComplete="name" required />
        <label htmlFor="adc-comment-message">Comentário</label>
        <textarea id="adc-comment-message" value={message} onChange={(event) => setMessage(event.target.value)} maxLength={2000} minLength={3} rows={5} required />
        {challenge}
        {(error || localError) && <p className="adc-comment-form__error" role="alert">{error || localError}</p>}
        <button className="adc-btn adc-btn--primary" type="submit" disabled={submitting}>{submitting ? 'A publicar…' : 'Publicar comentário'}</button>
      </form>
    </section>
  );
}
