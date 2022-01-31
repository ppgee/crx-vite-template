import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        /**
         * 点击插件图标出现的弹窗
         */
        popup: resolve(__dirname, 'src/popup/index.html'),
        background: resolve(__dirname, 'src/background/main.ts')
      },
      output: {
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: '[name]/index.js',
        assetFileNames: 'assets/[ext]/[name].[ext]'
      }
    }
  },
  plugins: [
    vue(),
    copy({
      verbose: true,
      hook: 'writeBundle',
      targets: [
        {
          src: 'public/manifest.json',
          dest: 'dist'
        },
        {
          src: 'public/icons/*',
          dest: 'dist/assets/icons/'
        }
      ]
    })
  ]
})
