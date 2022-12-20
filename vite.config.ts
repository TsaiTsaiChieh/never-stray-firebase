/* eslint-disable consistent-return */
import linaria from '@linaria/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), linaria()],
  build: {
    sourcemap: true,
  },
})
