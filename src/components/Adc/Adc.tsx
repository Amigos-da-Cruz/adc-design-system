import type { HTMLAttributes } from 'react';
import { cx } from '../../cx';

export type Tema = 'claro' | 'mariano';

export interface AdcProps extends HTMLAttributes<HTMLDivElement> {
  /** Tema de cor. Mariano é para conteúdo dedicado a Nossa Senhora. */
  tema?: Tema;
}

/** Raiz do sistema: aplica fundo, texto e tema. Envolve qualquer bloco que use os componentes. */
export function Adc({ tema = 'claro', className, ...rest }: AdcProps) {
  return <div {...rest} className={cx('adc', className)} data-theme={tema} />;
}
