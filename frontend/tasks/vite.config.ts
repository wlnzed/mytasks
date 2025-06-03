import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import basicSsl from "@vitejs/plugin-basic-ssl";
import dotenv from "dotenv";

dotenv.config();

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
    headers: {
      "Access-Control-Allow-Origin": process.env.VITE_FRONTEND_SHELL_URL,
    },
  },
  preview: {
    port: 5174,
  },
  build: {
    target: "esnext",
  },
});
