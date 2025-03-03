import "dotenv/config";

export const config = {
  NUMBER_OF_MATCHES: process.env.NUMBER_OF_MATCHES || 5,
  OLIMPIC_GAMES_VERSION: process.env.OLIMPIC_GAMES_VERSION || "Chile 2025",
};
