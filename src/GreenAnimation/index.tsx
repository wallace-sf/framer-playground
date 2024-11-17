import { FC } from "react";

import { AnimationContainer } from "../AnimationContainer";

import { PriceCircle, IPriceCircleProps } from "../PriceCircle";
import { CircleWithLines } from "./CircleWithLines";
import { CircularCrown } from "../CircularCrown";

export const GreenAnimation: FC<IPriceCircleProps> = ({ price }) => {
  return (
    <AnimationContainer>
      <CircularCrown />
      <PriceCircle price={price} />
      <CircleWithLines />
    </AnimationContainer>
  );
};

export { CircleWithLines } from "./CircleWithLines";
