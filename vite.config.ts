import { crx, defineManifest } from '@crxjs/vite-plugin';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

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
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        yakuyoke: 'src/pages/yakuyoke/index.html',
        kaiun: 'src/pages/yakuyoke/index.html',
      },
    },
  },
  plugins: [vue(), crx({ manifest })],
});
