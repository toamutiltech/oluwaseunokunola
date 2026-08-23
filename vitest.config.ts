import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    testTimeout: 15000,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/types/**",
        "src/components/ui/**",
        "src/lib/utils.ts",
        "src/app/layout.tsx",
        "src/app/error.tsx",
        "**/*.test.*",
        "**/*.d.ts",
      ],
      thresholds: {
        lines: 70,
        statements: 70,
        branches: 70,
        functions: 60,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
