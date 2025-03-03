import { Contestant } from "./Contestant.class";
import { Sports } from "../types/interface";
import { Countries } from "../types/interface";
import { Medals } from "../types/interface";

export class OlimpicGame {
  private contestants: Contestant[];
  private result: { country: Countries; medal: Medals }[];
  constructor(private name: Sports) {
    this.contestants = [];
    this.result = [];
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

  private assignMedal(winnerCountry: Countries, medal: Medals) {
    this.result.push({ country: winnerCountry, medal });
  }

  private showPlaces() {
    console.log(`🏆We got the winners for ${this.name} game🏆`);
    this.contestants.forEach((contestant, index) => {
      const { name, country } = contestant.showContestat();
      switch (index) {
        case 0:
          this.assignMedal(country, Medals.GOLD);
          console.log(`🥇 1st place: ${name} from  ${country}`);
          break;
        case 1:
          this.assignMedal(country, Medals.SILVER);
          console.log(`🥈 2nd place: ${name} from  ${country}`);
          break;
        case 2:
          this.assignMedal(country, Medals.BRONZE);
          console.log(`🥉 3rd place: ${name} from  ${country}`);
          break;
        default:
          console.log(`🏅  ${index + 1}° place: ${name} from  ${country}`);
          break;
      }
    });
    console.log("Thank you for watching the games! 🎉");
  }

  public getResult() {
    return this.result;
  }
}
