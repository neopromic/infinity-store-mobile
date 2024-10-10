export const colors = {
  background: "hsl(0 0% 100%)",
  backgroundInvert: "hsl(224 71.4% 4.1%)",
  foregroud: "hsl(224 71.4% 4.1%)",
  border: "hsl(220 13% 91%)",
  primary: {
    "600": "#6440e7",
    "700": "#542ed3",
    "950": "#231362",
  },
};
export const theme = {
  colors: {
    primary: colors.primary[700],
    background: colors.background,
    backgroundInvert: colors.backgroundInvert,
    text: colors.foregroud,
    accent: colors.primary[600],
  },
};
