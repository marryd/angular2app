import {Component} from 'angular2/core';
import {Person} from './person';
import {PersonService} from './services/person-service';

@Component({
    selector:
    'my-app',
    template:`
    <h1>{{title}}</h1>
    <div *ngFor="let person1 of persons" >{{person1.name}}</div>
    <h2>{{person.name}} details!</h2>
    <div><label>id: </label>{{person.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]='person.name' placeholder='name' />
    </div>
    <div><label>age: </label>{{person.age}}</div>
    `,
    providers: [PersonService]
})
export class AppComponent {
  persons : Person[];
  title = 'Mackan knackar angular 2';
  person : Person = <Person>{id : 1, name : 'Markus', age : 39};

  constructor(private personService : PersonService){

  }

  ngOnInit(){
    this.personService.getPersons().subscribe(
      persons=> { this.persons = persons },
      error => console.log(error)
    );
  }
}
