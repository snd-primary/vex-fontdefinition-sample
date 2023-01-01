import { style } from "@vanilla-extract/css"
import { globalVars, space } from "./globalvars.css"

export const styles = {
  fontdemo: style({
    margin: `clamp(${space[8]}, 2vw, ${space[24]})`
  }),
  fontdemo_item: style({
    padding: `${space[16]} 0`
  }),
  title_bg: style({
    background: "black",
    display: "grid",
    padding: `${space[4]} ${space[8]}`,
    placeSelf: "center",
    width: "fit-content"
  }),
  title: style({
    color: "white",
    fontStyle: "italic"
  })
}
