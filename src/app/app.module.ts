import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DashboardComponent} from './dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './shared/click-me/click-me.component';
import { KeyupComponent } from './shared/keyup/keyup.component';
import { LittleTourComponent } from './shared/little-tour/little-tour.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClickMeComponent,
    KeyupComponent,
    LittleTourComponent

  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
