// uno.config.ts
import { defineConfig, presetUno, presetWind, presetAttributify } from "unocss";

export default defineConfig({
	presets: [presetUno(), presetWind(), presetAttributify()],
});
