import {Observable} from 'rxjs/Rx';
import { Injectable } from 'angular2/core';
import {PERSONS} from './mock-persons';
import {Http, Response} from 'angular2/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';

import {Person} from '../person';

@Injectable()
export class PersonService{
  constructor(private http: Http){

  }
  getPersons() : Observable<Person[]>{

    return this.http.get('app/services/persons.json')
                    .map((response : Response) => {
                      if(response.ok === false)
                        throw new Error('Felkod: ' + response.status);

                      let res = response.json();
                      return res.data;
                    })
                    .catch(err=>Observable.throw('fel fel fel: ' + err.text()));

  }
}
