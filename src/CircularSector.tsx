import { FC, useMemo } from "react";

import { motion, HTMLMotionProps, Transition } from "framer-motion";
import classNames from "classnames";

import { STROKE_WIDTH, TRANSITION } from "./constants";

import * as styles from "./styles.module.scss";

export const CircularSector: FC<HTMLMotionProps<"div">> = ({
  className = "",
  ...props
}) => {
  const transition = useMemo<Transition>(
    () => ({ ...TRANSITION, ...props.transition }),
    [props.transition]
  );

  return (
    <motion.div
      {...props}
      transition={transition}
      className={classNames(
        styles.absolute,
        styles["w-[324px]"],
        styles["h-[324px]"],
        className
      )}
    >
      <svg viewBox="0 0 324 324">
        <path
          stroke="#FFFFFF"
          d="M 162 4 A 158 158 0 0 1 270.1584427367328 277.17704313258304 L 162 162 L 162 4"
          className={styles["origin-center"]}
          opacity="1"
          strokeWidth={STROKE_WIDTH}
          fill="#C0D26D"
        />
      </svg>
    </motion.div>
  );
};
