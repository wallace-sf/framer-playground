import { motion } from "framer-motion";

import "./index.css";

const STROKE_WIDTH = 4;

export default function RotatingCircle() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-gray-900 ">
      {/* Círculo Central */}
      <svg
        className="absolute"
        width="130"
        height="130"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="white" />
      </svg>
      {/* Setor Circular Rotacionando */}
      <motion.div
        className="absolute w-[324px] h-[324px]"
        initial={{
          rotate: 0,
          scale: 0.4,
        }}
        animate={{
          rotate: 360,
          scale: [1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "loop",
        }}
      >
        <svg viewBox="0 0 324 324">
          {/* Setor Circular com Animação de Rotação Centralizada */}
          <path
            stroke="#FFFFFF"
            d="M 162 4 A 158 158 0 0 1 270.1584427367328 277.17704313258304 L 162 162 L 162 4"
            className="origin-center"
            opacity="1"
            strokeWidth={STROKE_WIDTH}
            fill="#C0D26D"
          />
        </svg>
      </motion.div>

      {/* Texto Curvado */}
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-transparent z-10"
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
            className="font-bold tracking-[1px]"
          >
            Price: $57.00
          </textPath>
        </text>
      </svg>

      {/* Ícone ou Setor Extra */}
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 81.38 117.01"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
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
}
