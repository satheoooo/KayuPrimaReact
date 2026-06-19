import { useMemo } from "react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  scale: number;
}

const woodColors = [
  "bg-[#8B4513]",   // Saddle Brown
  "bg-[#A0522D]",   // Sienna
  "bg-[#6B4423]",   // Brown wood
  "bg-[#2F5E2F]",   // Forest Green
  "bg-[#3d7a3d]",   // Light Green
  "bg-[#D2691E]",   // Chocolate
  "bg-[#CD853F]",   // Peru
  "bg-[#DEB887]",   // Burlywood
];

function WoodParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      color: woodColors[Math.floor(Math.random() * woodColors.length)],
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "1000px" }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute ${p.color} rounded-sm`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            transform: `scale(${p.scale}) rotateX(${p.rotation}deg) rotateY(${p.rotation}deg)`,
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        />
      ))}

      {/* Larger floating wood blocks */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`block-${i}`}
          className={`absolute ${woodColors[i % woodColors.length]} rounded-lg`}
          style={{
            width: `${Math.random() * 50 + 40}px`,
            height: `${Math.random() * 30 + 20}px`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            opacity: 0.15,
            transform: `rotateX(${Math.random() * 45}deg) rotateY(${Math.random() * 45}deg)`,
            animation: `float-block ${Math.random() * 10 + 15}s ease-in-out ${Math.random() * 5}s infinite`,
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          }}
        />
      ))}

      {/* Decorative circles */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute rounded-full bg-[#2F5E2F]"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.05,
            filter: "blur(40px)",
            animation: `float-circle ${Math.random() * 8 + 12}s ease-in-out ${Math.random() * 3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default WoodParticles;
