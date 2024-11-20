import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: '0.0.0.0', // Dockerコンテナ内でのホスト設定
    strictPort: true,
    port: 3000,
  },
});