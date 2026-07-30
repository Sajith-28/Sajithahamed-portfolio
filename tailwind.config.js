/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#05070a",
        panel: "#0b0e14",
        racing: "#00ff9d",
        milkGreen: "#00ff9d",
        electricYellow: "#e8e337",
        cyanNeon: "#00ff9d",
        emeraldNeon: "#00ff9d",
        violetNeon: "#bf55ff",
        crimsonNeon: "#ff0055"
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 255, 157, 0.35)",
        "glow-yellow": "0 0 40px rgba(232, 227, 55, 0.35)",
        line: "0 0 28px rgba(0, 255, 157, 0.8)"
      },
      backgroundImage: {
        "carbon-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
