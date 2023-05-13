/// <reference types="vitest" />

import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped'
      }
    },
    setupFiles: ['./vitest.setup.ts']
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: true,
    sourcemap: true,
    // ssr: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Button',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      libFolderPath: './node_modules/typescript/lib',
      outputDir: 'dist',
      staticImport: true,
      skipDiagnostics: true,
      insertTypesEntry: true,
      rollupTypes: true,
    })
  ],
  test: vitestConfig.test
})
