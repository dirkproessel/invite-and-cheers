import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Cake } from "lucide-react";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "WANN",
      value: "Donnerstag, 05. März 2026",
      emoji: "📅",
    },
    {
      icon: Clock,
      label: "UHRZEIT",
      value: "Ab 13:00 Uhr",
      emoji: "⏰",
    },
    {
      icon: MapPin,
      label: "WO",
      value: "Musterstraße 123, 12345 Berlin",
      emoji: "📍",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full max-w-xl mx-auto"
    >
      {/* Rainbow border effect */}
      <div className="absolute -inset-1 rainbow-border rounded-3xl opacity-50 blur-sm" />
      
      <div className="relative bg-card rounded-3xl p-6 sm:p-8 border-4 border-electric-blue/50 shadow-pop">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Cake className="w-8 h-8 text-primary wiggle" />
          <h3 className="text-3xl text-center text-foreground">
            PARTY DETAILS
          </h3>
          <Cake className="w-8 h-8 text-primary wiggle" />
        </div>
        
        <div className="space-y-4">
          {details.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 hover:from-secondary/30 hover:to-accent/30 transition-all border-2 border-transparent hover:border-gaming-purple/30"
            >
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-neon-pink flex items-center justify-center flex-shrink-0 shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <div className="flex-1">
                <p className="text-sm text-gaming-purple font-bold tracking-wider">
                  {item.emoji} {item.label}
                </p>
                <p className="text-foreground font-bold text-lg">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
