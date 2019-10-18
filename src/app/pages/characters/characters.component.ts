import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonService } from '../../services/person.service';
import { Character } from '../../classes/person';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  pages: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.currentPage = +routeParams.page;
      this.nextPage = this.currentPage + 1;
      this.prevPage = this.currentPage - 1;
      this.pages = this.personService.getNumberCharacterPages();
      this.getPageOfCharacters(this.currentPage);
	  });
  }

  getPageOfCharacters(page: number): void {
    this.personService.getCharacters(page).subscribe(characters => this.characters = characters);
  }

  counter(i: number) {
    return new Array(i);
}

}