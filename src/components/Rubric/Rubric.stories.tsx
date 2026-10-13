import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rubric, Verse, Versal } from './Rubric';
import { Divider } from '../Divider/Divider';

const meta = { title: 'Editora/Rubric', component: Rubric } satisfies Meta<typeof Rubric>;
export default meta;
export const PaginaDeMissal: StoryObj<typeof meta> = {
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <Rubric>O sacerdote, voltado para o povo, diz:</Rubric>
      <Verse marca="V.">Dóminus vobíscum.</Verse>
      <Verse marca="R.">Et cum spíritu tuo.</Verse>
      <Divider style={{ margin: '20px 0' }} />
      <Versal>
        A primeira letra de cada parte abre em versal, na cor brand, descendo por três linhas do texto que se segue, para que a página tenha um ponto de entrada claro.
      </Versal>
    </div>
  ),
};
