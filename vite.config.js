import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.EMAILJS_KEY': JSON.stringify(env.EMAILJS_KEY),
      'process.env.FIREBASE_API': JSON.stringify(env.FIREBASE_API),
      'process.env.FIREBASE_MESSAGING_ID': JSON.stringify(env.FIREBASE_MESSAGING_ID),
      'process.env.FIREBASE_APP_ID': JSON.stringify(env.FIREBASE_APP_ID),
    },
    plugins: [react()],
    base: "https://notosarme.github.io/deseronii"
  }
})