import { Component } from '@angular/core';
import {Hero} from './shared/hero'
import { ClickMeComponent } from './shared/click-me/click-me.component';
import {KeyupComponent} from './shared/keyup/keyup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  myHero:string;
  heroes: any;

  constructor(){
this.title = 'Tour of Hero',
this.heroes = [
   new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')],
this.myHero = this.heroes[0]


  }

}
//