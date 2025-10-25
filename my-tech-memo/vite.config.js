import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "srbt3939.github.io/my-tech-memo/", // ←リポジトリ名に合わせる
});
