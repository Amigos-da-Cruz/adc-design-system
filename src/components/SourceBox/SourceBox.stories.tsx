import type { Meta, StoryObj } from '@storybook/react-vite';
import { SourceBox } from './SourceBox';

const meta = { title: 'Blog/SourceBox', component: SourceBox } satisfies Meta<typeof SourceBox>;
export default meta;
export const Padrao: StoryObj<typeof meta> = {
  args: {
    fontes: [
      'Documento primário citado: título, data e ligação para o texto integral.',
      'Comunicado oficial: entidade, data e ligação.',
      <>Estudo académico: autor, obra, ano e página. <a href="#">Ver na fonte</a></>,
    ],
  },
};
