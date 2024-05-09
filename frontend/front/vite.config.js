import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //     proxy :{
  //       '/api' : 'https://congenial-trout-69vp69rvg9rgh5jx5-5000.app.github.dev',
  //     }
  // },
  plugins: [react()],
})
