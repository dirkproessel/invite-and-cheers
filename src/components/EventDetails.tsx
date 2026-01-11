import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Crown } from "lucide-react";

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
      {/* Golden border effect */}
      <div className="absolute -inset-1 golden-border rounded-2xl opacity-40 blur-sm" />
      
      <div className="relative bg-gradient-marble rounded-2xl p-6 sm:p-8 border-2 border-primary/40 shadow-golden">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Crown className="w-8 h-8 text-primary float-gentle" />
          <h3 className="text-3xl text-center text-foreground tracking-wider">
            DIE FEIERLICHKEITEN
          </h3>
          <Crown className="w-8 h-8 text-primary float-gentle" />
        </div>
        
        <div className="space-y-4">
          {details.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card/80 hover:bg-card transition-all border border-primary/20 hover:border-primary/40 hover:shadow-elegant"
            >
              <motion.div 
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-bronze flex items-center justify-center flex-shrink-0 shadow-golden"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <div className="flex-1">
                <p className="text-sm text-secondary font-display font-bold tracking-widest">
                  {item.emoji} {item.label}
                </p>
                <p className="text-foreground font-semibold text-lg font-body">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative Greek pattern */}
        <div className="mt-8 flex justify-center gap-2 text-primary/60">
          <span>🏛️</span>
          <span className="tracking-widest">• • •</span>
          <span>⚡</span>
          <span className="tracking-widest">• • •</span>
          <span>🏛️</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
