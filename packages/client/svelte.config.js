import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: {
        configFilePath: resolve('postcss.config.js')
      }
    })
  ],

  kit: {
    files: {
      routes: './src/routes',
      lib: './src/lib'
    },
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    })
  }
}
