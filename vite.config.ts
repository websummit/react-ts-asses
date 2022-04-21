import type { UserConfigFn, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
  };
  return config;
};

export default defineConfig;
