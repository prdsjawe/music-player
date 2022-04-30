const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: "@", replacement: path.resolve(projectRootDir, "src") },
        {
          find: "@components",
          replacement: path.resolve(projectRootDir, "src/components"),
        },
        {
          find: "@pages",
          replacement: path.resolve(projectRootDir, "src/pages"),
        },
      ],
    }),
  ],
});
