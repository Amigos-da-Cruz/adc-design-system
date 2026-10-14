import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build da biblioteca (dist/). O Storybook usa a sua própria configuração.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'adc-design-system', cssFileName: 'adc-design-system' },
    rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime'] },
    cssCodeSplit: false,
  },
});
