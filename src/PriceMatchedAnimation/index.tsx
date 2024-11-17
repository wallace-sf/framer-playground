import { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { AnimationContainer } from "../AnimationContainer";
import { PriceCircle, IPriceCircleProps } from "../PriceCircle";
import { CircleWithLines } from "../GreenAnimation";
import { CircularSectorGroup } from "../YellowAnimation";
import { PulseCircle } from "../PulseCircle";

import { AnimationStatus } from "../types";

import * as styles from "../global.module.scss";

interface IPriceMatchedAnimationProps extends IPriceCircleProps {
  status: AnimationStatus;
  onAnimationComplete?: () => void;
}

export const PriceMatchedAnimation: FC<IPriceMatchedAnimationProps> = ({
  price,
  status,
  onAnimationComplete,
}) => {
  return (
    <AnimationContainer
      className={classNames(styles["h-full"], styles["w-full"])}
    >
      <AnimatePresence>
        {status !== "completed" ? (
          <motion.div
            className={classNames(styles["w-[130px]"], styles["h-[130px]"])}
            exit={{ opacity: 0 }}
          >
            <PriceCircle price={price} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="sync">
        {status === "pending" ? (
          <motion.div
            key="pending"
            layout
            exit={{ opacity: 0 }}
            className={classNames(
              styles.absolute,
              styles["h-[324px]"],
              styles["w-[324px]"]
            )}
          >
            <CircularSectorGroup />
          </motion.div>
        ) : null}
        {status === "success" ? (
          <motion.div
            key="success"
            layout
            exit={{ opacity: 0 }}
            className={classNames(
              styles.absolute,
              styles["h-[350px]"],
              styles["w-[350px]"]
            )}
          >
            <CircleWithLines onAnimationComplete={onAnimationComplete} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {status !== "completed" ? (
          <motion.div
            className={classNames(
              styles.absolute,
              styles["w-[130px]"],
              styles["h-[130px]"]
            )}
          >
            <PulseCircle count={3} duration={6} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AnimationContainer>
  );
};
