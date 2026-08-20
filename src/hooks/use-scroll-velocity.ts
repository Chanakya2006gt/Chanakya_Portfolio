import { useEffect, useState } from "react";

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState<"down" | "up" | "idle">("idle");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = Math.max(now - lastTime, 1);

      const speed = Math.abs(deltaY) / deltaTime * 1000; // px/sec

      if (deltaY > 5) setDirection("down");
      else if (deltaY < -5) setDirection("up");

      setVelocity(speed);

      lastScrollY = currentScrollY;
      lastTime = now;

      clearTimeout(timer);
      timer = setTimeout(() => {
        setVelocity(0);
        setDirection("idle");
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return { velocity, direction };
}
