import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.css';
import { Adc } from '../src/components/Adc/Adc';

const preview: Preview = {
  globalTypes: {
    tema: {
      description: 'Tema de cor',
      toolbar: {
        title: 'Tema',
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'claro', title: 'Claro' },
          { value: 'mariano', title: 'Mariano (conteúdo mariano)' },
        ],
      },
    },
  },
  initialGlobals: { tema: 'claro' },
  decorators: [
    (Story, ctx) => (
      <Adc tema={ctx.globals.tema} style={{ padding: 24 }}>
        <Story />
      </Adc>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disabled: true },
    controls: { matchers: { date: /Date$/ } },
    a11y: { test: 'todo' },
  },
};
export default preview;
