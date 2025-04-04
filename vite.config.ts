import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        background: 'src/background.ts',
        contentScript: 'src/contentScript.ts'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});