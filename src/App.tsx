import classNames from "classnames";

// import "./index.css";

import { PriceMatchedAnimation } from "./PriceMatchedAnimation";
import { YellowAnimation } from "./YellowAnimation";
import { GreenAnimation } from "./GreenAnimation";

import * as styles from "./global.module.scss";

import { useAnimationStatus } from "./hooks";

export default function App() {
  const { status, setSuccess, setCompleted } = useAnimationStatus();

  return (
    <div
      className={classNames(
        styles.absolute,
        styles.flex,
        styles["items-center"],
        styles["justify-center"],
        styles["w-screen"],
        styles["h-screen"],
        styles["left-0"],
        styles["top-0"],
        styles["bg-slate-500"]
      )}
    >
      <button
        type="button"
        className={classNames(
          styles.fixed,
          styles["top-0"],
          styles["right-1/2"],
          styles["-x-translate-1/2"],
          styles["z-9999"]
        )}
        onClick={setSuccess}
      >
        Change to Success
      </button>
      <PriceMatchedAnimation
        price={100}
        status={status}
        onAnimationComplete={setCompleted}
      />
      {/* <YellowAnimation price={100} /> */}
      {/* <GreenAnimation price={100} /> */}
    </div>
  );
}
