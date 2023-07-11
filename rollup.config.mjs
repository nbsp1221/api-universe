import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].js',
      preserveModules: true,
    },
  ],
  plugins: [
    typescript({
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
      ],
    }),
  ],
};
