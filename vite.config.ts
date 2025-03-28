import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') }
    ]
  },
  server: {
    port: 3000
  }
})
