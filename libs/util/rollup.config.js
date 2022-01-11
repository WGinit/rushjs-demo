import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import { uglify } from "rollup-plugin-uglify"

export default {
    input: './libs/index.js',
    plugins: [
        resolve(),
        commonjs(),
        uglify()
    ],
    format: 'cjs',
    output: [{
        format: 'cjs',
        file: 'dist/index_build.js'
    }]
}