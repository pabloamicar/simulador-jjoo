import { OlimpicGame } from "./Classes/OlimpicGame.class";
import { Contestant } from "./Classes/Contestant.class";
import { Countries } from "./types/interface";
import { Sports } from "./types/interface";
console.log("Starting the olimpic games!⚽️🏀🏈⚾️🥎");

import { faker } from "@faker-js/faker";
const sinchornizedSwimming = new OlimpicGame(Sports.Karate);

const chileanContestant = new Contestant("Pablinho", Countries.CHILE);
const americanContestant = new Contestant(
  faker.person.fullName(),
  Countries.USA
);
const japaneseContestant = new Contestant(
  faker.person.fullName(),
  Countries.JAPAN
);
const germanContestant = new Contestant(
  faker.person.fullName(),
  Countries.GERMANY
);

sinchornizedSwimming.addContestant(chileanContestant);
sinchornizedSwimming.addContestant(americanContestant);
sinchornizedSwimming.addContestant(japaneseContestant);
sinchornizedSwimming.addContestant(germanContestant);

sinchornizedSwimming.playGame();
