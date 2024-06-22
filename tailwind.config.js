/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        /* Hide scrollbar for Chrome, Safari, and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for IE, Edge, and Firefox */
        // Add other browser-specific styles here if needed
      };
      addUtilities(newUtilities);
    },
  ],
  daisyui: {
    themes: [
      "valentine",
      "dark",
      "night",
      "aqua",
      {
        mytheme: {
          primary: "#38bdf8",

          secondary: "#38bdf8",

          accent: "#38bdf8",

          neutral: "#38bdf8",

          "base-100": "#e0f2fe",

          info: "#0ea5e9",

          success: "#557800",

          warning: "#dd0000",

          error: "#ff3e68",
        },
      },
    ],
  },
};
