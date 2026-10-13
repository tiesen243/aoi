import { defineConfig } from 'vite-plus'

export default defineConfig({
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
  resolve: { tsconfigPaths: true },
})
