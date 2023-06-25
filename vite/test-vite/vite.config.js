// import { defineConfig } from "vite";

// export default {
//     // optimizeDeps: {
//     //     exclude: ["lodash-es"] //遇到lodash es时不进行依赖预构建 将指定的数组中的依赖不进行预构建
//     // }
// }

// export { defineConfig } from "vite";

// export default defineConfig({
//     opt
// })

// /** @type import("vite").UserConfig */

// const viteConfig ={
//     optimizeDeps:{
//         exclude:[],
//     },
//     root
// }

// export default viteConfig;

import { defineConfig } from "vite";
import viteBaseConfig from './vite.base.config';
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
    "build": () => ({ ...viteBaseConfig, ...viteProdConfig }),
    "serve": () => Object.assign({}, viteBaseConfig, viteDevConfig),
}

export default defineConfig(({ command }) => {
    console.log("command", command);
    if (command === 'build') {
        return {
            //生产环境配置
        }
    } else {
        return {
            //开发环境配置
        }
    }
}) 