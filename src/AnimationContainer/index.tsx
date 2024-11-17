import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { motion, HTMLMotionProps } from "framer-motion";

import * as styles from "../global.module.scss";

export const AnimationContainer: FC<HTMLMotionProps<"div">> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      {...props}
      className={classNames(
        styles.relative,
        styles.flex,
        styles["items-center"],
        styles["justify-center"],
        className
      )}
    >
      {children}
    </motion.div>
  );
};
