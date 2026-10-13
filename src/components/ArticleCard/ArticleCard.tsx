import type { AnchorHTMLAttributes } from 'react';
import { cx } from '../../cx';
import { Tag, type TagTipo } from '../Tag/Tag';

export interface ArticleCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  href: string;
  tipo: Extract<TagTipo, 'noticia' | 'comentario'>;
  categoria: string;
  titulo: string;
  excerto: string;
  data: string;
}

const rotulo = { noticia: 'Notícia', comentario: 'Comentário' } as const;

export function ArticleCard({ tipo, categoria, titulo, excerto, data, className, ...rest }: ArticleCardProps) {
  return (
    <a {...rest} className={cx('adc-card', className)}>
      <span>
        <Tag tipo={tipo}>{rotulo[tipo]}</Tag>
      </span>
      <span className="adc-eyebrow">{categoria}</span>
      <h3 className="adc-card__title">{titulo}</h3>
      <p className="adc-card__excerpt">{excerto}</p>
      <div className="adc-card__foot">{data}</div>
    </a>
  );
}
