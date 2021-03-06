import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import fs from 'fs';

const indexFile = 'build/index.html';

fs.readFile(indexFile, 'utf8', (err, data) => {
  if (err) return console.log('error', err);

  const result = data.replace(
    /<script[\ ]+type="module"[\ ]+src="\/dist\/index.js"[\ ]*><\/script>/,
    '<script src="/dist/index.js"></script>'
  );

  fs.writeFile(indexFile, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});

export default {
  input: 'build/dist/index.js',
  output: {
    name: 'app',
    format: 'iife',
    file: 'build/dist/index.js',
  },
  plugins: [
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjs(),

    //  minify
    terser(),
  ],
};
