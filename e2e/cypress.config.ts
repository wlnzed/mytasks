import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("file:preprocessor", vitePreprocessor());
    },
  },
  env: {
    appUrl: process.env.APP_URL,
    testUserEmail: process.env.TEST_USER_EMAIL,
  },
});
