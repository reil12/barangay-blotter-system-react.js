import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BUILD  -> npm run build  writes the finished app into ../static/react
//           (Flask serves it; Node is not needed to run the system).
// DEV    -> npm run dev    hot-reloading at http://localhost:5173 while
//           `python app.py` runs on :5000 (API + images are proxied).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/static/react/' : '/',
  build: { outDir: '../static/react', emptyOutDir: true },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://127.0.0.1:5000',
      '/static/images': 'http://127.0.0.1:5000',
    },
  },
}));
