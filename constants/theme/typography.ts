export const fontFamily = {
  regular: "Poppins",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

export const lineHeight = {
  h1: 38,
  h2: 31,
  h3: 26,
  h4: 22,
  bodyLg: 26,
  bodyMd: 22,
  bodySm: 21,
  caption: 15,
} as const;

export const fontWeight = {
  regular: "400" as const,
  medium: "500" as const,
  semiBold: "600" as const,
  bold: "700" as const,
};

// Pre-built style objects for use with StyleSheet
export const textStyles = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h1,
    lineHeight: lineHeight.h1,
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h2,
    lineHeight: lineHeight.h2,
    fontWeight: fontWeight.semiBold,
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h3,
    lineHeight: lineHeight.h3,
    fontWeight: fontWeight.semiBold,
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.h4,
    lineHeight: lineHeight.h4,
    fontWeight: fontWeight.medium,
  },
  bodyLg: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyLg,
    lineHeight: lineHeight.bodyLg,
    fontWeight: fontWeight.regular,
  },
  bodyMd: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyMd,
    lineHeight: lineHeight.bodyMd,
    fontWeight: fontWeight.regular,
  },
  bodySm: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodySm,
    lineHeight: lineHeight.bodySm,
    fontWeight: fontWeight.regular,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
    fontWeight: fontWeight.regular,
  },
} as const;
