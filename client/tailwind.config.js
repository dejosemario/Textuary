/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
          top: '-22px',
          left: '-84px'
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
