
export interface Invitee {
  name: string;
  videoUrl: string;
}

export const INVITEES: Record<string, Invitee> = {
  oscar: {
    name: "Oscar",
    videoUrl: "https://example.com/videos/oscar.mp4", // Placeholder
  },
  dirk: {
    name: "Dirk",
    videoUrl: "https://example.com/videos/dirk.mp4", // Placeholder
  },
  // Add more invitees here
};

export const DEFAULT_INVITEE: Invitee = {
  name: "Edler Gast",
  videoUrl: "https://example.com/videos/default.mp4", // Placeholder
};
