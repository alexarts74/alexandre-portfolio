import { defineConfig } from 'vite'

 export default defineConfig({
   // base: '/alexandre-portfolio/',
    build: {
        outDir: 'dist', // Ensure this matches your workflow config
      },
      resolve: {
        alias: {
          '@': '/src',
          '@firecms/neat': '/node_modules/@firecms/neat',
        },
      },
  })
