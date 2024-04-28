import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.VITE_VERCEL_ENV,
    },
    plugins: [react()],
    // base: "https://notosarme.github.io/deseronii",
    build: { chunkSizeWarningLimit: 1000, },
  }
})