export const colors = {
  // Primary brand
  primary: "#6c4ef5",
  primaryDeep: "#5b3bf6",
  linguaBlue: "#4d88ff",
  linguaGreen: "#21c16b",

  // Semantic
  success: "#21c16b",
  warning: "#ffcb00",
  streak: "#ff8a00",
  error: "#ff4d4f",
  info: "#4d88ff",

  // Neutrals
  ink: "#001132",
  inkSecondary: "#6b7280",
  border: "#e5e7eb",
  surface: "#f6f7fb",
  background: "#ffffff",
  white: "#ffffff",
} as const;

export type ColorKey = keyof typeof colors;
