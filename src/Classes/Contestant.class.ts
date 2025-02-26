import { Countries } from "../types/interface";
export class Contestant {
  private place = 0;
  constructor(private name: string, private country: Countries) {}

  setPlace(place: number) {
    this.place = place;
  }

  showContestat() {
    return { name: this.name, country: this.country };
  }
}
