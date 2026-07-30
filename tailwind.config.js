/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0a0e17",
        panel: "#1d2331",
        racing: "#8eff01",
        milkGreen: "#8eff01",
        electricYellow: "#8b53fe",
        cyanNeon: "#8eff01",
        emeraldNeon: "#8eff01",
        violetNeon: "#8b53fe",
        crimsonNeon: "#8b53fe"
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(142, 255, 1, 0.35)",
        "glow-yellow": "0 0 40px rgba(139, 83, 254, 0.35)",
        line: "0 0 28px rgba(142, 255, 1, 0.8)"
      },
      backgroundImage: {
        "carbon-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
