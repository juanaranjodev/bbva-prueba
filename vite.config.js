import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://juanaranjodev.github.io/bbva-prueba/assets/image/img-laptop.png
export default defineConfig({
  base: '/bbva-prueba/',
  plugins: [react()],
})
