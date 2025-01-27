import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Ensure compatibility for environment variables
  },
  server: {
    port: 3000, // Development server port
  },
  preview: {
    port: 3000, // Preview server port
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Add alias for cleaner imports
    },
  },
});
