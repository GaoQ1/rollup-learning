import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
    entry: 'src/js/main.js',
    dest: 'dist/js/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        eslint({
            exclude: [
                'src/styles/**'
            ]
        }),
        replace({
            exclude: 'node_modules/',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        uglify({}, minify)
    ]
};