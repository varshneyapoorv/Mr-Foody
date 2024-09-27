import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy API requests
      '/api': {
        target: 'https://www.swiggy.com/mapi/misc_new/skeleton?lat=28.65200&lng=77.16630',
        // target: 'https://www.swiggy.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
