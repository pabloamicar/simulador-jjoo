import { OlimpicGame } from "./Classes/OlimpicGame.class";
import { Contestant } from "./Classes/Contestant.class";
import { Countries } from "./types/interface";
console.log("Starting the olimpic games!⚽️🏀🏈⚾️🥎");

const sinchornizedSwimming = new OlimpicGame("Nado sincronizado");
const chileanContestant = new Contestant("Pablinho", Countries.CHILE);
const americanContestant = new Contestant("James Jameson", Countries.USA);
const japaneseContestant = new Contestant("Sakamoto", Countries.JAPAN);

sinchornizedSwimming.addContestant(chileanContestant);
sinchornizedSwimming.addContestant(americanContestant);
sinchornizedSwimming.addContestant(japaneseContestant);

sinchornizedSwimming.playGame();
