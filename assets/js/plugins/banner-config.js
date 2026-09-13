// SMDZ Studios - Global announcement bar configuration

window.SMDZ_BANNER_CONFIG = {
  enabled: true,
  platforms: ["fivem", "redm"],

  // "info" | "alert" | "sale" | "maintenance" | "announcement" | "warning" | "rdr2"
  type: "rdr2",

  // "full" | "compact"
  layout: "compact",

  // "center" | "left"
  align: "center",

  title: "SMDZ Studios is slowly expanding into RedM.",

  subtitle:
    "New RedM resources and documentation will be added progressively as the platform grows inside our ecosystem.",

  icon: "🐎",

  cta: {
    enabled: true,
    label: "View RedM Docs",
    url: "https://docs.smdz-studios.com/#/resources/redm/overview.md",
    target: "_self"
  }
};
