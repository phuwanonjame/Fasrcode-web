import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 🛠️ FIX: Added base property to ensure assets use relative paths for deployment
  base: './', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});