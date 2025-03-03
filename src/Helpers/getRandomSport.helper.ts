import { Sports } from "../types/interface";
export function getRandomSport(): Sports {
  const values = Object.values(Sports);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
