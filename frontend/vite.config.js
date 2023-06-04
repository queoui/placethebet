// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Generates ascii 65-90 (Capital letters) into array Vite is expecting
const alphabet = Array.from(Array(26), (v, k) => {
  return String.fromCharCode(k + 65);
});

const env = loadEnv("development", process.cwd(), "");

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
  },
  envPrefix: alphabet,

  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173,
    proxy: {
      "/api": {
        target: env.VITE_NFL_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },

    },
    build: {
      target: "esnext",
      emptyOutDir: true,
      outDir: "build"
    }
  },


});


// References
// https://vitejs.dev/config/
// https://vitejs.dev/config/server-options.html
