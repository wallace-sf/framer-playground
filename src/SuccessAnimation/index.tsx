import { FC } from "react";
import { AnimationContainer } from "../AnimationContainer";
import classNames from "classnames";
import { useRive } from "@rive-app/react-canvas";

import * as global from "../global.module.scss";

interface ISuccessAnimationProps {
  onAnimationComplete?: () => void;
}

export const SuccessAnimation: FC<ISuccessAnimationProps> = ({
  onAnimationComplete,
}) => {
  const { RiveComponent } = useRive({
    src: "https://data.buyr.dev/demo/static/animations/celebration.riv",
    autoplay: true,
    onStop: onAnimationComplete,
  });

  return (
    <AnimationContainer
      className={classNames(
        global.absolute,
        global["w-full"],
        global["h-full"]
      )}
    >
      <RiveComponent />
    </AnimationContainer>
  );
};
