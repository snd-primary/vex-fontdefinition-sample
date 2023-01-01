import { createGlobalTheme } from "@vanilla-extract/css"

export const globalVars = createGlobalTheme(":root", {
  fonts: {
    zenKakuGothicNew: 'Zen Kaku Gothic New, "Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
    sourCodePro: 'Source Code Pro, "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.3rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.5rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  fontWeights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  }
})

export const { fonts, fontSizes, fontWeights, lineHeights, letterSpacings } = globalVars
