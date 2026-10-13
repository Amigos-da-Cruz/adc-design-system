import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = { title: 'Base/Divider', component: Divider } satisfies Meta<typeof Divider>;
export default meta;
export const Padrao: StoryObj<typeof meta> = {
  render: () => (
    <div style={{ maxWidth: 560 }}>
      <p>Fim de uma secção do artigo.</p>
      <Divider style={{ margin: '32px 0' }} />
      <p>Início da secção seguinte.</p>
    </div>
  ),
};
