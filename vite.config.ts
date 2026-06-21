import { defineConfig } from 'vite'
import { widgetPlugin } from '../MyWallpaper/packages/vite-plugin/src/index'

export default defineConfig({
  plugins: [widgetPlugin()],
})
