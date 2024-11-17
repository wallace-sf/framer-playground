import { useCallback, useState } from "react";

import { AnimationStatus } from "../types";

export const useAnimationStatus = () => {
  const [status, setStatus] = useState<AnimationStatus>("pending");

  return {
    status,
    setPending: useCallback(() => {
      setStatus("pending");
    }, []),
    setSuccess: useCallback(() => {
      setStatus("success");
    }, []),
    setCompleted: useCallback(() => {
      setStatus("completed");
    }, []),
  };
};
