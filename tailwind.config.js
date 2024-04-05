/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      animation: {
        "hue-rotate": "hue-rotate 2s infinite ease-in-out",
        "rotate-scale-translate":
          "rotate-scale-translate 2.5s infinite alternate cubic-bezier(0.25, 0.6, 0.8, 1)",
      },
      colors: {
        cinder: "#13151a",
      },
      dropShadow: {
        glow: ["0 0px 4px theme(colors.orange.700)"],
      },
      fontFamily: {
        display: ["Comic Neue", "sans-serif"],
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
