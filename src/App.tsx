import classNames from "classnames";

import "./index.css";

import { YellowPriceAnimation } from "./YellowPriceAnimation";

import * as styles from "./styles.module.scss";

export default function App() {
  return (
    <div
      className={classNames(
        styles.absolute,
        styles.flex,
        styles["items-center"],
        styles["justify-center"],
        styles["w-screen"],
        styles["h-screen"],
        styles["bg-black"]
      )}
    >
      <YellowPriceAnimation price={100} />
    </div>
  );
}
