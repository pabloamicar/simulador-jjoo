import { Contestant } from "./Contestant.class";
import { Sports } from "../types/interface";

export class OlimpicGame {
  private contestants: Contestant[];
  constructor(private name: Sports) {
    this.contestants = [];
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

  private showPlaces() {
    console.log("🏆We got the winners!🏆");
    const medals = ["🥇", "🥈", "🥉"];

    this.contestants.forEach((contestant, index) => {
      const { name, country } = contestant.showContestat();

      const placeText =
        index < 3
          ? `${medals[index]} ${index + 1}° place`
          : `🏅 ${index + 1}° place`;

      console.log(`${placeText} ${name} from ${country}`);
    });

    console.log("Thank you for watching the games! 🎉");
  }
}
