import { motion } from "framer-motion";
import heroImage from "@/assets/birthday-hero.jpg";
import { Youtube, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="YouTube Party background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      
      {/* Animated emojis */}
      {["🎮", "🎬", "⭐", "🎉", "🔥", "💜"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-5xl"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <Youtube className="w-12 h-12 text-primary" />
          <span className="text-5xl">🎂</span>
          <Youtube className="w-12 h-12 text-primary" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-6 h-6 text-sunny" />
          Du bist eingeladen zu
          <Sparkles className="w-6 h-6 text-sunny" />
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-gradient-youtube mb-4 drop-shadow-lg"
        >
          LEONS
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-glow mb-6"
        >
          <span className="text-4xl sm:text-5xl font-bold">
            8. GEBURTSTAG! 🎉
          </span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl md:text-2xl text-foreground max-w-lg mx-auto font-semibold"
        >
          Gaming 🎮 • Spaß 🎉 • Kuchen 🎂 • Freunde 💜
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Das wird die BESTE Party des Jahres!
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
