import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, Trophy, Heart, Crown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface RSVPButtonsProps {
  inviteeName: string;
}

const RSVPButtons = ({ inviteeName }: RSVPButtonsProps) => {
  const [responded, setResponded] = useState<"yes" | "no" | null>(null);

  useEffect(() => {
    const savedResponse = localStorage.getItem(`rsvp_status_${inviteeName}`);
    if (savedResponse === "yes" || savedResponse === "no") {
      setResponded(savedResponse);
    } else {
      setResponded(null); // Reset if switching between users without response
    }
  }, [inviteeName]);

  const handleRSVP = (response: "yes" | "no") => {
    setResponded(response);
    localStorage.setItem(`rsvp_status_${inviteeName}`, response);
    
    const message = response === "yes"
      ? "Ich bin dabei! Die Götter freuen sich! ⚡🏆"
      : "Schade, ich kann leider nicht kommen. 😢";

    emailjs.send(
      "service_1f67z2h",
      "template_bbvhvw8",
      {
        message: message,
        from_name: inviteeName,
        to_email: "dirk.proessel@web.de",
      },
      "VdZgO-6DXQUn0qOkU"
    ).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
        toast({
          title: "Fehler beim Senden",
          description: "Die Nachricht konnte nicht gesendet werden.",
          variant: "destructive",
        });
      }
    );

    if (response === "yes") {
      toast({
        title: "Heldenhaft! ⚡🏆",
        description: "Du bist dabei! Die Götter freuen sich!",
      });
    } else {
      toast({
        title: "Schade! 😢",
        description: "Die Götter werden dich vermissen!",
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
                scale: [1, 1.15, 1],
                rotate: [0, -5, 5, -5, 5, 0]
              }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
            >
              <Trophy className="w-20 h-20 mx-auto text-primary drop-shadow-lg" />
            </motion.div>
            <h3 className="text-4xl text-foreground tracking-wide">
              DU BIST DABEI! ⚡
            </h3>
            <p className="text-xl text-muted-foreground font-body">
              Ein wahrer Held des Olymp! 🏛️🏆🦅
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Heart className="w-20 h-20 mx-auto text-accent" />
            <h3 className="text-4xl text-foreground tracking-wide">
              Danke für deine Antwort!
            </h3>
            <p className="text-xl text-muted-foreground font-body">
              Die Götter denken an dich! 💜
            </p>
          </div>
        )}
        
        <Button
          variant="ghost"
          className="mt-6 text-muted-foreground hover:text-foreground font-body"
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
      <div className="flex items-center justify-center gap-3">
        <Crown className="w-8 h-8 text-primary" />
        <h3 className="text-3xl text-center text-foreground tracking-wide">
          Wirst du erscheinen?
        </h3>
        <Crown className="w-8 h-8 text-primary" />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => handleRSVP("yes")}
            size="lg"
            className="w-full sm:w-auto px-10 py-8 text-2xl font-display font-bold bg-gradient-to-r from-primary via-olympian-gold-light to-primary hover:from-primary/90 hover:to-primary/90 text-primary-foreground shadow-golden shimmer-gold transition-all rounded-xl tracking-wide"
          >
            <ThumbsUp className="w-8 h-8 mr-3" />
            JA, ICH KOMME!
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => handleRSVP("no")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-10 py-8 text-2xl font-display font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all rounded-xl tracking-wide"
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
