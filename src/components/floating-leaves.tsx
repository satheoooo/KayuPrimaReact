import { useMemo } from "react";

interface Leaf {
  id: number;
  size: number;
  x: number;
  startY: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  blur: number;
  swayAmount: number;
}

const leafColors = [
  "bg-[#228B22]",   // Forest Green
  "bg-[#2E8B57]",   // Sea Green
  "bg-[#3CB371]",   // Medium Sea Green
  "bg-[#2F5E2F]",   // KayuPrima Green
  "bg-[#90EE90]",   // Light Green
  "bg-[#32CD32]",   // Lime Green
  "bg-[#006400]",   // Dark Green
];

function FloatingLeaves() {
  const leaves = useMemo<Leaf[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 12,
      x: Math.random() * 100,
      startY: -(Math.random() * 20 + 10),
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.2,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      blur: Math.random() > 0.7 ? Math.random() * 2 + 1 : 0,
      swayAmount: Math.random() * 100 + 50,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.startY}%`,
            opacity: leaf.opacity,
            filter: leaf.blur > 0 ? `blur(${leaf.blur}px)` : undefined,
            animation: `fall-leaf ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          {/* Leaf SVG */}
          <svg
            width={leaf.size}
            height={leaf.size * 1.4}
            viewBox="0 0 24 34"
            fill="none"
            style={{
              animation: `sway-leaf ${leaf.duration * 0.5}s ease-in-out ${leaf.delay}s infinite`,
            }}
          >
            <path
              d="M12 0C12 0 24 10 24 20C24 27.18 18.63 34 12 34C5.37 34 0 27.18 0 20C0 10 12 0 12 0Z"
              className={leaf.color}
              fill="currentColor"
            />
            <path
              d="M12 6V28"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
            <path
              d="M12 12L18 18"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
            <path
              d="M12 16L6 22"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      ))}

      {/* Larger leaves for depth */}
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={`large-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            top: `-5%`,
            opacity: 0.15,
            filter: "blur(2px)",
            animation: `fall-leaf ${18 + i * 2}s linear ${i * 3}s infinite`,
          }}
        >
          <svg
            width={40}
            height={56}
            viewBox="0 0 24 34"
            fill="none"
            style={{
              animation: `sway-leaf ${10 + i}s ease-in-out ${i * 2}s infinite`,
            }}
          >
            <path
              d="M12 0C12 0 24 10 24 20C24 27.18 18.63 34 12 34C5.37 34 0 27.18 0 20C0 10 12 0 12 0Z"
              className="bg-[#2F5E2F]"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default FloatingLeaves;
