import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base:'/deploying-vite-project/',
    plugins:[vue()]
})