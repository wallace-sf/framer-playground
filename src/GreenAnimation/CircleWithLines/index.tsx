import { FC } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { useTimeout } from "../../hooks";
import classNames from "classnames";

import * as styles from "../../global.module.scss";

interface ICircleWithLinesProps {
  onAnimationComplete?: () => void;
}

export const CircleWithLines: FC<ICircleWithLinesProps> = ({
  onAnimationComplete,
}) => {
  const initialRadius = 40; // Raio inicial do círculo
  const finalRadius = 162; // Raio final do círculo
  const shrinkFinalRadius = finalRadius * 0.3 + initialRadius;
  const numberOfLines = 3; // O número de linhas no círculo principal
  const angleOffset = (2 * Math.PI) / numberOfLines; // Ângulo para distribuir as linhas igualmente

  // Ajustar o viewBox para acomodar o círculo completo
  const viewBoxSize = finalRadius * 2 + 10; // Margem adicional para bordas
  const center = viewBoxSize / 2;

  // Criar motion values para sincronizar animações
  const radius = useMotionValue(initialRadius);

  // Motion value para o raio do segundo círculo
  const secondCircleRadius = useMotionValue(shrinkFinalRadius);

  // Criar motion values para o terceiro círculo
  const thirdCircleRadius = useMotionValue(shrinkFinalRadius);
  const thirdCircleLineY = useTransform(thirdCircleRadius, (r) => center + r);

  // Transformação para y2 da linha
  const lineY2 = useTransform(secondCircleRadius, (r) => center + r);

  // Transformar o raio em coordenadas finais para as linhas do primeiro círculo
  const lines = Array.from({ length: numberOfLines }, (_, index) => {
    const angle = index * angleOffset;

    const x2 = useTransform(radius, (r) => center + r * Math.cos(angle));
    const y2 = useTransform(radius, (r) => center + r * Math.sin(angle));

    return (
      <motion.line
        key={index}
        x1={center}
        y1={center}
        x2={x2}
        y2={y2}
        stroke="white"
        strokeWidth="4" // Espessura das linhas aumentada para 4
        initial={{ opacity: index < 2 ? 1 : 1 }}
        animate={{ opacity: index < 2 ? 0 : 1 }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
      />
    );
  });

  useTimeout(() => {
    onAnimationComplete?.();
  }, 9000);

  return (
    <motion.svg
      width="350"
      height="350"
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      className={classNames(styles.absolute, styles["z-10"])}
    >
      {/* Segundo círculo - no fundo, rotacionando */}
      <motion.g
        animate={{
          rotate: 360, // Rotação no sentido horário
        }}
        transition={{
          duration: 3.5, // Duração da rotação
          delay: 3.5, // Atraso para iniciar na segunda etapa
          ease: "easeInOut",
        }}
      >
        <motion.circle
          cx={center}
          cy={center}
          r={secondCircleRadius} // Conectado ao motion value
          stroke="white"
          strokeWidth="4"
          fill="#26BF59" // Cor do círculo alterada
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 1, 1],
            r: [finalRadius, finalRadius, finalRadius, shrinkFinalRadius],
          }}
          transition={{
            duration: 7,
            times: [0, 0.5, 0.7, 1],
          }}
        />
        <motion.line
          x1={center}
          y1={center}
          x2={center}
          y2={lineY2} // Conectado ao valor animado do raio
          stroke="white"
          strokeWidth="4" // Espessura das linhas aumentada para 4
          initial={{ opacity: 0 }} // Inicialmente invisível
          animate={{
            opacity: [0, 0, 1, 1], // Aparece completamente no início da segunda etapa
          }}
          transition={{
            duration: 7,
            times: [0, 0.5, 0.51, 1], // Define quando ocorre a transição
          }}
        />
      </motion.g>

      {/* Primeiro círculo - com animações */}
      <motion.g
        animate={{
          rotate: [-360, 0], // Rotação no sentido anti-horário
        }}
        transition={{
          duration: 7, // Duração total da animação
          times: [0.5, 1], // Inicia na metade (quando o círculo começa a encolher)
          ease: "easeInOut",
        }}
      >
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          stroke="white"
          strokeWidth="4"
          fill="#26BF59" // Cor do círculo alterada
          animate={{
            r: [initialRadius, finalRadius, initialRadius], // Raio: cresce e diminui
          }}
          transition={{
            duration: 7, // Duração total para crescer e depois diminuir
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
        />
        {lines}
      </motion.g>

      {/* Terceiro círculo - completamente independente */}
      <motion.g
        animate={{
          rotate: [0, 360, -360], // Rotação no sentido horário e depois no sentido anti-horário
        }}
        transition={{
          duration: 2, // Total da animação, incluindo a rotação anti-horária final
          delay: 7, // Atraso para iniciar na segunda etapa
          ease: "easeInOut",
          times: [0, 0.5, 1], // Faz a rotação anti-horária acontecer após a rotação horária
        }}
      >
        <motion.circle
          cx={center}
          cy={center}
          r={thirdCircleRadius} // Raio do terceiro círculo independente
          stroke="white"
          strokeWidth="4"
          fill="#26BF59" // Cor do terceiro círculo
          initial={{ opacity: 0 }} // Inicialmente invisível
          animate={{
            opacity: [0, 1, 1], // Aparece completamente
            r: [shrinkFinalRadius, finalRadius], // Cresce para o tamanho máximo
          }}
          transition={{
            delay: 7, // Atraso para aparecer após a segunda etapa
            duration: 1, // Duração para crescer
            times: [0, 0.1, 1], // Define quando ocorre a transição
            ease: "easeInOut",
          }}
        />
        {/* Linha apontando para baixo */}
        <motion.line
          x1={center}
          y1={center}
          x2={center}
          y2={thirdCircleLineY} // Linha sincronizada com o raio do terceiro círculo
          stroke="white"
          strokeWidth="4"
          initial={{ opacity: 0 }} // Inicialmente invisível
          animate={{
            opacity: [0, 1], // Aparece junto com o círculo
          }}
          transition={{
            delay: 7, // Mesmo atraso que o círculo
            duration: 1, // Duração para aparecer
            ease: "easeInOut",
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
