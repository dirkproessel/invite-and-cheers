import { motion } from "framer-motion";
import { useMemo } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: "laurel" | "star" | "lightning" | "circle";
}

const Confetti = () => {
  const pieces = useMemo<ConfettiPiece[]>(() => {
    const colors = [
      "hsl(45 85% 50%)",     // Olympian gold
      "hsl(45 80% 65%)",     // Light gold
      "hsl(30 60% 45%)",     // Bronze
      "hsl(215 70% 45%)",    // Royal blue
      "hsl(120 35% 40%)",    // Laurel green
      "hsl(280 50% 50%)",    // Accent purple
    ];
    
    const shapes: ("laurel" | "star" | "lightning" | "circle")[] = ["laurel", "star", "lightning", "circle"];
    
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 10 + Math.random() * 14,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
  }, []);

  const getShapePath = (shape: string) => {
    switch (shape) {
      case "laurel":
        return "ellipse(40% 50% at 50% 50%)";
      case "star":
        return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
      case "lightning":
        return "polygon(50% 0%, 70% 35%, 55% 35%, 75% 100%, 30% 55%, 45% 55%, 25% 0%)";
      default:
        return "circle(50% at 50% 50%)";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          style={{
            position: "absolute",
            left: `${piece.x}%`,
            top: -30,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            clipPath: getShapePath(piece.shape),
          }}
          initial={{ y: -30, rotate: 0, opacity: 0.9 }}
          animate={{
            y: "100vh",
            rotate: 540,
            opacity: 0,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
