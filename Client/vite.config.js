import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx(), tailwindcss(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    minify: 'esbuild',
  },
})
