import { motion } from "framer-motion";
import { Play, Pause, Crown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoGreetingProps {
  videoUrl: string;
}

const VideoGreeting = ({ videoUrl }: VideoGreetingProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset video when url changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [videoUrl]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Golden border effect */}
      <div className="absolute -inset-1 golden-border rounded-2xl opacity-75 blur-sm" />
      
      <div className="relative rounded-xl overflow-hidden bg-card border-2 border-primary/40 shadow-golden">
        {/* Greek-style top bar */}
        <div className="bg-gradient-to-r from-primary via-olympian-gold-light to-primary px-4 py-3 flex items-center justify-center gap-3">
          <Crown className="w-5 h-5 text-primary-foreground" />
          <span className="font-display font-bold text-primary-foreground text-sm tracking-widest uppercase">Göttliche Botschaft</span>
          <Crown className="w-5 h-5 text-primary-foreground" />
        </div>
        
        {/* Video area */}
        <div className="relative aspect-video bg-gradient-to-br from-royal-blue via-secondary to-accent flex items-center justify-center">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster=""
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          
          {/* Play button - Greek style */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-bronze flex items-center justify-center shadow-golden shimmer-gold transition-all border-4 border-primary/30"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-primary-foreground" />
            ) : (
              <Play className="w-10 h-10 text-primary-foreground ml-1" />
            )}
          </motion.button>
          
          {/* Decorative Greek symbols */}
          <motion.span 
            className="absolute top-4 left-4 text-4xl"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏛️
          </motion.span>
          <motion.span 
            className="absolute top-4 right-4 text-4xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ⚡
          </motion.span>
          <motion.span 
            className="absolute bottom-4 left-4 text-4xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.span>
          <motion.span 
            className="absolute bottom-4 right-4 text-4xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🦅
          </motion.span>
        </div>
        
        {/* Caption */}
        <div className="p-5 text-center bg-gradient-marble">
          <p className="font-display font-bold text-xl text-foreground tracking-wide">
            ⚡ Eine Nachricht vom Olymp! ⚡
          </p>
          <p className="text-muted-foreground mt-2 font-body text-lg">
            Drück Play und empfange die göttliche Einladung
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoGreeting;
