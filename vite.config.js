import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx']
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'UIKit',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'react-icons', 'antd', 'antd-style', 'react-toastify'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          'react-icons': 'ReactIcons',
          'antd': 'Antd',
          'antd-style': 'AntdStyle',
          'react-toastify': 'ReactToastify'
        }
      }
    },
    sourcemap: true,
    minify: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
