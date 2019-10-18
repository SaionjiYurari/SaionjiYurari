import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  openDropdown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeDropdown() {
    if (this.openDropdown)
    {
      this.openDropdown = false;
    }
  }

}