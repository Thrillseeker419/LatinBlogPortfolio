import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportWidth: 1000,
    viewportHeight: 660
  },
});
