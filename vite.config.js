import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import envCompatible from 'vite-plugin-env-compatible';
import VitePluginHtmlEnv from 'vite-plugin-html-env'

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  

    return defineConfig({
        plugins: [react(), tsconfigPaths(), envCompatible(), VitePluginHtmlEnv(),  VitePluginHtmlEnv({
            compiler: true
           
          })],

        server: {
            port: process.env.VITE_PORT,
        },
    });
}