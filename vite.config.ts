import type { UserConfigFn, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    plugins: [eslintPlugin(), react()],
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
