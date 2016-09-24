import {Component} from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'navigation',
    //styles: [".router-link-active { background-color: red; }"],
    template: `
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!--<li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>-->
      <li [routerLinkActive]="['active']"><a [routerLink]="['person-overview']">Start</a></li>
      <li [routerLinkActive]="['active']"><a [routerLink]="['another']">En annan sida</a></li>
      <li><a href="#">Export</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item</a></li>
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
      <li><a href="">More navigation</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
    </ul>
  </div>
  `
})

export class LeftNavigation {
    constructor(private router : Router) {

    }
}
