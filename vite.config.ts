import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function distributionEntry(): Plugin {
  return {
    name: 'mywallpaper-distribution-entry',
    generateBundle(_options, bundle) {
      const entry = bundle['assets/addon.js']
      if (!entry || entry.type !== 'chunk' || !entry.exports.includes('mount')) {
        this.error('The production add-on entry must export mount.')
      }
      this.emitFile({
        type: 'asset',
        fileName: 'index.html',
        source: '<!doctype html>\n<html><head><meta charset="UTF-8"></head><body><script type="module" src="./assets/addon.js"></script></body></html>\n',
      })
    },
  }
}

export default defineConfig(({ command }) => ({
  base: './',
  publicDir: command === 'build' ? false : 'public',
  plugins: [react(), distributionEntry()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: 'src/index.tsx',
      output: {
        entryFileNames: 'assets/addon.js',
        chunkFileNames: 'assets/chunk-[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
}))
