import { FC } from "react";
import classNames from "classnames";

import { CircularSector } from "./CircularSector";

import * as styles from "./styles.module.scss";

interface IYellowPriceAnimationProps {
  price: number;
}

export const YellowPriceAnimation: FC<IYellowPriceAnimationProps> = ({
  price,
}) => {
  return (
    <div
      className={classNames(
        styles.relative,
        styles.flex,
        styles["items-center"],
        styles["justify-center"]
      )}
    >
      {/* Main Circle */}
      <svg
        className={classNames(styles.absolute, styles["z-40"])}
        width="130"
        height="130"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="white" />
      </svg>
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
        className={classNames(
          // "z-20",
          styles["z-20"]
        )}
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

      {/* Curved Text */}
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={classNames(
          styles.absolute,
          styles["top-1/2"],
          styles["left-1/2"],
          styles["transform"],
          styles["-translate-x-1/2"],
          styles["-translate-y-1/2"],
          styles["border-4"],
          styles["border-transparent"],
          styles["z-40"]
        )}
        height={130}
      >
        <defs>
          <path id="circleTextPath" d="M5,50 A45,45 0 0 0 95,50" />
        </defs>
        <text fill="black" fontSize="14px" textAnchor="middle">
          <textPath
            xlinkHref="#circleTextPath"
            startOffset="50%"
            data-tid="price"
            className={classNames(
              styles["font-bold"],
              styles["tracking-[1px]"]
            )}
          >
            Price:{" "}
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </textPath>
        </text>
      </svg>

      {/* Lightning Icon */}
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 81.38 117.01"
        className={classNames(
          styles.absolute,
          styles["top-1/2"],
          styles["left-1/2"],
          styles["transform"],
          styles["-translate-x-1/2"],
          styles["-translate-y-1/2"],
          styles["z-40"]
        )}
        height={45}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              d="M81 45.46a3.74 3.74 0 00-3.42-2.17H51.86l-.13-.15 10-38.39A3.7 3.7 0 0059.77.43a3.71 3.71 0 00-4.64 1L.87 67.53a3.79 3.79 0 002.92 6.19h25.73l.12.15-10 38.39a3.72 3.72 0 001.95 4.32 3.79 3.79 0 001.74.43 3.72 3.72 0 002.9-1.4l54.28-66.13a3.76 3.76 0 00.49-4.02zM34.25 80.25z"
              fill="#C0D26D"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
