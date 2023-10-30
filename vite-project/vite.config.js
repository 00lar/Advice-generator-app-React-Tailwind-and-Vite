import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Advice-generator-app-React-Tailwind-and-Vite',
  plugins: [react()],
})
