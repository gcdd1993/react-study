import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // 指定dev sever的端口号
        port: 3000,
        // 自动打开浏览器运行以下页面
        open: '/',
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    plugins: [react()],
})
