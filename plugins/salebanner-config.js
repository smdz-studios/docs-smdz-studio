// SMDZ Studios - Summer sale banner configuration

window.SMDZ_SALE_BANNER_CONFIG = {
  enabled: true,
  platforms: ["fivem", "redm"],

  text: "☀️ SUMMER SALE — 25% OFF YOUR NEXT 3 PURCHASES WITH CODE SUMMER! VALID UNTIL SEPTEMBER 1 🛍️",

  // Optional text repeated between loops.
  separator: "SUMMER SALE",

  url: "https://smdz-studios.tebex.io/",
  target: "_blank",

  // Lower value = faster movement.
  speedSeconds: 50,

  // Visual theme. Leave any value empty to use the default CSS fallback.
  theme: {
    background: "linear-gradient(90deg, rgba(127, 29, 29, 0.96), rgba(220, 38, 38, 0.98), rgba(127, 29, 29, 0.96))",
    edgeColor: "rgba(127, 29, 29, 1)",
    textColor: "#ffffff",
    borderColor: "rgba(255, 255, 255, 0.16)",
    shadow: "0 10px 26px rgba(127, 29, 29, 0.24)",
    separatorTextColor: "#7f1d1d",
    separatorBackground: "#ffffff"
  }
};
