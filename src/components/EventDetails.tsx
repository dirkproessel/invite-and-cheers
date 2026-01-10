import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Gift } from "lucide-react";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "Datum",
      value: "Samstag, 15. Februar 2025",
    },
    {
      icon: Clock,
      label: "Uhrzeit",
      value: "Ab 18:00 Uhr",
    },
    {
      icon: MapPin,
      label: "Ort",
      value: "Musterstraße 123, 12345 Berlin",
    },
    {
      icon: Gift,
      label: "Dresscode",
      value: "Festlich & Bequem",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold-light/30 shadow-soft">
        <h3 className="font-display text-2xl text-center text-foreground mb-6">
          ✨ Details zur Feier ✨
        </h3>
        
        <div className="space-y-4">
          {details.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-champagne/50 hover:bg-champagne transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.label}
                </p>
                <p className="text-foreground font-semibold">
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
