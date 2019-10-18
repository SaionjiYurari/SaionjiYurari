import { Interest } from './interest';

export class Person {
  details: Details;
  interests: Interest[];
  favouriteCharacters: Character[];
}

export class Details {
  name: string;
  imageUrl: string;
  websites: Website[];
  buyline: string;
  description: string;
  pronouns: string;
}

export class Website {
  name: string;
  url: string;
}

export class Character {
  name: string;
  series: string;
  imageUrl: string;
}