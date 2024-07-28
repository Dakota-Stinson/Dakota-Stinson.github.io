/** @type {import('tailwindcss').Config} */
import tailwindScroll from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px', // min-width
      },
      colors: {
        'primary': "rgba(var(--primary), 1)",
        'primary-5': "rgba(var(--primary), .95)",
        'primary-10': "rgba(var(--primary), .90)",
        'primary-20': "rgba(var(--primary), .80)",
        'secondary': "rgba(var(--secondary), 1)",
        'secondary-5': "rgba(var(--secondary), .95)",
        'secondary-10': "rgba(var(--secondary), .90)",
        'secondary-20': "rgba(var(--secondary), .80)",
        'secondary-dark': "rgba(var(--secondaryDark), 1)",
        'accent': "rgba(var(--accent), 1)",
        'accent-5': "rgba(var(--accent), .95)",
        'accent-10': "rgba(var(--accent), .90)",
        'accent-20': "rgba(var(--accent), .80)",
        'fontColor': "rgba(var(--fontColor), 1)",
        'fontColor-5': "rgba(var(--fontColor), .95)",
        'fontColor-10': "rgba(var(--fontColor), .90)",
        'fontColor-20': "rgba(var(--fontColor), .80)",
        'background': "rgba(var(--background), 1)",
        'background-5': "rgba(var(--background), .95)",
        'background-10': "rgba(var(--background), .90)",
        'background-20': "rgba(var(--background), .80)",
      },
      fontSize: {
        "image-description": "var(--imageGridTextSize)"
      },
      backgroundImage: { 
        'hero-banner': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/map-banner.png')" 
      },
      fontFamily: {
        'universal': ['Universal', "serif"]
      },
      gridTemplateColumns: {
        'auto-grid': "repeat(auto-fit, minmax(var(--imageGridImageSize), 1fr))",
      },
      gridAutoRows: {
        'image-and-text': "var(--imageGridEntrySize)"
      },
      boxShadow: {
        'innerBorder': "rgba(0, 0, 0, 0.45) 1px 1px 7px 0px inset", 
        'bookBorder': "rgba(114, 114, 114, .5) 0px 0px 10px 5px inset;"
      }
    },
  },
  plugins: [tailwindScroll],
}

