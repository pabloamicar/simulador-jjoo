import { OlimpicGame } from "./OlimpicGame.class";
import { Countries, Medals } from "../types/interface";
import { Contestant } from "./Contestant.class";
import { faker } from "@faker-js/faker";
import { getRandomCountry } from "../Helpers/getRandomCountry.helper";

export class OlimpicEvent {
  private games: OlimpicGame[];
  private medalTable: {
    country: Countries;
    gold: number;
    silver: number;
    bronze: number;
  }[];

  constructor(private name: string) {
    this.games = [];
    this.medalTable = [];
  }

  public addGame(olimpicGame: OlimpicGame) {
    this.games.push(olimpicGame);
  }

  private generateRandomContestant() {
    return new Contestant(faker.person.fullName(), getRandomCountry());
  }

  public startGames() {
    if (this.games.length < 1) {
      console.log(
        "You didn't added any games, dummy. The games are cancelled >:("
      );
      return;
    }
    console.log(
      `⚽️🏀🏈⚾️🥎 Starting the olimpic games, ${this.name} !⚽️🏀🏈⚾️🥎`
    );

    this.games.forEach((game) => {
      //Hacer todas las asignaciones que haciamos en index.ts
      game.addContestant(this.generateRandomContestant());
      game.addContestant(this.generateRandomContestant());
      game.addContestant(this.generateRandomContestant());
      game.playGame();
      this.updateMedalTable(game.getResult());
    });
    console.table(this.medalTable);
  }

  updateMedalTable(result: { country: Countries; medal: Medals }[]): void {
    for (const entry of result) {
      const existingEntry = this.medalTable.find(
        (record) => record.country === entry.country
      );

      if (existingEntry) {
        // Si el país ya está en la tabla, incrementar la medalla correspondiente
        existingEntry[entry.medal]++;
      } else {
        // Si el país no está en la tabla, agregar un nuevo registro
        this.medalTable.push({
          country: entry.country,
          gold: entry.medal === "gold" ? 1 : 0,
          silver: entry.medal === "silver" ? 1 : 0,
          bronze: entry.medal === "bronze" ? 1 : 0,
        });
      }
    }
    this.medalTable.sort(
      (a, b) =>
        b.gold - a.gold || // Primero, más oros
        b.silver - a.silver || // Luego, más platas
        b.bronze - a.bronze // Finalmente, más bronces
    );
  }
}
