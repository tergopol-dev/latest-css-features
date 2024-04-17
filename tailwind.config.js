/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
      },
    },
    extend: {
      animation: {
        "hue-rotate": "hue-rotate 2s infinite ease-in-out",
        "rotate-scale-translate":
          "rotate-scale-translate 2.5s infinite alternate cubic-bezier(0.25, 0.6, 0.8, 1)",
      },
      backgroundImage: {
        noise: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1080 1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='fractalNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch' /%3E%3C/filter%3E%3Cfilter id='grayscale'%3E%3CfeColorMatrix type='matrix' values='0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 1 0 ' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23fractalNoise) url(%23grayscale)' /%3E%3C/svg%3E")`,
      },
      fontFamily: {
        display: ["Comic Neue", "sans-serif"],
      },
      fontSize: {
        inherit: "inherit",
      },
      keyframes: {
        "hue-rotate": {
          from: {
            filter: "hue-rotate(0deg)",
          },
          to: {
            filter: "hue-rotate(360deg)",
          },
        },
        "rotate-scale-translate": {
          from: {
            rotate: "0deg",
            scale: "0.5",
            translate: "-15% 0%",
          },
          to: {
            rotate: "360deg",
            scale: "1",
            translate: "50% 15%",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "normal",
            },
            "code::after": {
              content: "normal",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
