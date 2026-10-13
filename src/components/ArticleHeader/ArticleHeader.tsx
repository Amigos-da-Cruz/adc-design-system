import type { ReactNode } from 'react';
import { Tag, type TagTipo } from '../Tag/Tag';

export interface ArticleHeaderProps {
  tipo: Extract<TagTipo, 'noticia' | 'comentario'>;
  categoria: string;
  titulo: string;
  entrada?: string;
  autoria?: ReactNode;
}

const rotulo = { noticia: 'Notícia', comentario: 'Comentário' } as const;

export function ArticleHeader({ tipo, categoria, titulo, entrada, autoria }: ArticleHeaderProps) {
  return (
    <header className="adc-article-head">
      <div className="adc-article-head__meta">
        <Tag tipo={tipo}>{rotulo[tipo]}</Tag>
        <span className="adc-eyebrow">{categoria}</span>
      </div>
      <h1 className="adc-article-head__title">{titulo}</h1>
      {entrada && <p className="adc-article-head__lede">{entrada}</p>}
      {autoria && <p className="adc-article-head__by">{autoria}</p>}
    </header>
  );
}
