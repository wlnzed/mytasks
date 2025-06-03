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
      name: "tasks",
      filename: "remoteEntry.js",
      exposes: { "./App": "./src/App.tsx" },
      shared: ["react"],
    }),
  ],
  server: {
    port: 5174,
    https: true,
    headers: {
      "Access-Control-Allow-Origin": "https://localhost:5173",
    },
  },
  preview: {
    port: 5174,
    https: true,
  },
  build: {
    target: "esnext",
  },
});
