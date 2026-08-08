// SMDZ Studios - Global announcement bar configuration

window.SMDZ_BANNER_CONFIG = {
  enabled: true,

  // "info" | "alert" | "sale" | "maintenance" | "announcement" | "warning"
  type: "announcement",

  // "full" | "compact"
  layout: "compact",

  // "center" | "left"
  align: "center",

  icon: "🔗",

  title: "We have launched our own SMDZ Bridge.",

  subtitle:
    "It will start being used across our resources very soon.",

  cta: {
    enabled: true,
    label: "View Bridge",
    url: "https://docs.smdz-studios.com/#/resources/bridge/main",
    target: "_self"
  }
};
