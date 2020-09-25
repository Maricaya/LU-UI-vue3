// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// esbuild: 把 ts 编译为 js
import esbuild from 'rollup-plugin-esbuild'
// .vue 变成 .js
import vue from 'rollup-plugin-vue'
// .scss 变成 .js
import scss from 'rollup-plugin-scss'
// 支持 rollup-plugin-scss
import dartSass from 'sass';
// 把 js 代码变的看不懂
import { terser } from "rollup-plugin-terser"

export default {
    // 输入
    input: 'src/lib/index.ts',
    output: [{
        // 我们的仓库依赖了全局变量 vue，不用打包
        globals: {
            vue: 'Vue'
        },
        name: 'LU-UI',
        file: 'dist/lib/lu.js',
        format: 'umd',
        plugins: [terser()]
    }, {
        name: 'LU-UI',
        file: 'dist/lib/lu.esm.js',
        format: 'es',
        plugins: [terser()]
    }],
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015'
        }),
        vue({
            include: /\.vue$/,
        })
    ],
}