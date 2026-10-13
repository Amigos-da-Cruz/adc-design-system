import type { HTMLAttributes } from 'react';
import { cx } from '../../cx';

/** Divisor ornamental: dois filetes e um losango. Só decoração. */
export function Divider({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="separator" {...rest} className={cx('adc-divider', className)}>
      <i />
    </div>
  );
}
