import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArticleCard } from './ArticleCard';

const meta = {
  title: 'Blog/ArticleCard',
  component: ArticleCard,
  args: {
    href: '#',
    tipo: 'noticia',
    categoria: 'Igreja em Portugal',
    titulo: 'Título de uma notícia sobre a vida da Igreja',
    excerto: 'Excerto de duas linhas que resume o artigo sem repetir o título.',
    data: '13 de outubro de 2026',
  },
  decorators: [(Story) => <div style={{ maxWidth: 340 }}><Story /></div>],
} satisfies Meta<typeof ArticleCard>;
export default meta;
type S = StoryObj<typeof meta>;

export const Noticia: S = {};
export const Comentario: S = {
  args: { tipo: 'comentario', categoria: 'Liturgia', titulo: 'Título de um texto de opinião', data: '11 de outubro de 2026' },
};
export const Grelha: S = {
  decorators: [],
  render: (a) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 320px)', gap: 20 }}>
      <ArticleCard {...a} />
      <ArticleCard {...a} tipo="comentario" categoria="Liturgia" titulo="Título de um texto de opinião" />
      <ArticleCard {...a} categoria="Mundo" titulo="Terceiro cartão da grelha" />
    </div>
  ),
};
