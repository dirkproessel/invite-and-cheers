import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import VideoGreeting from "@/components/VideoGreeting";
import EventDetails from "@/components/EventDetails";
import RSVPButtons from "@/components/RSVPButtons";
import Confetti from "@/components/Confetti";
import { Youtube, Bell, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-fun">
      <Confetti />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Video Greeting */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Bell className="w-8 h-8 text-sunny wiggle" />
            <h2 className="text-4xl text-center text-foreground">
              SCHAU DIR DAS AN!
            </h2>
            <Bell className="w-8 h-8 text-sunny wiggle" />
          </motion.div>
          <VideoGreeting />
        </section>
        
        {/* Event Details */}
        <section className="relative">
          <EventDetails />
        </section>
        
        {/* RSVP Section */}
        <section className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-2 rainbow-border rounded-3xl opacity-30 blur-md" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border-4 border-neon-pink/30 shadow-pop">
              <RSVPButtons />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="text-center py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Youtube className="w-5 h-5 text-primary" />
            <span>Made with</span>
            <Heart className="w-5 h-5 text-neon-pink fill-neon-pink" />
            <span>für die coolste Party!</span>
          </motion.div>
          <p className="text-sm text-muted-foreground/60 mt-3">
            Fragen? Schreib an: leon@beispiel.de 📧
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
