import {Component, ViewChild} from '@angular/core';
import {SharedService} from './services/shared-service';
import {TopNavbar} from './top-navbar.component';
import {LeftNavigation} from './left-navigation';
import {PersonOverview} from './person-component';
import {Another} from './another-component';
import {Observable} from 'rxjs/Rx';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    directives: [TopNavbar, LeftNavigation, ROUTER_DIRECTIVES],
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
  `,
  providers: [ ROUTER_PROVIDERS, SharedService ]
})

@RouteConfig([
      { path: '/', name: 'Person-overview', component: PersonOverview, useAsDefault: true },
      { path: '/another', name: 'Another', component: Another }
  ])

export class AppComponent {
    showTopNavbar: boolean = true;

    constructor(private sharedService : SharedService) {
        sharedService.showTopNavbar = true;
    }

    onMoreThanSixPersonsChange(e : any) {
      this.showTopNavbar = e.value;
    }

}
