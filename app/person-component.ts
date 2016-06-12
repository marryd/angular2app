import {Component, Output, EventEmitter} from 'angular2/core';
import {Person} from './person';
import {PersonService} from './services/person-service';

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
  `,
    providers: [PersonService],
    outputs: ['moreThanSixPersonsChange']
})

export class PersonOverview {
    persons: Person[];
    title = 'Mackan knackar angular 2';
    person: Person = <Person>{ id: 1, name: 'Markus', age: 39 };
    moreThanSixPersons: boolean = true;
    public moreThanSixPersonsChange = new EventEmitter();

    constructor(private personService: PersonService) {

    }

    ngOnInit() {
        this.personService.getPersons().subscribe(
            persons => {
                this.persons = persons;
                this.moreThanSixPersons = this.persons.length > 6;
            },
            error => console.log(error)
        );
    }

    toggleTopMenu() {
        this.moreThanSixPersons = !this.moreThanSixPersons;
        this.moreThanSixPersonsChange.emit({
          value : this.moreThanSixPersons
        });
    }
}
