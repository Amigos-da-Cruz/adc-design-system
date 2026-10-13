import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArticleHeader } from './ArticleHeader';

const meta = {
  title: 'Blog/ArticleHeader',
  component: ArticleHeader,
  args: {
    tipo: 'noticia',
    categoria: 'Igreja em Portugal',
    titulo: 'Título de notícia em duas linhas, informativo e sóbrio',
    entrada: 'Entrada de uma ou duas frases que diz o essencial e remete para a fonte, sem repetir o título.',
    autoria: 'Por Amigos da Cruz · 13 de outubro de 2026 · 5 min de leitura',
  },
  argTypes: { tipo: { control: 'inline-radio', options: ['noticia', 'comentario'] } },
} satisfies Meta<typeof ArticleHeader>;
export default meta;
type S = StoryObj<typeof meta>;

export const Noticia: S = {};
export const Comentario: S = { args: { tipo: 'comentario', categoria: 'Liturgia' } };
