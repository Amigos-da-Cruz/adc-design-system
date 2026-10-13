import type { ReactNode } from 'react';
import { useId } from 'react';

export interface SourceBoxProps {
  /** Cada fonte: título, data e ligação. Toda a notícia termina com esta caixa. */
  fontes: ReactNode[];
  titulo?: string;
}

export function SourceBox({ fontes, titulo = 'Fontes' }: SourceBoxProps) {
  const id = useId();
  return (
    <aside className="adc-sources" aria-labelledby={id}>
      <span className="adc-eyebrow" id={id}>
        {titulo}
      </span>
      <ol>
        {fontes.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ol>
    </aside>
  );
}
