module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "russo-one": ["Russo One", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      animation: {
        typing: "typing 1.5s steps(18), blink 0.7s infinite",
        typingSub: "typingSub 1.0s steps(7), blink 0.7s infinite",
        typingSubExp: "typingSubExp 1.0s steps(9), blink 0.7s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "18ch" },
        },
        typingSub: {
          from: { width: "0" },
          to: { width: "7ch" },
        },
        typingSubExp: {
          from: { width: "0" },
          to: { width: "9ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
      },
    },
  },
  plugins: [],
};
