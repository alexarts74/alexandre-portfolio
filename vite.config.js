import { defineConfig } from 'vite'

 export default defineConfig({
    base: '/alexandre-portfolio/',
    resolve: {
        alias: {
          '@': '/src',
          '@firecms/neat': '/node_modules/@firecms/neat'
        }
      }
  })
