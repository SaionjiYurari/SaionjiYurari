import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../../classes/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  details: Details;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.personService.getDetails().subscribe(details => this.details = details);
  }

}