import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import VideoGreeting from "@/components/VideoGreeting";
import EventDetails from "@/components/EventDetails";
import RSVPButtons from "@/components/RSVPButtons";
import Confetti from "@/components/Confetti";
import { GuestList } from "@/components/GuestList";
import { Crown, Sparkles, Heart } from "lucide-react";
import { INVITEES, DEFAULT_INVITEE } from "@/config/invitees";

const Index = () => {
  const { slug } = useParams();
  const invitee = slug && INVITEES[slug.toLowerCase()] ? INVITEES[slug.toLowerCase()] : DEFAULT_INVITEE;

  return (
    <div className="min-h-screen bg-gradient-sky">
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
            <Sparkles className="w-8 h-8 text-primary float-gentle" />
            <h2 className="text-4xl text-center text-foreground tracking-wider">
              {invitee.name !== DEFAULT_INVITEE.name ? `HALLO ${invitee.name.toUpperCase()}!` : "GÖTTLICHE BOTSCHAFT"}
            </h2>
            <Sparkles className="w-8 h-8 text-primary float-gentle" />
          </motion.div>
          <VideoGreeting videoUrl={invitee.videoUrl} />
        </section>
        
        {/* Event Details */}
        <section className="relative">
          <EventDetails />
        </section>
        
        {/* RSVP Section */}
        <section className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-2 golden-border rounded-2xl opacity-25 blur-md" />
            <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/30 shadow-golden">
              <RSVPButtons inviteeName={invitee.name} />
            </div>
          </div>
        </section>

        {/* Guest List Section */}
        <section>
          <GuestList />
        </section>
        
        {/* Footer */}
        <footer className="text-center py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-muted-foreground font-body"
          >
            <Crown className="w-5 h-5 text-primary" />
            <span>Erstellt mit</span>
            <Heart className="w-5 h-5 text-accent fill-accent" />
            <span>für ein göttliches Fest!</span>
          </motion.div>
          <p className="text-sm text-muted-foreground/60 mt-3 font-body">
            Fragen? Schreib an: richard@beispiel.de 📧
          </p>
          
          {/* Greek decorative element */}
          <div className="mt-6 flex justify-center gap-3 text-primary/40 text-2xl">
            <span>🏛️</span>
            <span>⚡</span>
            <span>🦅</span>
            <span>🔱</span>
            <span>🏆</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
