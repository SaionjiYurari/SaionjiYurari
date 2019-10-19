import { Component, OnInit } from '@angular/core';
import { Website } from '../../classes/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  websites: Website[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.personService.getLinks().subscribe(links => this.websites = links);
  }

  navigate(url: string): void {
    window.location.href = url;
  }
}