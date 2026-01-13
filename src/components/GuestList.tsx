import { motion } from "framer-motion";
import { Check, X, HelpCircle, User } from "lucide-react";
import { INVITEES } from "@/config/invitees";
import { useEffect, useState } from "react";

export const GuestList = () => {
  // We use a state to force re-render when localStorage changes (though simple storage events don't trigger this automatically in same tab)
  const [guestStatuses, setGuestStatuses] = useState<Record<string, string | null>>({});

  useEffect(() => {
    const statuses: Record<string, string | null> = {};
    Object.keys(INVITEES).forEach((slug) => {
      const status = localStorage.getItem(`rsvp_status_${INVITEES[slug].name}`);
      statuses[slug] = status;
    });
    setGuestStatuses(statuses);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto w-full p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg"
    >
      <h3 className="text-2xl font-display font-bold text-center mb-8 text-foreground">
        Gästeliste
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(INVITEES).map(([slug, invitee]) => {
          const status = guestStatuses[slug];

          return (
            <div
              key={slug}
              className="flex items-center justify-between p-4 bg-background/60 rounded-xl border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">{invitee.name}</span>
              </div>

              <div className="flex items-center gap-2">
                {status === "yes" && (
                  <span className="flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
                    <Check className="w-4 h-4 mr-1" />
                    Dabei
                  </span>
                )}
                {status === "no" && (
                  <span className="flex items-center text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm font-medium">
                    <X className="w-4 h-4 mr-1" />
                    Absage
                  </span>
                )}
                {!status && (
                  <span className="flex items-center text-muted-foreground bg-secondary px-3 py-1 rounded-full text-sm font-medium">
                    <HelpCircle className="w-4 h-4 mr-1" />
                    Offen
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
