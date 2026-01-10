import { motion } from "framer-motion";
import { useMemo } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  shape: "square" | "circle" | "star";
}

const Confetti = () => {
  const pieces = useMemo<ConfettiPiece[]>(() => {
    const colors = [
      "hsl(0 90% 55%)",      // YouTube red
      "hsl(320 100% 60%)",   // Neon pink
      "hsl(195 100% 50%)",   // Electric blue
      "hsl(280 85% 60%)",    // Gaming purple
      "hsl(45 100% 55%)",    // Sunny yellow
      "hsl(150 100% 45%)",   // Neon green
    ];
    
    const shapes: ("square" | "circle" | "star")[] = ["square", "circle", "star"];
    
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 12,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={piece.shape === "circle" ? "rounded-full" : piece.shape === "star" ? "" : ""}
          style={{
            position: "absolute",
            left: `${piece.x}%`,
            top: -30,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.shape !== "star" ? piece.color : "transparent",
            borderRadius: piece.shape === "circle" ? "50%" : piece.shape === "square" ? "2px" : "0",
            clipPath: piece.shape === "star" 
              ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
              : "none",
            background: piece.shape === "star" ? piece.color : undefined,
          }}
          initial={{ y: -30, rotate: 0, opacity: 1 }}
          animate={{
            y: "100vh",
            rotate: 720,
            opacity: 0,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
