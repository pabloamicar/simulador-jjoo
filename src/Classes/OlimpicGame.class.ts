import { Contestant } from "./Contestant.class";

export class OlimpicGame {
  private contestants: Contestant[];
  constructor(private name: string) {
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
    console.log("Lets see the contestans of this game:");
    this.contestants.forEach((contestant) => {
      console.log(contestant.showContestat());
    });
    this.assignPlaces();
    console.log("OMG, so amazing game 🤯");
    this.showPlaces();
  }

  addContestant(contestant: Contestant) {
    contestant.setPlace(0);
    this.contestants.push(contestant);
  }

  private assignPlaces() {
    this.contestants.sort(() => Math.random() - 0.5);
  }

  private showPlaces() {
    console.log("🏆We got the winners!🏆");
    console.log(`🥇 1st place: ${this.contestants[0].showContestat()}`);
    console.log(`🥈 2nd place: ${this.contestants[1].showContestat()}`);
    console.log(`🥉 3rd place: ${this.contestants[2].showContestat()}`);
    console.log("Thank you for watching the games! 🎉");
  }
}
