import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slide } from './Slide';

const meta = { title: 'Redes/Slide', component: Slide, parameters: { layout: 'padded' } } satisfies Meta<typeof Slide>;
export default meta;
type S = StoryObj<typeof meta>;

export const Capa: S = { args: { variante: 'capa', eyebrow: 'Doutrina', titulo: 'Porque se ajoelha a Igreja diante do altar?' } };
export const Conteudo: S = {
  args: {
    variante: 'conteudo',
    eyebrow: '1 / 5',
    titulo: 'Um gesto do corpo',
    corpo: 'Exemplo de slide de conteúdo: um título que abre a ideia e um corpo curto, com cerca de trinta palavras, que o desenvolve sem o repetir.',
  },
};
