import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    // base: "https://notosarme.github.io/deseronii",
    build: { chunkSizeWarningLimit: 1000, },
  }
})