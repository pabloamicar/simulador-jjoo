import { Match } from "./Match.class";
import { Countries, Medals, Athlete } from "../types/interface";
import { faker } from "@faker-js/faker";
import { getRandomCountry } from "../Helpers/getRandomCountry.helper";

export class OlimpicGames {
  private matches: Match[];
  private medalTable: {
    country: Countries;
    gold: number;
    silver: number;
    bronze: number;
  }[];

  constructor(private name: string) {
    this.matches = [];
    this.medalTable = [];
  }

  public addGame(Match: Match) {
    this.matches.push(Match);
  }

  public startOlimpicGames() {
    if (this.matches.length < 1) {
      console.log(
        `You didn't added any matches, dummy. the Olimpic Games, ${OlimpicGames.name}  are cancelled >:(`
      );
      return;
    }
    console.log(
      `⚽️🏀🏈⚾️🥎 Starting the Olimpic Games, ${this.name} !⚽️🏀🏈⚾️🥎`
    );

    this.matches.forEach((match) => {
      //Hacer todas las asignaciones que haciamos en index.ts
      match.addAthlete({
        name: faker.person.fullName(),
        nationality: getRandomCountry(),
      });
      match.addAthlete({
        name: faker.person.fullName(),
        nationality: getRandomCountry(),
      });
      match.addAthlete({
        name: faker.person.fullName(),
        nationality: getRandomCountry(),
      });
      match.playGame();
      this.updateMedalTable(match.getResult());
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
