#!/usr/bin/env node
import * as esbuild from 'esbuild';
import arg from 'arg';

const args = arg({
  '--watch': Boolean,
  '--quiet': Boolean,
}, { argv: process.argv });

/** @type {import('esbuild').BuildOptions} */
const defaultBuildOptions = {
  entryPoints: [
    'src/main.ts',
  ],
  outfile: 'dist/index.mjs',
  target: 'es6',
  platform: 'browser',
  keepNames: true,
  minify: true,
  treeShaking: true,
};

if (args?.['--watch'] === true) {
  const ctx = await esbuild.context(defaultBuildOptions);
  await ctx.watch();
} else {
  await esbuild.build(defaultBuildOptions);
}
