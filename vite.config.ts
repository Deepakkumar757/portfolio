import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// added base path for the portfolio deployment in github pages
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})