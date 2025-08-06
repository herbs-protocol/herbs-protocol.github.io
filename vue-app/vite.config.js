import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    base: './',
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@assets': '/src/assets',
        },
    },
    plugins: [vue()],
});
