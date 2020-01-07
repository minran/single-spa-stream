import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const rollupConfigList = [
  {
    input: './src/globalEventDistributor.js',
    file: './lib/globalEventDistributor.js',
    name: 'globalEventDistributor'
  }, 
  {
    input: './src/helper.js',
    file: './lib/helper.js',
    name: 'helper'
  },
  {
    input: './index.js',
    file: './index.js',
    name: 'index'
  },
]

export default (async () => ( rollupConfigList.map(item => (
  {
    input: item.input,
    output: {
      file: item.file,
      format: 'esm',
      name: item.name,
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
    ]
  }
))))()