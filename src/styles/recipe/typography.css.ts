import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { fontSizes, fontWeights, letterSpacings, lineHeights, fonts } from "../globalvars.css"

export const Typography = recipe({
  base: {},
  variants: {
    fontSizes: {
      heading1: {
        fontSize: `clamp(${fontSizes["4xl"]}, 6.5vw, ${fontSizes["5xl"]})`
      },
      heading2: {
        fontSize: `clamp(${fontSizes["3xl"]}, 5.1vw, ${fontSizes["4xl"]})`
      },
      heading3: {
        fontSize: `clamp(${fontSizes["2xl"]}, 4.5vw, ${fontSizes["3xl"]})`
      },
      heading4: {
        fontSize: `clamp(${fontSizes.xl}, 3.5vw, ${fontSizes["2xl"]})`
      },
      p: {
        fontSize: `clamp(${fontSizes.sm}, 2.5vw, ${fontSizes.base})`
      },
      small: {
        fontSize: `clamp(${fontSizes.xs}, 2vw, ${fontSizes.sm})`
      }
    },
    fontWeight: {
      thin: {
        fontWeight: fontWeights.thin
      },
      extralight: {
        fontWeight: fontWeights.extralight
      },
      light: {
        fontWeight: fontWeights.light
      },
      normal: {
        fontWeight: fontWeights.normal
      },
      medium: {
        fontWeight: fontWeights.medium
      },
      semibold: {
        fontWeight: fontWeights.semibold
      },
      bold: {
        fontWeight: fontWeights.bold
      },
      extrabold: {
        fontWeight: fontWeights.extrabold
      },
      black: {
        fontWeight: fontWeights.black
      }
    },
    fontFamily: {
      zenKakuGothicNew: {
        fontFamily: fonts.zenKakuGothicNew
      },
      sourceCodePro: {
        fontFamily: fonts.sourCodePro
      }
    },
    letterSp: {
      tighter: {
        letterSpacing: letterSpacings.tighter
      },
      tight: {
        letterSpacing: letterSpacings.tight
      },
      normal: {
        letterSpacing: letterSpacings.normal
      },
      wide: {
        letterSpacing: letterSpacings.wide
      },
      wider: {
        letterSpacing: letterSpacings.wider
      },
      widest: {
        letterSpacing: letterSpacings.widest
      }
    },
    lineHeight: {
      none: {
        lineHeight: lineHeights.none
      },
      tight: {
        lineHeight: lineHeights.tight
      },
      sung: {
        lineHeight: lineHeights.snug
      },
      normal: {
        lineHeight: lineHeights.normal
      },
      relaxed: {
        lineHeight: lineHeights.relaxed
      },
      loose: {
        lineHeight: lineHeights.loose
      }
    }
  },
  defaultVariants: {
    fontFamily: "zenKakuGothicNew",
    letterSp: "wide",
    fontWeight: "normal",
    lineHeight: "sung"
  }
})

//今回は使わないけど一応
export type TypographyVariants = RecipeVariants<typeof Typography>
