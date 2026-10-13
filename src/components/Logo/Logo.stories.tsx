import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';

const meta = {
  title: 'Marca/Logo',
  component: Logo,
  args: { largura: 140 },
  argTypes: { versao: { control: 'inline-radio', options: ['carmesim', 'pergaminho'] } },
} satisfies Meta<typeof Logo>;
export default meta;
type S = StoryObj<typeof meta>;

export const Carmesim: S = { args: { versao: 'carmesim' } };
export const Pergaminho: S = {
  args: { versao: 'pergaminho' },
  decorators: [(Story) => <div style={{ background: 'var(--brand)', padding: 32, display: 'inline-block' }}><Story /></div>],
};
export const Tamanhos: S = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
      <Logo largura={24} alt="" />
      <Logo largura={48} alt="" />
      <Logo largura={96} alt="" />
    </div>
  ),
};
