import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.EMAILJS_KEY': JSON.stringify(env.EMAILJS_KEY)
    },
    plugins: [react()],
    base: "https://notosarme.github.io/deseronii"
  }
})