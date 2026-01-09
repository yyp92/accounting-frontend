import { defineConfig, loadEnv } from 'vite'
import type {ConfigEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    
    server: {
        proxy: {
            '/api': {
                target: 'https://httpbin.org',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },

    build: {
        sourcemap: true, 
        outDir: 'dist'
    },

    plugins: [
        react()
    ],

    css: {
        preprocessorOptions: {
            scss: {
                // 启用现代 API（关键配置）
                api: 'modern-compiler' 
            },
            sass: {
                // sass 和 scss 都需要配置
                api: 'modern-compiler' 
            }
        }
    },

    resolve: {
        alias: {
            // 在这里添加路径别名
            '@': path.resolve("./src")
            // 其他路径别名...
        },
    }
})
