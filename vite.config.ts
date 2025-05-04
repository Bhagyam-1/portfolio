import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
     ],
  build: {
    rollupOptions: {
        output: {
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return 'vendor';
                }
                if (id.includes('src/common')) {
                    return 'common-components';
                }
                if (id.includes('src/components/')) {
                    return 'components';
                }
                if (id.includes('src/models')) {
                    return 'models';
                }
                if (id.includes('src/pages')) {
                    return 'pages';
                }
                if (id.includes('src/utility')) {
                    return 'utility';
                }
                if (id.includes('src/assets')) {
                    return 'assets';
                }
            },
        },
    },
  },
})
