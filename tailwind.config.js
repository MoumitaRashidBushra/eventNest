module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        butterbloom: {
          primary: "#f6ad55", // warm butter
          secondary: "#7dd3fc", // soft sky
          accent: "#fbcfe8", // gentle pink
          neutral: "#111827", // deep text
          "base-100": "#f8fafc", // clean background
          info: "#60a5fa",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
      "dark",
    ],
  },
};
