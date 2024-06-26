/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        light: "#FEFEFE",
        black: "#000000",
        dark: "#0A0A0A",
        gray: "#888",
        primary: "#007DFC",
        success: "#00ff00",
        error: "#FF4D4D",
        // secondary: "#FF5733",
        // accent: "#33FF57",
      },
      screens: {
        xs: "320px", // Extra small screens, 320px and up
        sm: "480px", // Small screens, 480px and up
        md: "768px", // Medium screens, 768px and up
        lg: "1024px", // Large screens, 1024px and up
        xl: "1200px", // Extra large screens, 1200px and up
        "2xl": "1440px", // 2X large screens, 1440px and up
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".filter-blur": {
          position: "absolute",
          width: "506px",
          height: "506px",
          borderRadius: 500,
          background: "#007DFC",
          filter: "blur(400px)",
          top: "-22px",
          left: "-84px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
