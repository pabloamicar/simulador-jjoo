export enum Countries {
  CHILE = `Chile`,
  USA = "United States",
  CANADA = "Canada",
  BRAZIL = "Brazil",
  FRANCE = "France",
  GERMANY = "Germany",
  JAPAN = "Japan",
  AUSTRALIA = "Australia",
  INDIA = "India",
  MEXICO = "Mexico",
  ITALY = "Italy",
}

export enum Sports {
  Soccer = "⚽ Soccer",
  Basketball = "🏀 Basketball",
  Baseball = "⚾ Baseball",
  Tennis = "🎾 Tennis",
  Football = "🏈 Football",
  Golf = "⛳ Golf",
  Swimming = "🏊 Swimming",
  Cycling = "🚴 Cycling",
  Running = "🏃 Running",
  Boxing = "🥊 Boxing",
  Skiing = "⛷️ Skiing",
  Surfing = "🏄 Surfing",
  Weightlifting = "🏋️ Weightlifting",
  Hockey = "🏒 Hockey",
  Volleyball = "🏐 Volleyball",
  TableTennis = "🏓 Table Tennis",
  Badminton = "🏸 Badminton",
  Chess = "♟️ Chess",
  Karate = "🥋 Karate",
  AutoRacing = "🏎️ Auto Racing",
}

export interface CountryMedals {
  name: Countries;
  gold: number;
  silver: number;
  bronze: number;
}

export enum Medals {
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
}
