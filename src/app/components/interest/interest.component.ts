import { Component, OnInit, Input } from "@angular/core";
import { Interest } from "../../classes/interest";
import { InterestType } from "../../classes/interest-type.enum";

@Component({
  selector: "app-interest",
  templateUrl: "./interest.component.html",
  styleUrls: ["./interest.component.css"]
})
export class InterestComponent implements OnInit {
  @Input() interest: Interest;

  constructor() {
  }

  ngOnInit() {
  }

  getTypeClass(): string {
    return InterestType[this.interest.type];
  }
  
  getImageClass():string {
    if (this.showImage())
    {
    return '';;
    }
    return ' noimg';
  }
  showImage(): boolean{
    return this.interest.imageUrl.length > 0;
  }
}
