import { Contestant } from "./Contestant.class";
import { Sports } from "../types/interface";
import { InvitedCountry } from "../types/interface";
import { Countries } from "../types/interface";
import { Medals } from "../types/interface";

export class OlimpicGame {
  private contestants: Contestant[];
  private countriesLeaderboard: InvitedCountry[];
  constructor(private name: Sports) {
    this.contestants = [];
    this.countriesLeaderboard = [];
  }

  playGame() {
    if (this.contestants.length < 3) {
      console.log(
        "Wooops! Looks like this game lack an enogh numbers of contestants 😭"
      );
      return;
    }
    console.log(`Starting the game: ${this.name} !!!`);
    this.showContestans();
    this.assignPlaces();
    console.log("OMG, so amazing game 🤯");
    this.showPlaces();
  }

  addContestant(contestant: Contestant) {
    contestant.setPlace(0);
    this.contestants.push(contestant);
  }
  showContestans() {
    const contestants = this.contestants.map((contestant) => {
      return contestant.showContestat();
    });
    console.table(contestants, ["name"]);
  }

  private assignPlaces() {
    this.contestants.sort(() => Math.random() - 0.5);
  }

  private asignMedal(winnerCountry: Countries, medal: Medals) {
    const index = this.countriesLeaderboard.findIndex(
      (country) => country.name === winnerCountry
    );
    //Sí el país existe, creamos una copia y modificamos el contador de su medalla
    if (index !== -1) {
      const updatedCountry = { ...this.countriesLeaderboard[index] };
      switch (medal) {
        case Medals.GOLD:
          updatedCountry.gold++;
          break;
        case Medals.SILVER:
          updatedCountry.silver++;
          break;
        case Medals.BRONZE:
          updatedCountry.bronze++;
          break;
      }
      this.countriesLeaderboard[index] = updatedCountry;
    } else {
      // Si el país no existe, lo agregamos con la medalla correspondiente
      this.countriesLeaderboard.push({
        name: winnerCountry,
        gold: medal === Medals.GOLD ? 1 : 0,
        silver: medal === Medals.SILVER ? 1 : 0,
        bronze: medal === Medals.BRONZE ? 1 : 0,
      });
    }
  }

  private showPlaces() {
    console.log("🏆We got the winners!🏆");
    this.contestants.forEach((contestant, index) => {
      const { name, country } = contestant.showContestat();
      switch (index) {
        case 0:
          this.asignMedal(country, Medals.GOLD);
          console.log(`🥇 1st place: ${name} from  ${country}`);
          break;
        case 1:
          this.asignMedal(country, Medals.SILVER);
          console.log(`🥈 2nd place: ${name} from  ${country}`);
          break;
        case 2:
          this.asignMedal(country, Medals.BRONZE);
          console.log(`🥉 3rd place: ${name} from  ${country}`);
          break;
        default:
          console.log(`🏅  ${index + 1}° place: ${name} from  ${country}`);
          break;
      }
    });
    console.log("Thank you for watching the games! 🎉");
  }

  showLeaderboard() {
    console.table(this.countriesLeaderboard);
  }
}
