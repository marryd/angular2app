import {Component, Output, EventEmitter} from '@angular/core';
import {Person} from './person';
import {PersonService} from './services/person-service';
import {SharedService} from './services/shared-service';

@Component({
    selector: 'person-overview',
    template: `
  <h1>{{title}}</h1>
  <div *ngFor="let person1 of persons" >{{person1.name}}</div>
  <h2>{{person.name}} details!</h2>
  <input type="button" value="toggle top menu" (click)="toggleTopMenu()" />
  <div><label>id: </label>{{person.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]='person.name' placeholder='name' />
  </div>
  <div><label>age: </label>{{person.age}}</div>
  `
})

export class PersonOverview {
    persons: Person[];
    title = 'Mackan knackar angular 2';
    person: Person = <Person>{ id: 1, name: 'Markus', age: 39 };


    constructor(private personService: PersonService, private sharedService: SharedService) {

    }

    ngOnInit() {
        this.personService.getPersons().subscribe(
            persons => {
                this.persons = persons;
            },
            error => console.log(error)
        );
    }

    toggleTopMenu() {
        this.sharedService.showTopNavbar = !this.sharedService.showTopNavbar;
    }
}
