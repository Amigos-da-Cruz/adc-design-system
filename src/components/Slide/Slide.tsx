import type { ReactNode } from 'react';
import { cx } from '../../cx';
import { Divider } from '../Divider/Divider';
import { Logo } from '../Logo/Logo';

export interface SlideProps {
  /** capa: fundo brand com gancho. conteudo: fundo surface, título e corpo curto. */
  variante: 'capa' | 'conteudo';
  eyebrow: string;
  titulo: string;
  /** Só no slide de conteúdo. Cerca de 30 palavras no máximo. */
  corpo?: ReactNode;
  perfil?: string;
}

/** Slide de carrossel 4:5, desenhado a 540 × 675 (exportar a 1080 × 1350). */
export function Slide({ variante, eyebrow, titulo, corpo, perfil = '@amigosdacruz.pt' }: SlideProps) {
  const capa = variante === 'capa';
  return (
    <section className={cx('adc-slide', capa && 'adc-slide--capa')}>
      <div>
        <span className="adc-eyebrow">{eyebrow}</span>
        <h2 className="adc-slide__title">{titulo}</h2>
        {!capa && (
          <>
            <Divider style={{ margin: '24px 0' }} />
            <p className="adc-slide__body">{corpo}</p>
          </>
        )}
      </div>
      <div className="adc-slide__foot">
        <span>{perfil}</span>
        <Logo versao={capa ? 'pergaminho' : 'carmesim'} largura={28} alt="" />
      </div>
    </section>
  );
}
