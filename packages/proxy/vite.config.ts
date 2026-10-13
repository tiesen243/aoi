import { defineConfig } from 'vite-plus'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  pack: {
    deps: {
      resolveDepSubpath: true,
    },
    dts: {
      generator: 'tsgo',
    },
    entry: 'src/index.ts',
    exports: true,
  },
})
