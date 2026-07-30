/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0A0A0F",
        panel: "#12121A",
        racing: "#00F0FF",
        milkGreen: "#00F0FF",
        electricYellow: "#FF006E",
        cyanNeon: "#00F0FF",
        emeraldNeon: "#00F0FF",
        violetNeon: "#FF006E",
        crimsonNeon: "#FF006E"
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 240, 255, 0.35)",
        "glow-yellow": "0 0 40px rgba(255, 0, 110, 0.35)",
        line: "0 0 28px rgba(0, 240, 255, 0.8)"
      },
      backgroundImage: {
        "carbon-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
