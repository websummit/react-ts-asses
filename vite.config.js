import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
const defineConfig = ({ command, mode }) => {
  const config = {
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
//# sourceMappingURL=vite.config.js.map
