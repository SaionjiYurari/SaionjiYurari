import { InterestType } from './interest-type.enum'

export class Interest {
  name: string;
  description: string;
  imageUrl: string;
  type: InterestType;
}

export class AnimeInterest extends Interest {
  favouriteCharacter: string;
}