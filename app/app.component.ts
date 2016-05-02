import {Component} from 'angular2/core';
import {Person} from './person';

@Component({
    selector:
    'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>{{person.name}} details!</h2>
    <div><label>id: </label>{{person.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]='person.name' placeholder='name' />
    </div>
    <div><label>age: </label>{{person.age}}</div>
    `
})
export class AppComponent {
  title = 'Mackan knackar angular 2';
  person : Person = {id : 1, name : 'Markus', age : 39};
}
