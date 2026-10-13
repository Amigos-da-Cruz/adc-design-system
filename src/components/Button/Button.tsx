import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cx } from '../../cx';

type Base = { variante?: 'primario' | 'secundario' | 'texto' };
type AsLink = Base & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = Base & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
export type ButtonProps = AsLink | AsButton;

const mod = { primario: 'adc-btn--primary', secundario: 'adc-btn--secondary', texto: 'adc-btn--text' } as const;

export function Button({ variante = 'primario', className, ...rest }: ButtonProps) {
  const cls = cx('adc-btn', mod[variante], className);
  if ('href' in rest && rest.href !== undefined) return <a {...(rest as AsLink)} className={cls} />;
  return <button type="button" {...(rest as AsButton)} className={cls} />;
}
