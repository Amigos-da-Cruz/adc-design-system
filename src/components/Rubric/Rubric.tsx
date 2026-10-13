import type { HTMLAttributes } from 'react';
import { cx } from '../../cx';

/** Rubrica litúrgica, em itálico e na cor brand. */
export function Rubric({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...rest} className={cx('adc-rubric', className)} />;
}

/** Versículo (V.) ou resposta (R.). */
export function Verse({ marca, children }: { marca: 'V.' | 'R.'; children: string }) {
  return (
    <p className="adc-verse">
      <b>{marca}</b> {children}
    </p>
  );
}

/** Parágrafo com a primeira letra em versal, na cor brand. */
export function Versal({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...rest} className={cx('adc-versal', className)} />;
}
