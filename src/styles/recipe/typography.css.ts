import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { globalVars } from "../globalvars.css"

export const Typography = recipe({
  base: {},
  variants: {
    fontSizes: {
      h1: {
        fontSize: "clamp(2rem, 2vw, 4rem)"
      },
      h2: {
        fontSize: `clamp(${globalVars.fontSizes["3xl"]}, 6vw, ${globalVars.fontSizes["4xl"]})`
      },
      h3: {
        fontSize: `clamp(${globalVars.fontSizes["2xl"]}, 5vw, ${globalVars.fontSizes["3xl"]})`
      },
      h4: {
        fontSize: `clamp(${globalVars.fontSizes.xl}, 5vw, ${globalVars.fontSizes["2xl"]})`
      },
      p: {
        fontSize: `clamp(${globalVars.fontSizes.sm}, 2.5vw, ${globalVars.fontSizes.base})`
      },
      small: {
        fontSize: `clamp(${globalVars.fontSizes.xs}, 2vw, ${globalVars.fontSizes.sm})`
      }
    },
    fontWeight: {
      thin: {
        fontWeight: globalVars.fontWeights.thin
      },
      extralight: {
        fontWeight: globalVars.fontWeights.extralight
      },
      light: {
        fontWeight: globalVars.fontWeights.light
      },
      normal: {
        fontWeight: globalVars.fontWeights.normal
      },
      medium: {
        fontWeight: globalVars.fontWeights.medium
      },
      semibold: {
        fontWeight: globalVars.fontWeights.semibold
      },
      bold: {
        fontWeight: globalVars.fontWeights.bold
      },
      extrabold: {
        fontWeight: globalVars.fontWeights.extrabold
      },
      black: {
        fontWeight: globalVars.fontWeights.black
      }
    },
    fontFamily: {
      zenKakuGothicNew: {
        fontFamily: globalVars.fonts.zenKakuGothicNew
      },
      sourceCodePro: {
        fontFamily: globalVars.fonts.sourCodePro
      }
    },
    letterSp: {
      tighter: {
        letterSpacing: globalVars.letterSpacings.tighter
      },
      tight: {
        letterSpacing: globalVars.letterSpacings.tight
      },
      normal: {
        letterSpacing: globalVars.letterSpacings.normal
      },
      wide: {
        letterSpacing: globalVars.letterSpacings.wide
      },
      wider: {
        letterSpacing: globalVars.letterSpacings.wider
      },
      widest: {
        letterSpacing: globalVars.letterSpacings.widest
      }
    }
  },
  defaultVariants: {
    fontFamily: "zenKakuGothicNew",
    letterSp: "wide",
    fontWeight: "normal"
  }
})

export type TypographyVariants = RecipeVariants<typeof Typography>
