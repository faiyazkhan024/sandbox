import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public markerContent() {
    return `<h2>User Name: ${this.name}</h2>`;
  }
}
