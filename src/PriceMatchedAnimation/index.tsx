import { FC } from "react";

import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { AnimationContainer } from "../AnimationContainer";
import { PriceCircle, IPriceCircleProps } from "../PriceCircle";
import { CircleWithLines } from "../GreenAnimation";
import { CircularSectorGroup } from "../YellowAnimation";
import { PulseCircle } from "../PulseCircle";
import { SuccessAnimation } from "../SuccessAnimation";

import { AnimationStatus, DummyFn } from "../types";

import * as styles from "../global.module.scss";

interface IFlowAnimationProps extends IPriceCircleProps {
  status: AnimationStatus;
  onMatchingComplete?: DummyFn;
  onSuccessComplete?: DummyFn;
}

export const FlowAnimation: FC<IFlowAnimationProps> = ({
  price,
  status,
  onMatchingComplete,
  onSuccessComplete,
}) => {
  return (
    <AnimationContainer
      className={classNames(styles["h-full"], styles["w-full"])}
    >
      <AnimatePresence>
        {status !== "success" ? (
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
        {status === "matching" ? (
          <motion.div
            key="matching"
            layout
            exit={{ opacity: 0 }}
            className={classNames(
              styles.absolute,
              styles["h-[350px]"],
              styles["w-[350px]"]
            )}
          >
            <CircleWithLines onAnimationComplete={onMatchingComplete} />
          </motion.div>
        ) : null}
        {status === "success" ? (
          <motion.div
            key="success"
            className={classNames(
              styles.absolute,
              styles["w-full"],
              styles["h-full"]
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <SuccessAnimation onAnimationComplete={onSuccessComplete} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {status !== "success" ? (
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
