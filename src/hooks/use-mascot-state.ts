import { useState, useEffect, useCallback } from "react";
import { useScrollVelocity } from "./use-scroll-velocity";

export type MascotState =
  | "idle"
  | "run-right"
  | "run-left"
  | "jump"
  | "warp"
  | "sleep"
  | "wave"
  | "celebrate"
  | "excited";

export function useMascotState() {
  const [state, setState] = useState<MascotState>("idle");
  const { velocity, direction } = useScrollVelocity();
  const [isCustomState, setIsCustomState] = useState(false);

  // Trigger temporary custom state (e.g. jump, celebrate)
  const triggerState = useCallback((newState: MascotState, duration = 1200) => {
    setIsCustomState(true);
    setState(newState);
    setTimeout(() => {
      setIsCustomState(false);
      setState("idle");
    }, duration);
  }, []);

  // Sync scroll speed with mascot running
  useEffect(() => {
    if (isCustomState) return;

    if (velocity > 300) {
      if (direction === "down") setState("run-right");
      else if (direction === "up") setState("run-left");
    } else {
      setState("idle");
    }
  }, [velocity, direction, isCustomState]);

  // Idle timer for sleep state (after 45s of no interaction)
  useEffect(() => {
    let sleepTimer: NodeJS.Timeout;

    const resetSleep = () => {
      clearTimeout(sleepTimer);
      if (state === "sleep") setState("idle");
      sleepTimer = setTimeout(() => {
        setState("sleep");
      }, 45000);
    };

    window.addEventListener("mousemove", resetSleep, { passive: true });
    window.addEventListener("keydown", resetSleep, { passive: true });
    window.addEventListener("scroll", resetSleep, { passive: true });

    sleepTimer = setTimeout(() => {
      setState("sleep");
    }, 45000);

    return () => {
      clearTimeout(sleepTimer);
      window.removeEventListener("mousemove", resetSleep);
      window.removeEventListener("keydown", resetSleep);
      window.removeEventListener("scroll", resetSleep);
    };
  }, [state]);

  return { state, setState, triggerState };
}
