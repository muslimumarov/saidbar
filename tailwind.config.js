import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      animation: {
        flip: "flip 1s infinite",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotate(0)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(180deg) rotateX(180deg)" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
