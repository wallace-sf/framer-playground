import { FC } from "react";

import classNames from "classnames";

import { CircularSector } from "./CircularSector";

import * as styles from "../global.module.scss";

export const CircularSectorGroup: FC = () => {
  return (
    <>
      {/* Circular Sector Rotating Clockwise */}
      <CircularSector
        className={classNames(styles["z-30"])}
        initial={{ rotate: -30, scale: 0.5 }}
        animate={{
          rotate: [-30, 90, 210, 330, 450, 570],
          scale: [0.5, 1, 0.5, 1, 0.5, 1],
        }}
        transition={{ duration: 4 }}
      />

      {/* Circular Sector Rotating Counterclockwise */}
      <CircularSector
        className={classNames(styles["z-20"])}
        initial={{ rotate: -30, scale: 1 }}
        animate={{
          rotate: [-150, -270, -390, -510, -630, -750],
          scale: [1, 0.5, 1, 0.5, 1, 0.5],
        }}
        transition={{ duration: 4 }}
      />

      {/* Fastest Circular Sector Rotating Counterclockwise */}
      <CircularSector
        className={classNames(styles["z-10"])}
        initial={{ rotate: -30, scale: 1 }}
        animate={{
          rotate: [0, -120, -240, -360, -480, -600, -720, -840, -960],
          scale: [1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1],
        }}
        transition={{ duration: 3.5 }}
      />
    </>
  );
};
