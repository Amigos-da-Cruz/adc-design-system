import type { ImgHTMLAttributes } from 'react';
import { cx } from '../../cx';
import carmesim from '../../assets/logo-adc-carmesim.svg';
import pergaminho from '../../assets/logo-adc-pergaminho.svg';

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width'> {
  /** carmesim: fundos claros. pergaminho: sobre brand. */
  versao?: 'carmesim' | 'pergaminho';
  /** Largura em px. Mínimo 24px em ecrã. */
  largura?: number;
}

export function Logo({ versao = 'carmesim', largura = 96, alt = 'Amigos da Cruz', className, ...rest }: LogoProps) {
  return (
    <img
      {...rest}
      className={cx('adc-logo', className)}
      src={versao === 'carmesim' ? carmesim : pergaminho}
      width={Math.max(24, largura)}
      alt={alt}
    />
  );
}
