import {Component, ViewChild} from '@angular/core';
import {SharedService} from './services/shared-service';
import {TopNavbar} from './top-navbar.component';
import {LeftNavigation} from './left-navigation';
import {PersonOverview} from './person-component';
import {Another} from './another-component';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
    <top-navbar *ngIf="sharedService.showTopNavbar"></top-navbar>
    <div class="container-fluid">
        <div class="row">
          <navigation></navigation>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <router-outlet></router-outlet>
          </div>
        </div>
    </div>
  `
})

export class AppComponent {

    constructor(private sharedService : SharedService) {
        sharedService.showTopNavbar = true;
    }
}
