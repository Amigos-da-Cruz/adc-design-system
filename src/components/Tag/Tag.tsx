import type { HTMLAttributes } from 'react';
import { cx } from '../../cx';

export type TagTipo = 'noticia' | 'comentario' | 'documentado' | 'tradicao' | 'neutra';
const mod: Record<TagTipo, string | false> = {
  noticia: 'adc-tag--noticia',
  comentario: 'adc-tag--comentario',
  documentado: 'adc-tag--documentado',
  tradicao: 'adc-tag--tradicao',
  neutra: false,
};

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** O tipo distingue-se pela forma (cheia, contornada, filete preto, tracejada) e não só pela cor. */
  tipo?: TagTipo;
}

export function Tag({ tipo = 'neutra', className, ...rest }: TagProps) {
  return <span {...rest} className={cx('adc-tag', mod[tipo], className)} />;
}
