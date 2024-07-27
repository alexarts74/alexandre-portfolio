import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/alexandre-portfolio/' : '/',
  build: {
    outDir: 'dist'
  }
});
