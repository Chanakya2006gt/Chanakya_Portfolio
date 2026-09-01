import { MascotState } from "@/hooks/use-mascot-state";

interface CompanionSvgProps {
  state: MascotState;
  className?: string;
  size?: number;
}

export function CompanionSvg({ state, className = "", size = 80 }: CompanionSvgProps) {
  // State specific transformations and styling
  const isWaving = state === "wave" || state === "celebrate";
  const isJumping = state === "jump";
  const isExcited = state === "excited";

  return (
    <div
      className={`relative flex items-center justify-center transition-transform duration-300 ${
        isJumping ? "-translate-y-8 scale-110" : ""
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 ${
          isExcited ? "animate-bounce" : "animate-bob"
        }`}
      >
        {/* Orbital glow ring */}
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke="#8fa896"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="animate-spin-slow opacity-60"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="url(#body_glow)"
          opacity="0.15"
        />

        {/* Floating particles around mascot */}
        <circle cx="20" cy="30" r="2.5" fill="#8fa896" className="animate-pulse" />
        <circle cx="100" cy="80" r="2" fill="#8fa896" className="animate-pulse" />
        <circle cx="95" cy="35" r="1.5" fill="#8fa896" />

        {/* Mascot Body (Hoodie / Torso) */}
        <path
          d="M38 78C38 68.0589 46.0589 60 56 60H64C73.9411 60 82 68.0589 82 78V94H38V78Z"
          fill="#1e1e22"
          stroke="#8fa896"
          strokeWidth="1.5"
        />
        {/* Hoodie V-neck zipper line */}
        <path d="M60 60V74" stroke="#8fa896" strokeWidth="1.5" strokeLinecap="round" />

        {/* Mascot Head */}
        <circle
          cx="60"
          cy="44"
          r="22"
          fill="#161618"
          stroke="#8fa896"
          strokeWidth="2"
        />

        {/* Glasses Frame & Lenses */}
        <rect
          x="44"
          y="38"
          width="13"
          height="10"
          rx="3"
          fill="#0a0a0b"
          stroke="#8fa896"
          strokeWidth="1.5"
        />
        <rect
          x="63"
          y="38"
          width="13"
          height="10"
          rx="3"
          fill="#0a0a0b"
          stroke="#8fa896"
          strokeWidth="1.5"
        />
        <line x1="57" y1="43" x2="63" y2="43" stroke="#8fa896" strokeWidth="1.5" />

        {/* Glowing Eyes */}
        <circle cx="50.5" cy="43" r="2.5" fill="#8fa896" className="animate-pulse" />
        <circle cx="69.5" cy="43" r="2.5" fill="#8fa896" className="animate-pulse" />

        {/* Mouth */}
        <path
          d={isWaving || isExcited ? "M55 50Q60 55 65 50" : "M56 50H64"}
          stroke="#8fa896"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Waving Arm / Hand */}
        {isWaving && (
          <g
            className="animate-wave"
            style={{ transformOrigin: "72px 68px" }}
          >
            <path
              d="M72 68C77 60 80 54 84 46"
              stroke="#8fa896"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="84" cy="45" r="3" fill="#8fa896" />
          </g>
        )}

        {/* Laptop in front */}
        {!isWaving && (
          <path
            d="M48 84H72L75 90H45L48 84Z"
            fill="#8fa896"
            opacity="0.8"
          />
        )}

        {/* Radial Gradients */}
        <defs>
          <radialGradient
            id="body_glow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(60 60) scale(45)"
          >
            <stop stopColor="#8fa896" />
            <stop offset="1" stopColor="#8fa896" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
