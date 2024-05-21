import UnoCSS from "unocss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "./build",
  },
  base: "/neurips2024-17694.github.io",
  plugins: [UnoCSS(), react(), viteTsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
});
