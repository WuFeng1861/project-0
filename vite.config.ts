import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dapp',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

// location /nodedapp/ {
//     alias /path/to/dist/;
//     try_files $uri $uri/ /nodedapp/index.html;
// }