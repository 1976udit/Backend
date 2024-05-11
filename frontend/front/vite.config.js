import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      proxy :{
        '/api' : 'https://crispy-space-succotash-r47x94r7g4qwcwqrw-5173.app.github.dev/',
      }
  },
  plugins: [react()],
})
