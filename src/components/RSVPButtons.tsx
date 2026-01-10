import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, PartyPopper, Heart, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const RSVPButtons = () => {
  const [responded, setResponded] = useState<"yes" | "no" | null>(null);

  const handleRSVP = (response: "yes" | "no") => {
    setResponded(response);
    
    if (response === "yes") {
      toast({
        title: "YEEEES! 🎉🎮",
        description: "Du bist dabei! Das wird MEGA!",
      });
    } else {
      toast({
        title: "Schade! 😢",
        description: "Du wirst uns fehlen! Nächstes Mal bist du dabei!",
      });
    }
  };

  if (responded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        {responded === "yes" ? (
          <div className="space-y-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, -10, 10, 0]
              }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
            >
              <PartyPopper className="w-20 h-20 mx-auto text-primary" />
            </motion.div>
            <h3 className="text-4xl text-foreground">
              DU BIST DABEI! 🔥
            </h3>
            <p className="text-xl text-muted-foreground">
              Das wird die BESTE Party ever! 🎮🎂🎉
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Heart className="w-20 h-20 mx-auto text-neon-pink" />
            <h3 className="text-4xl text-foreground">
              Danke für deine Antwort!
            </h3>
            <p className="text-xl text-muted-foreground">
              Wir denken an dich! 💜
            </p>
          </div>
        )}
        
        <Button
          variant="ghost"
          className="mt-6 text-muted-foreground hover:text-foreground"
          onClick={() => setResponded(null)}
        >
          Antwort ändern
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-center gap-2">
        <Gamepad2 className="w-8 h-8 text-gaming-purple" />
        <h3 className="text-3xl text-center text-foreground">
          Bist du dabei?
        </h3>
        <Gamepad2 className="w-8 h-8 text-gaming-purple" />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={() => handleRSVP("yes")}
            size="lg"
            className="w-full sm:w-auto px-10 py-8 text-2xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow pulse-glow transition-all rounded-2xl"
          >
            <ThumbsUp className="w-8 h-8 mr-3" />
            JA, ICH KOMME!
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={() => handleRSVP("no")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-10 py-8 text-2xl font-bold border-4 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-primary-foreground transition-all rounded-2xl"
          >
            <ThumbsDown className="w-8 h-8 mr-3" />
            Leider nicht
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RSVPButtons;
