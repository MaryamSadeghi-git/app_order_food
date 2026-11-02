import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#0b0f0d',        // پس‌زمینه اصلی تیره
          card: '#121a16',        // پس‌زمینه کارت‌ها و بخش‌ها
          cardHover: '#16221c',   // هاور کارت‌ها
        },
        brand: {
          DEFAULT: '#10b981',    // emerald-500
          light: '#34d399',      // emerald-400
          lighter: '#6ee7b7',    // emerald-300
          dark: '#064e3b',       // emerald-900
          glow: 'rgba(16, 185, 129, 0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'var(--font-peyda)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
