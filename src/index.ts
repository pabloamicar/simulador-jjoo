import { OlimpicGame } from "./Classes/OlimpicGame.class";
import { OlimpicEvent } from "./Classes/OlimpicEvent.class";
import { getRandomSport } from "./Helpers/getRandomSport.helper";

const chileanOlimpicGames = new OlimpicEvent("Chile 2025");

for (let i = 0; i < 3; i++) {
  chileanOlimpicGames.addGame(new OlimpicGame(getRandomSport()));
}
chileanOlimpicGames.startGames();
