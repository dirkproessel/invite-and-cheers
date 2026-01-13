import { motion } from "framer-motion";
import { useMemo } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: "circle" | "star" | "triangle" | "rope";
}

const Confetti = () => {
  const pieces = useMemo<ConfettiPiece[]>(() => {
    const colors = [
      "hsl(25 95% 55%)",     // Climbing orange
      "hsl(30 90% 65%)",     // Light orange
      "hsl(30 45% 35%)",     // Rope brown
      "hsl(200 70% 50%)",    // Sky blue
      "hsl(150 60% 45%)",    // Forest green
      "hsl(45 90% 60%)",     // Yellow
    ];
    
    const shapes: ("circle" | "star" | "triangle" | "rope")[] = ["circle", "star", "triangle", "rope"];
    
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
      case "triangle":
        return "polygon(50% 0%, 0% 100%, 100% 100%)";
      case "star":
        return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
      case "rope":
        return "ellipse(20% 50% at 50% 50%)";
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
