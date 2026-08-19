import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to GitHub Pages at https://<username>.github.io/<repo>/,
// set base to '/<repo>/'. For a custom domain or root deploy (Vercel/Netlify),
// leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
