import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel 部署不需要 base，GitHub Pages 需要 /molly-resume/
// 通过环境变量区分
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? '/molly-resume/' : '/',
})
