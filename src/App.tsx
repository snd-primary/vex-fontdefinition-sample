import "./styles/preflight.css"
import { Typography } from "./styles/recipe/typography.css"
import { styles } from "./styles/App.css"
import classnames from "classnames"
import "@fontsource/source-code-pro/400.css"
import "@fontsource/source-code-pro/600.css"
import "@fontsource/source-code-pro/700.css"
import "@fontsource/zen-kaku-gothic-new/400.css"
import "@fontsource/zen-kaku-gothic-new/500.css"
import "@fontsource/zen-kaku-gothic-new/700.css"

const App = () => {
  return (
    <div className={styles.fontdemo}>
      <span className={styles.title_bg}>
        <p
          className={classnames(
            styles.title,
            Typography({
              letterSp: "wider"
            })
          )}
        >
          vanilla-extract font definition example
        </p>
      </span>
      <div className={styles.fontdemo_item}>
        <h1
          className={Typography({
            fontSizes: "h1",
            fontWeight: "bold"
          })}
        >
          ヘッディング壱
        </h1>
        <h1
          className={Typography({
            fontSizes: "h1",
            fontWeight: "bold",
            fontFamily: "sourceCodePro"
          })}
        >
          Heading1
        </h1>
      </div>
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
            fontWeight: "bold"
          })}
        >
          ヘッディング参
        </h3>
        <h3
          className={Typography({
            fontSizes: "h3",
            fontWeight: "semibold",
            fontFamily: "sourceCodePro"
          })}
        >
          Heading3
        </h3>
      </div>
      <div className={styles.fontdemo_item}>
        <h4
          className={Typography({
            fontSizes: "h4",
            fontWeight: "bold"
          })}
        >
          ヘッディング四
        </h4>
        <h4
          className={Typography({
            fontSizes: "h4",
            fontWeight: "semibold",
            fontFamily: "sourceCodePro"
          })}
        >
          Heading4
        </h4>
      </div>
      <div className={styles.fontdemo_item}>
        <p
          className={Typography({
            fontSizes: "p",
            fontWeight: "normal"
          })}
        >
          あけましておでめとうございます。ー 通常のテキスト
        </p>
        <p
          className={Typography({
            fontSizes: "p",
            fontWeight: "normal",
            fontFamily: "sourceCodePro"
          })}
        >
          Happy new year. - This is normal.
        </p>
      </div>
      <div className={styles.fontdemo_item}>
        <p
          className={Typography({
            fontSizes: "small",
            fontWeight: "normal"
          })}
        >
          あけましておでめとうございます。ー 最も小さいテキスト
        </p>
        <p
          className={Typography({
            fontSizes: "small",
            fontWeight: "normal",
            fontFamily: "sourceCodePro"
          })}
        >
          Happy new year. - This is smallest.
        </p>
      </div>
    </div>
  )
}

export default App
