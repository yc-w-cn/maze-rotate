import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "gh-pages" ? "/maze-rotate/" : "/",
  plugins: [react()],
}));
