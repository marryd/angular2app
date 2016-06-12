import {Component, ViewChild} from 'angular2/core';
import {Person} from './person';
import {PersonService} from './services/person-service';
import {TopNavbar} from './top-navbar.component';
import {LeftNavigation} from './left-navigation';
import {PersonOverview} from './person-component';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    directives: [TopNavbar, LeftNavigation, PersonOverview],
    template: `
    <top-navbar *ngIf="showTopNavbar"></top-navbar>
    <div class="container-fluid">
        <div class="row">
          <navigation></navigation>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <person-overview (moreThanSixPersonsChange)="onMoreThanSixPersonsChange($event)"></person-overview>
          </div>
        </div>
    </div>
  `
})
export class AppComponent {
    showTopNavbar: boolean = true;

    constructor() {

    }

    onMoreThanSixPersonsChange(e : any) {
      this.showTopNavbar = e.value;
    }

}
