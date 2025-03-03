import { Countries } from "../types/interface";

export function getRandomCountry(): Countries {
  const values = Object.values(Countries);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
