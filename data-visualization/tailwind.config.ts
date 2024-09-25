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
    'from-gray-800',
    'to-slate-300'," from-green-500","to-emerald-700",
    " from-indigo-500"," to-purple-400 ",
    "  from-fuchsia-500 "," to-slate-400 ",
    " from-cyan-600 ","to-cyan-400",
    " from-pink-600"," to-orange-400 ",
    " from-blue-700"," to-sky-400"
    // Add more dynamic classes as needed
  ],
  plugins: [],
};
export default config;
