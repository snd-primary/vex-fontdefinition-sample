import "./styles/preflight.css"
import { Typography } from "./styles/recipe/typography.css"
import { styles } from "./styles/App.css"
import "@fontsource/source-code-pro/400.css"
import "@fontsource/source-code-pro/600.css"
import "@fontsource/source-code-pro/700.css"
import "@fontsource/zen-kaku-gothic-new/400.css"
import "@fontsource/zen-kaku-gothic-new/600.css"
import "@fontsource/zen-kaku-gothic-new/700.css"

const App = () => {
  return (
    <div>
      <div className={styles.fontdemo_item}>
        <h2
          className={Typography({
            fontSizes: "h2",
            fontWeight: "bold"
          })}
        >
          ヘッディング弐
        </h2>
        <h2
          className={Typography({
            fontSizes: "h2",
            fontWeight: "bold",
            fontFamily: "sourceCodePro"
          })}
        >
          Heading2
        </h2>
      </div>
      <div className={styles.fontdemo_item}>
        <h3
          className={Typography({
            fontSizes: "h3",
            fontWeight: "semibold"
          })}
        >
          ヘッディング弐
        </h3>
        <h3
          className={Typography({
            fontSizes: "h3",
            fontWeight: "semibold",
            fontFamily: "sourceCodePro"
          })}
        >
          Heading2
        </h3>
      </div>
    </div>
  )
}

export default App
