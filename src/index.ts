import { Match } from "./Classes/Match.class";
import { OlimpicGames } from "./Classes/OlimpicGames.class";
import { getRandomSport } from "./Helpers/getRandomSport.helper";

const chileanMatchs = new OlimpicGames("Chile 2025");

for (let i = 0; i < 3; i++) {
  chileanMatchs.addGame(new Match(getRandomSport()));
}
chileanMatchs.startOlimpicGames();
