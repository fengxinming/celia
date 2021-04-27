import buble from '@rollup/plugin-buble';
import match from 'rollup-plugin-match';
import empty from 'rollup-plugin-empty';
import combine from 'rollup-plugin-combine';
import copy from 'rollup-plugin-copy';
import replaceImports from 'rollup-plugin-replace-imports';

export default {
  input: 'src/**/*.js',
  plugins: [
    empty({
      silent: false,
      dir: 'dist',
    }),
    copy({
      verbose: true,
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'TNPM_README.md', dest: 'dist', rename: 'README.md' },
        { src: 'types/index.d.ts', dest: 'dist' },
      ],
    }),
    match(),
    combine({
      outputDir: true,
      camelCase: false,
    }),
    buble(),
  ],
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      exports: 'auto',
    },
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'auto',
      plugins: [
        replaceImports((n) => n.replace('/es/', '/')),
      ],
    },
  ],
};
