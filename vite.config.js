import { defineConfig } from 'vite';

export default defineConfig({
  base: '/alexandre-portfolio/', // Base URL pour GitHub Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: 'index.html', // Point d'entrée pour la page principale
        gradient: 'src/gradient.ts' // Fichier TypeScript
      }
    }
  }
});
