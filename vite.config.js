import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

const env = loadEnv(
    'all',
    process.cwd()
);

export default defineConfig({
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    define: {        
        'process.env': {            
            VITE_API_URL: env.VITE_API_URL || "http://127.0.0.1:8000/api"
        }
    }    
});
