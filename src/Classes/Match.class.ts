import { Contestant } from "./Contestant.class";
import { Sports, Countries, Athlete, Medals } from "../types/interface";

export class Match {
  private athletes: Athlete[];
  private result: { country: Countries; medal: Medals }[];
  constructor(private name: Sports) {
    this.athletes = [];
    this.result = [];
  }

  playGame() {
    if (this.athletes.length < 3) {
      console.log(
        "Wooops! Looks like this match lack an enogh numbers of athletes 😭"
      );
      return;
    }
    console.log(`Starting the match: ${this.name} !!!`);
    console.table(this.athletes);
    this.assignPlaces();
    console.log("OMG, so amazing game 🤯");
    this.showPlaces();
  }

  addAthlete(athlete: Athlete) {
    this.athletes.push(athlete);
  }

  private assignPlaces() {
    this.athletes.sort(() => Math.random() - 0.5);
  }

  private assignMedal(winnerCountry: Countries, medal: Medals) {
    this.result.push({ country: winnerCountry, medal });
  }

  private showPlaces() {
    console.log(`🏆We got the winners for ${this.name} game🏆`);
    this.athletes.forEach((contestant, index) => {
      const { name, nationality } = contestant;
      switch (index) {
        case 0:
          this.assignMedal(nationality, Medals.GOLD);
          console.log(`🥇 1st place: ${name} from  ${nationality}`);
          break;
        case 1:
          this.assignMedal(nationality, Medals.SILVER);
          console.log(`🥈 2nd place: ${name} from  ${nationality}`);
          break;
        case 2:
          this.assignMedal(nationality, Medals.BRONZE);
          console.log(`🥉 3rd place: ${name} from  ${nationality}`);
          break;
        default:
          console.log(`🏅  ${index + 1}° place: ${name} from  ${nationality}`);
          break;
      }
    });
    console.log("Thank you for watching the games! 🎉");
  }

  public getResult() {
    return this.result;
  }
}
