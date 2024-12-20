import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/', // Remplacez "nom-du-repo" par le nom exact de votre dépôt GitHub

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        luxury: resolve(__dirname, 'luxury.html'),
        vintage: resolve(__dirname, 'vintage.html'),
        login: resolve(__dirname, 'login.html')
      }
    }
  }
});