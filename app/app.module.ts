import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import {TopNavbar} from './top-navbar.component';
import {LeftNavigation} from './left-navigation';
import {PersonOverview} from './person-component';
import {Another} from './another-component';
import {Person} from './person';

import {SharedService} from './services/shared-service';
import {PersonService} from './services/person-service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
 ],
  declarations: [
      AppComponent,
      TopNavbar,
      LeftNavigation,
      PersonOverview,
      Another
  ],
  providers: [
      SharedService,
      PersonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
