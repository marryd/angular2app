import {Component} from 'angular2/core';
import {Person} from './person';

@Component({
    selector:
    'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>{{person.Name}} details!</h2>
    <div><label>id: </label>{{person.Id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]='person.Name' placeholder='Name' />
    </div>
    <div><label>age: </label>{{person.Age}}</div>
    `
})
export class AppComponent {
  title = 'Mackan knackar angular 2';
  person : Person = {Id : 1, Name : 'Markus', Age : 39};
}
