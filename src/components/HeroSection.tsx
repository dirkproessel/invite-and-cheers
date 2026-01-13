import { motion } from "framer-motion";
import heroImage from "@/assets/birthday-hero.jpg";
import { Sparkles, Crown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Olympische Götter Party Hintergrund"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>
      
      {/* Animated Greek symbols */}
      {["⚡", "🏛️", "🦅", "🌿", "🔱", "🏆"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-5xl"
          style={{
            left: `${8 + i * 15}%`,
            top: `${12 + (i % 3) * 28}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3 + i * 0.4,
            delay: i * 0.3,
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
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <span className="text-5xl">🏛️</span>
          <Crown className="w-14 h-14 text-primary drop-shadow-lg" />
          <span className="text-5xl">⚡</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-3"
        >
          <Sparkles className="w-6 h-6 text-primary" />
          Du bist eingeladen zu
          <Sparkles className="w-6 h-6 text-primary" />
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-gradient-gold mb-4 drop-shadow-lg tracking-wider"
        >
          RICHARDS
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="inline-block bg-gradient-to-r from-primary via-olympian-gold-light to-primary text-primary-foreground px-10 py-5 rounded-xl shadow-golden shimmer-gold mb-6 border-2 border-primary/30"
        >
          <span className="text-4xl sm:text-5xl font-bold tracking-wide">
            GEBURTSTAG! 🎉
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6"
        >
          <p className="text-2xl md:text-3xl text-foreground font-semibold tracking-wide">
            ✨ Olympische Götter und Helden ✨
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-4 text-lg text-muted-foreground italic"
        >
          Ein episches Abenteuer erwartet dich!
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
