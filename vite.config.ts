import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    envPrefix: "REACT_",
    plugins: [react()],
    build: {
      outDir: path.join(__dirname, "build"),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      open: true,
      port: parseInt(env.REACT_PORT || "3000"),
    },
  };
});
