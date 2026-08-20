import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  colorClass: string;
}

export function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate random particles ONLY on client after hydration to avoid SSR hydration mismatch
  useEffect(() => {
    const generated = Array.from({ length: 34 }).map((_, i) => {
      const isIndigo = i % 5 === 0;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: isIndigo ? Math.random() * 0.25 + 0.08 : Math.random() * 0.4 + 0.1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        colorClass: isIndigo ? "bg-indigo" : "bg-sage",
      };
    });
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full animate-particle-float ${p.colorClass}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
