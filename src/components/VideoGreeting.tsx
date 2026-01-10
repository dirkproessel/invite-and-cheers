import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
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
      <div className="relative rounded-2xl overflow-hidden shadow-glow bg-card border border-gold-light/30">
        {/* Decorative frame */}
        <div className="absolute inset-0 border-4 border-gold/20 rounded-2xl pointer-events-none z-10" />
        
        {/* Video placeholder with gradient */}
        <div className="relative aspect-video bg-gradient-to-br from-champagne to-rose-light flex items-center justify-center">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster=""
            onEnded={() => setIsPlaying(false)}
          >
            {/* Add video source here */}
            <source src="" type="video/mp4" />
          </video>
          
          {/* Play button overlay */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-20 w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-glow transition-colors hover:bg-primary"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-primary-foreground" />
            ) : (
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            )}
          </motion.button>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer opacity-50" />
        </div>
        
        {/* Caption */}
        <div className="p-4 text-center bg-card/80 backdrop-blur-sm">
          <p className="font-display text-lg text-foreground">
            🎬 Persönliche Video-Grußbotschaft
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Klicke zum Abspielen
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoGreeting;
