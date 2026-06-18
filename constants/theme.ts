// =============================================================================
// SyncRide Design System — single source of truth
// Import from: @/constants/theme
// =============================================================================

// -----------------------------------------------------------------------------
// Colors
// -----------------------------------------------------------------------------

export const colors = {
  brand: {
    electricBlue: '#4D8BFF',
    neonPurple: '#6C4EF5',
    deepPurple: '#5B3BF6',
    green: '#21C16B',
  },
  semantic: {
    success: '#21C16B',
    warning: '#FFC800',
    error: '#FF4D4F',
    info: '#4D8BFF',
  },
  neutral: {
    textPrimary: '#0D132B',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    surface: '#F6F7FB',
    background: '#FFFFFF',
  },
} as const;

export type Colors = typeof colors;

// -----------------------------------------------------------------------------
// Spacing — 4px base grid, mirrors Tailwind's default scale
// -----------------------------------------------------------------------------

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
} as const;

// -----------------------------------------------------------------------------
// Typography
// -----------------------------------------------------------------------------

export const fontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
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

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
};

// Pre-composed objects for StyleSheet.create() — lineHeight values are pixels
export const typography = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h1,
    fontWeight: fontWeight.bold,
    lineHeight: 38,   // 32 × 1.2
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h2,
    fontWeight: fontWeight.semiBold,
    lineHeight: 31,   // 24 × 1.3
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.h3,
    fontWeight: fontWeight.semiBold,
    lineHeight: 26,   // 20 × 1.3
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.h4,
    fontWeight: fontWeight.medium,
    lineHeight: 22,   // 16 × 1.4
  },
  bodyLg: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyLg,
    fontWeight: fontWeight.regular,
    lineHeight: 26,   // 16 × 1.6
  },
  bodyMd: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyMd,
    fontWeight: fontWeight.regular,
    lineHeight: 22,   // 14 × 1.6
  },
  bodySm: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodySm,
    fontWeight: fontWeight.regular,
    lineHeight: 21,   // 13 × 1.6
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.caption,
    fontWeight: fontWeight.regular,
    lineHeight: 15,   // 11 × 1.4
  },
} as const;

