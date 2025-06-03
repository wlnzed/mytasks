import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    federation({
      name: "shell",
      remotes: {
        "tasks-mfe": "https://localhost:5174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173,
    https: true,
  },
  preview: {
    port: 5173,
    https: true,
  },
  build: {
    target: "esnext",
  },
});
