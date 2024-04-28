import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      'process.env': dotenv.config().parsed
    },
    plugins: [react()],
    base: "https://notosarme.github.io/deseronii",
    build: { chunkSizeWarningLimit: 1000, },
  }
})