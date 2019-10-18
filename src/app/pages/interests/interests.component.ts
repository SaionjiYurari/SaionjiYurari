import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonService } from '../../services/person.service';
import { Interest } from '../../classes/interest';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests: Interest[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getInterests(routeParams.id);
	  });
  }

  getInterests(id: number): void {
    this.personService.getInterests(id)
      .subscribe(interests => this.interests = interests);
  }

}