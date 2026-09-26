import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Base path para GitHub Pages (https://<usuario>.github.io/fs2-react-app/)
  base: '/fs2-react-app/',
  plugins: [react()],
})
