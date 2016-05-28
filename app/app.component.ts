import {Component} from 'angular2/core';
import {Person} from './person';
import {PersonService} from './services/person-service';
import {TopNavbar} from './top-navbar.component';

@Component({
    selector: 'my-app',
    directives: [TopNavbar],
    template: `
    <top-navbar></top-navbar>
    <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Analytics</a></li>
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
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1>{{title}}</h1>
        <div *ngFor="let person1 of persons" >{{person1.name}}</div>
        <h2>{{person.name}} details!</h2>
        <div><label>id: </label>{{person.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]='person.name' placeholder='name' />
        </div>
        <div><label>age: </label>{{person.age}}</div>
        </div>
      </div>
    </div>
  `
    ,
    providers: [PersonService]
})
export class AppComponent {
    persons: Person[];
    title = 'Mackan knackar angular 2';
    person: Person = <Person>{ id: 1, name: 'Markus', age: 39 };

    constructor(private personService: PersonService) {

    }

    ngOnInit() {
        this.personService.getPersons().subscribe(
            persons => { this.persons = persons },
            error => console.log(error)
        );
    }
}
