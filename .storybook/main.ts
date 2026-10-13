import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  // Em GitHub Pages o site vive em /<repo>/. O workflow define STORYBOOK_BASE.
  viteFinal: async (cfg) => ({ ...cfg, base: process.env.STORYBOOK_BASE ?? cfg.base }),
};
export default config;
