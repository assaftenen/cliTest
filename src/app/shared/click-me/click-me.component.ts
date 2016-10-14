import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
//  styles: [`

//    h1 {
//     background-color: #4CAF50; /* Green */
//     border: none;
//     color: deeppink;
//     padding: 15px 32px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;
// }
//  `]
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
