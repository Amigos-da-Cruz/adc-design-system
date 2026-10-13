import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Base/Button',
  component: Button,
  args: { children: 'Ver publicação', href: '#' },
  argTypes: { variante: { control: 'inline-radio', options: ['primario', 'secundario', 'texto'] } },
} satisfies Meta<typeof Button>;
export default meta;
type S = StoryObj<typeof meta>;

export const Primario: S = { args: { variante: 'primario' } };
export const Secundario: S = { args: { variante: 'secundario', children: 'Ler mais tarde' } };
export const Texto: S = { args: { variante: 'texto', children: 'Todas as notícias' } };
export const Desativado: S = { args: { variante: 'primario', href: undefined, disabled: true, children: 'Indisponível' } };
