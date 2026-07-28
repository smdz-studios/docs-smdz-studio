// SMDZ Studios — Global announcement bar configuration

window.SMDZ_BANNER_CONFIG = {
  enabled: false,

  // "info" | "alert" | "sale" | "maintenance" | "announcement" | "warning"
  type: "info",

  // "full" | "compact"
  layout: "compact",

  // "center" | "left"
  align: "center",

  icon: "🎨",

  title: "We changed the visual identity, check it out in the new identity page!",

  subtitle:
    "",

  cta: {
    enabled: false,
    label: "View New Identity",
    // Blog CTA disabled while keeping the announcement configuration available.
    // url: "https://docs.smdz-studios.com/#/blog/new-identity",
    url: "",
    target: "_self"
  }
};
