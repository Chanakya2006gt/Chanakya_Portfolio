import { useState, useCallback } from "react";

export type MascotState =
  | "idle"
  | "jump"
  | "wave"
  | "celebrate"
  | "excited";

export function useMascotState() {
  const [state, setState] = useState<MascotState>("idle");

  // Trigger temporary custom state (e.g. jump, wave)
  const triggerState = useCallback((newState: MascotState, duration = 1200) => {
    setState(newState);
    setTimeout(() => {
      setState("idle");
    }, duration);
  }, []);

  return { state, setState, triggerState };
}
