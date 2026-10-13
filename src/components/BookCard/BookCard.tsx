import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';

export interface BookCardProps {
  colecao: string;
  titulo: string;
  subtitulo?: string;
  creditos?: string;
  href: string;
  /** Capa real (imagem). Por omissão mostra o logótipo sobre brand. */
  capa?: ReactNode;
  acao?: string;
}

export function BookCard({ colecao, titulo, subtitulo, creditos, href, capa, acao = 'Ver obra' }: BookCardProps) {
  return (
    <article className="adc-book">
      <div className="adc-book__cover">{capa ?? <Logo versao="pergaminho" alt="" />}</div>
      <div>
        <span className="adc-eyebrow">{colecao}</span>
        <h3 className="adc-book__title">{titulo}</h3>
        {subtitulo && <p className="adc-book__sub">{subtitulo}</p>}
        {creditos && <p className="adc-book__credit">{creditos}</p>}
        <Button href={href}>{acao}</Button>
      </div>
    </article>
  );
}
