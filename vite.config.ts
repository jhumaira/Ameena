import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Ameena/', // 👈 MUST match the GitHub repo name exactly (case-sensitive)
  plugins: [react()],
})
