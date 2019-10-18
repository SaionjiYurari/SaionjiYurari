import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit { 
  @ViewChild('container',{static: false} ) myDiv: ElementRef;
  title = 'Relax~🌸'

  constructor(private titleService: Title,
    private route: Router) {
    titleService.setTitle(this.title);

  }
  ngAfterViewInit() {
  this.route.events.subscribe(routeParams => {
    this.myDiv.nativeElement.scrollTop = 0;
    });
    }
}
