import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/E-commerce_Admin_Dashboard/", // 👈 Add this line
});
