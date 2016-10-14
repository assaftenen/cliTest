import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DashboardComponent} from './dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './shared/click-me/click-me.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClickMeComponent

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
