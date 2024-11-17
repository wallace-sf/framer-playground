import { FC } from "react";

import { AnimationContainer } from "../AnimationContainer";
import { PriceCircle, IPriceCircleProps } from "../PriceCircle";
import { CircularSectorGroup } from "./CircularSectorGroup";

export const YellowAnimation: FC<IPriceCircleProps> = ({ price }) => {
  return (
    <AnimationContainer>
      <CircularSectorGroup />
      <PriceCircle price={price} />
    </AnimationContainer>
  );
};

export { CircularSectorGroup } from "./CircularSectorGroup";
