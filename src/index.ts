import { Match } from "./Classes/Match.class";
import { OlimpicGames } from "./Classes/OlimpicGames.class";
import { getRandomSport } from "./Helpers/getRandomSport.helper";
import { config } from "./config";

const numberOfMatches = Number(config.NUMBER_OF_MATCHES);
const chileanMatchs = new OlimpicGames(config.OLIMPIC_GAMES_VERSION);

for (let i = 0; i < numberOfMatches; i++) {
  chileanMatchs.addGame(new Match(getRandomSport()));
}
chileanMatchs.startOlimpicGames();
