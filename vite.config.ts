import { fileURLToPath, URL } from 'node:url'
// ui库 按需加载
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ui库 按需加载
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // ui库 按需加载
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8989, //启动端口
    hmr: {
        host: '127.0.0.1',
        port: 8989
    },
    // 设置 https 代理
    proxy: {
        '/api': {
            target: 'https address',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, '')
        }
    }
  },
  //全局引入
css: {
  preprocessorOptions: {
    scss: {
      /**如果引入多个文件，可以使用
       * @import "@/assets/scss/globalVariable1.scss";
       * @import "@/assets/scss/globalVariable2.scss";'
      **/
      additionalData: '@import "@/style/globalVar.scss";',
    }
  }
},
})
