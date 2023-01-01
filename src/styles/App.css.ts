import { style } from "@vanilla-extract/css"
import { space } from "./globalvars.css"
import { Typography } from "./recipe/typography.css"

export const styles = {
  fontdemo: style({
    margin: `clamp(${space[8]}, 2vw, ${space[24]})`
  }),
  fontdemo_item: style({
    padding: `${space[16]} 0`
  }),
  title: style([
    {
      display: "inline-block",
      padding: `${space[4]} ${space[8]}`,
      background: "black",
      color: "white",
      fontStyle: "italic"
    },
    //ここで呼び出せば、JSXがCSSまみれにならないで済む。
    Typography({
      letterSp: "wider",
      fontFamily: "sourceCodePro"
    })
  ])
}
