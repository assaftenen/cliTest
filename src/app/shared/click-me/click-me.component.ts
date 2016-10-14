import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  public clickMessage: string;
  constructor() { }

  onClickMe() {
    this.clickMessage = "You are my Hero!!!"
  }
  ngOnInit() {
  }

}
