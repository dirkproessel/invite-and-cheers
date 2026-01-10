import { motion } from "framer-motion";
import { Check, X, PartyPopper, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const RSVPButtons = () => {
  const [responded, setResponded] = useState<"yes" | "no" | null>(null);

  const handleRSVP = (response: "yes" | "no") => {
    setResponded(response);
    
    if (response === "yes") {
      toast({
        title: "Wunderbar! 🎉",
        description: "Wir freuen uns riesig, dich zu sehen!",
      });
    } else {
      toast({
        title: "Schade! 😢",
        description: "Du wirst uns fehlen. Vielleicht beim nächsten Mal!",
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
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <PartyPopper className="w-16 h-16 mx-auto text-primary" />
            </motion.div>
            <h3 className="font-display text-2xl text-foreground">
              Du bist dabei!
            </h3>
            <p className="text-muted-foreground">
              Wir freuen uns auf dich! 🎂
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Heart className="w-16 h-16 mx-auto text-accent" />
            <h3 className="font-display text-2xl text-foreground">
              Danke für deine Antwort
            </h3>
            <p className="text-muted-foreground">
              Du wirst in Gedanken bei uns sein ❤️
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
      <h3 className="font-display text-2xl text-center text-foreground">
        Bist du dabei?
      </h3>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => handleRSVP("yes")}
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-primary hover:bg-gold-dark text-primary-foreground shadow-glow transition-all duration-300"
          >
            <Check className="w-5 h-5 mr-2" />
            Ja, ich komme!
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => handleRSVP("no")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <X className="w-5 h-5 mr-2" />
            Leider nicht
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RSVPButtons;
