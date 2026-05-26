/**
 * tsup build configuration for @stackra/nestjs-types.
 *
 * @module @stackra/nestjs-types/build
 */
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
});
