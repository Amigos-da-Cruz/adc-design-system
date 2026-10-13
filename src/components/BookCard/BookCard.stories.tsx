import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookCard } from './BookCard';

const meta = {
  title: 'Editora/BookCard',
  component: BookCard,
  args: {
    colecao: 'Editora',
    titulo: 'Missal quotidiano',
    subtitulo: 'Edição em português de Portugal',
    creditos: 'Tradução e notas · Amigos da Cruz',
    href: '#',
  },
  decorators: [(Story) => <div style={{ maxWidth: 440 }}><Story /></div>],
} satisfies Meta<typeof BookCard>;
export default meta;
type S = StoryObj<typeof meta>;

export const Padrao: S = {};
/** Obras dedicadas a Nossa Senhora: usar o tema Mariano na barra de ferramentas. */
export const Mariano: S = {
  globals: { tema: 'mariano' },
  args: { colecao: 'Devoção mariana', titulo: 'Livro devocional', subtitulo: 'Tema mariano para obras dedicadas a Nossa Senhora', creditos: 'Amigos da Cruz' },
};
