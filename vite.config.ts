import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vercel's output directory matches this
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
