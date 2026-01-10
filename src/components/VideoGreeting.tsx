import { motion } from "framer-motion";
import { Play, Pause, Youtube } from "lucide-react";
import { useState, useRef } from "react";

const VideoGreeting = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      {/* Rainbow border effect */}
      <div className="absolute -inset-1 rainbow-border rounded-3xl opacity-75 blur-sm" />
      
      <div className="relative rounded-2xl overflow-hidden bg-card border-4 border-gaming-purple/50 shadow-pop">
        {/* YouTube-style top bar */}
        <div className="bg-primary px-4 py-2 flex items-center gap-2">
          <Youtube className="w-6 h-6 text-primary-foreground" />
          <span className="font-bold text-primary-foreground text-sm">EXKLUSIVES VIDEO!</span>
        </div>
        
        {/* Video area */}
        <div className="relative aspect-video bg-gradient-to-br from-gaming-purple to-electric-blue flex items-center justify-center">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster=""
            onEnded={() => setIsPlaying(false)}
          >
            <source src="" type="video/mp4" />
          </video>
          
          {/* Play button - YouTube style */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-20 w-24 h-24 rounded-2xl bg-primary flex items-center justify-center shadow-glow pulse-glow transition-all"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-primary-foreground" />
            ) : (
              <Play className="w-10 h-10 text-primary-foreground ml-1" />
            )}
          </motion.button>
          
          {/* Decorative emojis */}
          <motion.span 
            className="absolute top-4 left-4 text-4xl"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🎮
          </motion.span>
          <motion.span 
            className="absolute top-4 right-4 text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            🎬
          </motion.span>
          <motion.span 
            className="absolute bottom-4 left-4 text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ⭐
          </motion.span>
          <motion.span 
            className="absolute bottom-4 right-4 text-4xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🎉
          </motion.span>
        </div>
        
        {/* Caption */}
        <div className="p-4 text-center bg-card">
          <p className="font-bold text-xl text-foreground">
            🎬 Meine Video-Nachricht an DICH! 🎬
          </p>
          <p className="text-muted-foreground mt-1">
            Drück Play und schau dir meine Einladung an!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoGreeting;
