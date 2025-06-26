import { defineConfig } from 'vite';

export default defineConfig({
    server:{
        port:3000,
        hmr:false,
    },
    build:{
        target: 'node22',
        outDir: 'dist',
        lib:{
            entry:'./server.js',
            formats:['cjs'],
        },
        rollupOptions:{
            external:['path', 'fs', 'os'],
        },
    },
});