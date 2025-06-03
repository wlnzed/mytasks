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
      name: "shell",
      remotes: {
        "tasks-mfe": process.env.VITE_TASKS_MFE_URL + "/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
  build: {
    target: "esnext",
  },
});
