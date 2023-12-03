import vue from '@vitejs/plugin-vue';
import { crx, defineManifest } from '@crxjs/vite-plugin';
import { defineConfig } from 'vite';
import { resolve } from 'path';
const root = 'src';

const manifest = defineManifest({
  manifest_version: 3,
  name: '創建',
  version: '1.0.0',
  permissions: ['tabs', 'scripting', 'activeTab'],
  action: {
    default_popup: 'index.html',
  },
  icons: {
    '16': 'jinjya.png',
  },
});

// https://vitejs.dev/config/

export default defineConfig({
  base: '/',
  root: root,
  publicDir: 'public',
  appType: 'mpa',
  plugins: [vue(), crx({ manifest })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../dist',

    rollupOptions: {
      input: {
        index: resolve(__dirname, root, 'index.html'),
        yakuyoke: resolve(__dirname, root, 'yakuyoke/index.html'),
        kaiun: resolve(__dirname, root, 'kaiun/index.html'),
      },
      output: {},
    },
  },
});
