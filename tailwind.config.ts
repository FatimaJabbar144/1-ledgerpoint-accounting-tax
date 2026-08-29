import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { navy: "#12304A", teal: "#2E8C87", cream: "#F7F8F5", fog: "#EEF1F0", charcoal: "#263238" },
      fontFamily: { sans: ["var(--font-dm-sans)"], serif: ["var(--font-newsreader)"] },
    },
  },
  plugins: [],
};

export default config;
