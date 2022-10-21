import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import envCompatible from 'vite-plugin-env-compatible';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import svgr from '@honkhonk/vite-plugin-svgr'

const path = require('path')

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  

    return defineConfig({
        plugins: [react(), svgr(), tsconfigPaths(), envCompatible(), VitePluginHtmlEnv(),  VitePluginHtmlEnv({
            compiler: true
           
          })],
        resolve: {
            alias: {
                '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            }
        },
        server: {
            port: process.env.VITE_PORT,
        },
    });
}