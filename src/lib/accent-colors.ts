// Single source of truth for the site's accent palette.
// amber is the primary "signal" color (CTAs, the one recurring highlight);
// teal / coral / violet are used as functional tags — a color key across
// Experience, Projects, and Hackathons, not decoration.
export const ACCENTS = {
  amber: "#F0B429",
  teal: "#2DD4BF",
  coral: "#FB7185",
  violet: "#A78BFA",
} as const;

export type AccentKey = keyof typeof ACCENTS;

export const SIGNAL = ACCENTS.amber;
