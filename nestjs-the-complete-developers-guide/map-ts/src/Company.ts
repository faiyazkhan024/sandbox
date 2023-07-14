import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public markerContent() {
    return `
      <h2>Company Name: ${this.name}</h2> 
      <h3>CatchPhrase: ${this.catchPhrase}</h3>
    `;
  }
}
