import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommentSection, type ReaderComment } from './CommentSection';

const comments: ReaderComment[] = [
  { id: '1', parentId: null, name: 'Maria', message: 'Onde posso encontrar a fonte original desta notícia?', createdAt: '2026-10-14T10:00:00Z', authorRole: 'reader' },
  { id: '2', parentId: '1', name: 'Amigos da Cruz', message: 'A ligação está na secção Fontes, no fim do artigo.', createdAt: '2026-10-14T11:00:00Z', authorRole: 'editor' },
];

const meta = {
  title: 'Blogue/Comentários de leitores',
  component: CommentSection,
  args: { comments, onSubmit: async () => {} },
} satisfies Meta<typeof CommentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Conversa: Story = {};
