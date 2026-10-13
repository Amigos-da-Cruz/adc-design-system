import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = {
  title: 'Base/Tag',
  component: Tag,
  args: { children: 'Notícia' },
  argTypes: { tipo: { control: 'select', options: ['noticia', 'comentario', 'documentado', 'tradicao', 'neutra'] } },
} satisfies Meta<typeof Tag>;
export default meta;
type S = StoryObj<typeof meta>;

export const Noticia: S = { args: { tipo: 'noticia', children: 'Notícia' } };
export const Comentario: S = { args: { tipo: 'comentario', children: 'Comentário' } };
export const Documentado: S = { args: { tipo: 'documentado', children: 'Documentado' } };
export const TradicaoPiedosa: S = { args: { tipo: 'tradicao', children: 'Tradição piedosa' } };
export const Neutra: S = { args: { tipo: 'neutra', children: 'Categoria' } };
