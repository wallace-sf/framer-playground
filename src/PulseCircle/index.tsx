import { FC } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

import * as styles from "../global.module.scss";

interface IPulseCircleProps {
  className?: string;
  count: number;
  duration: number;
}

export const PulseCircle: FC<IPulseCircleProps> = ({
  className,
  count,
  duration,
}) => {
  return (
    <motion.div
      className={classNames(
        styles.absolute,
        styles["w-[130px]"],
        styles["h-[130px]"],
        styles["rounded-full"],
        styles["bg-transparent"],
        className
      )}
    >
      {/* Pulse Effect */}
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={classNames(
            styles.absolute,
            styles["top-0"],
            styles["left-0"],
            styles["w-full"],
            styles["h-full"],
            styles["rounded-full"],
            styles["bg-black/10"]
          )}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: [1, 4],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * (duration / count),
          }}
        />
      ))}
    </motion.div>
  );
};
