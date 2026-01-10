import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import VideoGreeting from "@/components/VideoGreeting";
import EventDetails from "@/components/EventDetails";
import RSVPButtons from "@/components/RSVPButtons";
import Confetti from "@/components/Confetti";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-celebration">
      <Confetti />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Video Greeting */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl text-center text-foreground mb-8"
          >
            Eine persönliche Nachricht für dich
          </motion.h2>
          <VideoGreeting />
        </section>
        
        {/* Event Details */}
        <section>
          <EventDetails />
        </section>
        
        {/* RSVP Section */}
        <section className="max-w-lg mx-auto bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-gold-light/20 shadow-soft">
          <RSVPButtons />
        </section>
        
        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/50">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            Mit Liebe erstellt 💛
          </motion.p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Bei Fragen: max@beispiel.de
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
