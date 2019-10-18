import { Injectable } from "@angular/core";
import { PERSON } from "../mocks/mock-person";
import { Person, Details, Website, Character } from "../classes/person";
import { Interest } from "../classes/interest";
import { InterestType } from "../classes/interest-type.enum";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class PersonService {
  constructor() {}

  public getInterests(id: InterestType): Observable<Interest[]> {
    return of(
      PERSON.interests
        .sort((i1, i2) => {
          return i1.name.localeCompare(i2.name);
        })
        .filter(i => id == i.type)
    );
  }

  public getLinks(): Observable<Website[]> {
    return of(PERSON.details.websites);
  }

  public getDetails(): Observable<Details> {
    return of(PERSON.details);
  }

  public getCharacters(page: number): Observable<Character[]> {
    try {
      var num = 16;
      var start = (page - 1) * num;
      num = start + num;
      return of(PERSON.favouriteCharacters
        .sort((i1, i2) => {
          var a = i1.series.localeCompare(i2.series);
          if (a === 0){
            a = i1.name.localeCompare(i2.name)
          }
          return a;
        }).slice(start, num));
    } catch {
      console.log("shit");
      return of([]);
    }
  }

  public getNumberCharacterPages(): number {
    var num =  Math.ceil(((PERSON.favouriteCharacters.length)/ 16));
    return num;
  }
}
