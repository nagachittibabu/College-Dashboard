import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    // Add all dynamic classes that might be used
    'bg-gradient-to-r',
    'from-orange-500',
    'to-yellow-200',
    'bg-gradient-to-r',
    'from-gray-800',
    'to-slate-300'
    // Add more dynamic classes as needed
  ],
  plugins: [],
};
export default config;
