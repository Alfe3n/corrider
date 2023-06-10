import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createPWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
const pwaPlugin = createPWA({
  config: require("./pwa.config.js"),
});
export default defineConfig({
  plugins: [react(), pwaPlugin],
});
